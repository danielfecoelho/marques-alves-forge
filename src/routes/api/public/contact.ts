import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const RECIPIENT = "daniel.fe.coelho@gmail.com";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
  workType: z.string().trim().max(100),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          return Response.json(
            { error: "Email service not configured" },
            { status: 500 },
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Dados inválidos", details: parsed.error.flatten() },
            { status: 400 },
          );
        }

        const { name, phone, email, workType, message } = parsed.data;

        const html = `
          <h2>Novo pedido de orçamento</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email || "—")}</p>
          <p><strong>Tipo de Trabalho:</strong> ${escapeHtml(workType)}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="color:#888;font-size:12px">Enviado pelo formulário do website — Serralharia Marques Alves</p>
        `;

        const payload: Record<string, unknown> = {
          from: "Website Serralharia <onboarding@resend.dev>",
          to: [RECIPIENT],
          subject: `Novo pedido de orçamento — ${name}`,
          html,
        };
        if (email) payload.reply_to = email;

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          console.error("Resend send failed", res.status, data);
          return Response.json(
            { error: "Falha ao enviar email" },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
