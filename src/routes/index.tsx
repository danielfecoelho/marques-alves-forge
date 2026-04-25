import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, Building2, HardHat, DoorOpen, ShieldCheck, CheckCircle2, Hammer, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-metalwork.jpg";
import logo from "@/assets/logo-original.png";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "916 328 909";
const PHONE_RAW = "+351916328909";
const WHATSAPP = "https://wa.me/351916328909?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento.";
const EMAIL = "geral@serralhariamarquesalves.pt";
const ADDRESS = "Rua de Real, 4765-148 Pedome";
const SCHEDULE = "Seg a Sex · 07:00 – 18:00";

const services = [
  { icon: ShieldCheck, title: "Remoção de Amianto", desc: "Remoção certificada e segura de coberturas em fibrocimento, com substituição por novos materiais." },
  { icon: HardHat, title: "Coberturas em Painel Sandwich", desc: "Revestimentos de coberturas em painel sandwich, novos ou recuperados, com execução rápida." },
  { icon: Building2, title: "Estruturas Metálicas", desc: "Pavilhões, armazéns e estruturas industriais executadas com precisão e robustez." },
  { icon: DoorOpen, title: "Revestimento de Fachadas", desc: "Revestimentos de fachada em chapa e painel para edifícios industriais e comerciais." },
];

const works = [work1, work2, work3, work4, work5, work6];

const advantages = [
  { icon: Hammer, title: "Orçamentos sem compromisso", desc: "Avaliação gratuita e proposta detalhada para o seu projeto." },
  { icon: Award, title: "Materiais de alta qualidade", desc: "Trabalhamos apenas com fornecedores certificados e materiais duradouros." },
  { icon: Clock, title: "Prazos cumpridos", desc: "Planeamento rigoroso e execução pontual, do início ao fim da obra." },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" aria-label="Serralharia Marques Alves — voltar ao início" className="flex items-center">
          <img src={logo} alt="Serralharia Marques Alves" className="h-10 w-auto rounded-sm md:h-12" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#servicos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Serviços</a>
          <a href="#trabalhos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Trabalhos</a>
          <a href="#porque" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Sobre</a>
          <a href="#contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contacto</a>
        </nav>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" /> Pedir Orçamento
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="Técnico da Serralharia Marques Alves em obra" width={1920} height={1280} className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-secondary/40" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Serralharia Civil & Estruturas Metálicas
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-secondary-foreground md:text-7xl">
            Soluções metálicas <span className="text-white underline decoration-white/40 decoration-4 underline-offset-8">feitas para durar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/85 md:text-xl">
            Especialistas em remoção de amianto, coberturas em painel sandwich, revestimentos de fachada e estruturas metálicas em Pedome e em todo o Norte de Portugal.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-14 bg-white px-8 text-base text-black shadow-[var(--shadow-glow)] hover:bg-white/90">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Pedir Orçamento Grátis <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 border-secondary-foreground/30 bg-transparent px-8 text-base text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
              <a href="#trabalhos">Ver Trabalhos</a>
            </Button>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-secondary-foreground/15 pt-6">
            <div>
              <div className="font-display text-3xl font-bold text-white">15+</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/70">Anos de experiência</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">500+</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/70">Projetos concluídos</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">100%</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/70">Satisfação garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative bg-secondary py-24 text-secondary-foreground">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "linear-gradient(var(--secondary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--secondary-foreground) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
      <div className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Os Nossos Serviços</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">
            Tudo o que o seu projeto precisa
          </h2>
          <p className="mt-4 text-secondary-foreground/70">
            Da conceção à instalação, executamos cada trabalho com o máximo cuidado técnico e atenção ao detalhe.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-md border border-secondary-foreground/10 bg-secondary-foreground/[0.04] p-7 transition-all hover:-translate-y-1 hover:border-accent hover:bg-secondary-foreground/[0.07] hover:shadow-[var(--shadow-industrial)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-accent scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-black">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="trabalhos" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfólio</span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
              Trabalhos recentes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma seleção de projetos executados para clientes residenciais, industriais e comerciais.
            </p>
          </div>
          <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Solicitar projeto semelhante</a>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-md bg-secondary">
              <img
                src={src}
                alt={`Projeto ${i + 1}`}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-end justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-lg font-semibold uppercase text-white">Projeto {String(i + 1).padStart(2, "0")}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="porque" className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Porquê escolher-nos</span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">
              Confiança construída <span className="text-white underline decoration-white/40 decoration-4 underline-offset-8">aço a aço</span>
            </h2>
            <p className="mt-5 text-secondary-foreground/75">
              A Serralharia Marques Alves é reconhecida pela eficácia e qualidade nos seus serviços: remoção de amianto, revestimentos de coberturas em painel sandwich, revestimentos de fachada e estruturas metálicas. No nosso armazém, dispomos também de painéis sandwich novos ou usados e praticamente todo o tipo de ferro para venda ao público (limitado ao stock existente).
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-secondary-foreground/80">
              <span className="text-white">★★★★★</span>
              <span>5,0 · Avaliação no Google</span>
            </div>
          </div>
          <div className="space-y-5">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-5 rounded-md border border-secondary-foreground/10 bg-secondary-foreground/[0.03] p-6 transition-colors hover:border-white/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-black">
                  <a.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase">{a.title}</h3>
                  <p className="mt-1 text-sm text-secondary-foreground/70">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-industrial)]">
          <div className="grid lg:grid-cols-2">
            <div className="bg-secondary p-10 text-secondary-foreground md:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Fale connosco</span>
              <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
                Tem um projeto em mente?
              </h2>
              <p className="mt-4 text-secondary-foreground/75">
                Resposta rápida em menos de 24 horas. Ligue, envie mensagem ou visite-nos.
              </p>
              <div className="mt-8 space-y-5">
                <a href={`tel:${PHONE_RAW}`} className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Telefone</div>
                    <div className="font-display text-2xl font-semibold">{PHONE}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Email</div>
                    <div className="text-base font-medium">{EMAIL}</div>
                  </div>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Serralharia+Marques+Alves+Rua+de+Real+Pedome" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Morada</div>
                    <div className="text-base font-medium">{ADDRESS}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Horário</div>
                    <div className="text-base font-medium">{SCHEDULE}</div>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-10 h-14 w-full bg-[#25D366] px-8 text-base text-white hover:bg-[#1faa54]">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Conversar no WhatsApp
                </a>
              </Button>
            </div>
            <form className="space-y-5 p-10 md:p-14" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank"); }}>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground">Pedido de orçamento</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nome</label>
                  <input required className="h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Telefone</label>
                  <input required className="h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                <input type="email" className="h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tipo de Trabalho</label>
                <select className="h-12 w-full rounded-md border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none">
                  <option>Remoção de Amianto</option>
                  <option>Coberturas em Painel Sandwich</option>
                  <option>Revestimento de Fachadas</option>
                  <option>Estruturas Metálicas</option>
                  <option>Venda de Painéis / Ferro</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Descreva o seu projeto</label>
                <textarea rows={4} className="w-full rounded-md border border-input bg-background p-4 text-sm focus:border-primary focus:outline-none" />
              </div>
              <Button type="submit" size="lg" className="h-14 w-full text-base">
                Enviar Pedido <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Sem compromisso. Resposta em menos de 24h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-10 text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <a href="#top" aria-label="Voltar ao início" className="flex items-center">
          <img src={logo} alt="Serralharia Marques Alves" className="h-9 w-auto rounded-sm" />
        </a>
        <p className="text-xs text-secondary-foreground/60">© {new Date().getFullYear()} Serralharia Marques Alves. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-industrial)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
