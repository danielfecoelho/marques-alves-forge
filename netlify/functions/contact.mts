// Netlify Function (v2) — envia o formulário de contacto via Resend.
// Serve o mesmo caminho que o endpoint TanStack usado no preview,
// para o formulário funcionar sem alterações no frontend.
export const config = { path: "/api/public/contact" };

const RECIPIENT = "daniel.fe.coelho@gmail.com";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function str(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return Response.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = str(body.name, 100);
  const phone = str(body.phone, 30);
  const email = str(body.email, 255);
  const workType = str(body.workType, 100);
  const message = str(body.message, 2000);

  if (!name || phone.length < 6) {
    return Response.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const html = `
    <h2>Novo pedido de orçamento</h2>
    <p><strong>Nome:</strong> ${esc(name)}</p>
    <p><strong>Telefone:</strong> ${esc(phone)}</p>
    <p><strong>Email:</strong> ${esc(email || "—")}</p>
    <p><strong>Tipo de Trabalho:</strong> ${esc(workType || "—")}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${esc(message || "—").replace(/\n/g, "<br/>")}</p>
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

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend send failed", res.status, detail);
    return Response.json({ error: "Falha ao enviar email" }, { status: 502 });
  }

  return Response.json({ ok: true });
};
