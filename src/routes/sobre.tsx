import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, Award, Hammer, Users, Wrench, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-original.png";
import sobreBg from "@/assets/sobre-bg.jpeg.asset.json";
import oficio1 from "@/assets/sobre-oficio-1.jpeg.asset.json";
import oficio2 from "@/assets/sobre-oficio-2.jpeg.asset.json";

const PHONE = "916 328 909";
const PHONE_RAW = "+351916328909";
const EMAIL = "geral@serralhariamarquesalves.pt";
const ADDRESS = "Rua de Real, 4765-148 Pedome";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Serralharia+Marques+Alves+Lda+Pedome";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Serralharia Marques Alves | História, equipa e valores" },
      { name: "description", content: "Conheça a Serralharia Marques Alves: mais de 15 anos em Pedome a executar coberturas, estruturas metálicas, fachadas e remoção certificada de amianto." },
      { property: "og:title", content: "Sobre — Serralharia Marques Alves" },
      { property: "og:description", content: "Uma equipa com décadas de experiência em serralharia civil e estruturas metálicas, ao serviço de todo o país." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SobrePage,
});

const values = [
  { icon: ShieldCheck, title: "Segurança primeiro", desc: "Trabalho certificado, equipamentos de proteção e procedimentos rigorosos em cada obra." },
  { icon: Award, title: "Qualidade sem atalhos", desc: "Materiais duradouros e execução cuidada, para obras que resistem ao tempo." },
  { icon: Hammer, title: "Compromisso com o prazo", desc: "Planeamos cada intervenção para minimizar impactos na atividade do cliente." },
  { icon: Users, title: "Relação de proximidade", desc: "Falamos consigo do orçamento à entrega, sem intermediários." },
];

const timeline = [
  { year: "2022", title: "Início da atividade", desc: "Arranque em Pedome com foco em serralharia civil e pequenas estruturas." },
  { year: "2023", title: "Especialização em coberturas", desc: "Expansão para coberturas em painel sandwich / coberturas deck e revestimentos de fachada." },
  { year: "2024", title: "Certificação em amianto", desc: "Equipa preparada e licenciada para remoção segura de fibrocimento." },
  { year: "2026", title: "Obras em todo o país", desc: "Presença consolidada em projetos industriais e comerciais de norte a sul." },
];

const capabilities = [
  { icon: Wrench, title: "Oficina própria", desc: "Corte, furação e soldadura executados nas nossas instalações em Pedome." },
  { icon: Hammer, title: "Montagem em obra", desc: "Equipas móveis prontas a intervir em pavilhões, armazéns e edifícios comerciais." },
];

function PageHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" aria-label="Serralharia Marques Alves — voltar ao início" className="flex items-center">
          <img src={logo} alt="Serralharia Marques Alves" className="h-10 w-auto rounded-sm md:h-12" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" hash="servicos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Serviços</Link>
          <Link to="/" hash="trabalhos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Trabalhos</Link>
          <Link to="/sobre" className="text-sm font-medium text-foreground">Sobre</Link>
          <Link to="/" hash="contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contacto</Link>
        </nav>
        <Button asChild size="sm" className="btn-accent-sweep hidden md:inline-flex">
          <Link to="/" hash="contacto">Pedir Orçamento</Link>
        </Button>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-muted md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            <Link to="/" hash="servicos" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Serviços</Link>
            <Link to="/" hash="trabalhos" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Trabalhos</Link>
            <Link to="/sobre" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Sobre</Link>
            <Link to="/" hash="contacto" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Contacto</Link>
            <Link to="/" hash="contacto" onClick={() => setOpen(false)} className="btn-accent-sweep mt-2 inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">Pedir Orçamento</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="border-t border-border bg-secondary py-10 text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <Link to="/" aria-label="Voltar ao início" className="flex items-center">
          <img src={logo} alt="Serralharia Marques Alves" className="h-9 w-auto rounded-sm" />
        </Link>
        <p className="text-xs text-secondary-foreground/60">© {new Date().getFullYear()} Serralharia Marques Alves. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
          <div className="absolute inset-0 -z-10">
            <img src={sobreBg.url} alt="" className="h-[118%] w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-secondary/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/40 to-secondary/60" />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-20 text-left sm:px-6 sm:py-24 md:py-32">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Voltar ao início
            </Link>
            <div className="mt-12 sm:mt-16">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">A nossa história</span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Serralharia <span className="relative inline-block text-white"><span className="relative z-10">Marques Alves</span><span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/70 md:h-4" /></span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-secondary-foreground/85 sm:text-lg">
              Uma equipa sediada em Pedome, com mais de uma década a executar coberturas, estruturas metálicas, revestimentos de fachada e remoção certificada de amianto — para clientes residenciais, industriais e comerciais em todo o país.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Quem somos</span>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl md:text-4xl">
                Um ofício levado a sério
              </h2>
              <p className="mt-5 text-muted-foreground text-justify">
                A Serralharia Marques Alves nasceu para dar resposta a quem procura um parceiro de confiança para obras metálicas exigentes. Trabalhamos lado a lado com o cliente, do primeiro esboço à entrega da obra, com a garantia de que o que fazemos é feito para durar.
              </p>
              <p className="mt-4 text-muted-foreground text-justify">
                Combinamos oficina própria e várias equipas experientes em obra. Assim conseguimos responder rapidamente — seja um pavilhão industrial completo, uma cobertura em painel sandwich / cobertura deck ou a remoção segura de coberturas em fibrocimento.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
                <div>
                  <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">10+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Anos de experiência</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">500+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Projetos concluídos</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">100%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Satisfação garantida</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={oficio1.url} alt="Equipa da Serralharia Marques Alves em obra" className="aspect-[4/5] w-full rounded-md object-cover" />
              <img src={oficio2.url} alt="Técnico em estrutura metálica" className="aspect-[4/5] w-full rounded-md object-cover" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-14 text-secondary-foreground sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Os nossos valores</span>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase sm:text-3xl md:text-4xl">O que nos guia</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-md border border-secondary-foreground/10 bg-secondary-foreground/[0.03] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-black">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold uppercase">{v.title}</h3>
                  <p className="mt-2 text-sm text-secondary-foreground/70">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Percurso</span>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl md:text-4xl">Uma trajetória construída passo a passo</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((t) => (
                <div key={t.year} className="relative rounded-md border border-border bg-card p-7">
                  <div className="font-display text-4xl font-bold text-accent">{t.year}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold uppercase text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-muted py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Recursos próprios</span>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl md:text-4xl">Capacidade de resposta, do projeto à obra</h2>
              <p className="mt-4 text-muted-foreground">
                Contamos com meios próprios que nos permitem controlar prazos e qualidade em cada etapa.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title} className="rounded-md border border-border bg-background p-7">
                  <c.icon className="h-7 w-7 text-accent" />
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold uppercase text-foreground sm:text-3xl md:text-4xl">
              Pronto para avançar com o seu projeto?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Peça um orçamento gratuito e sem compromisso.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="btn-accent-sweep h-14 px-8 text-base">
                <Link to="/" hash="contacto">Enviar pedido <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}