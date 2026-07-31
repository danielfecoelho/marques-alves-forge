import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, HardHat, Building2, DoorOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-original.png";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import amiantoHero from "@/assets/amianto-hero.png.asset.json";

type ServiceContent = {
  title: string;
  tagline: string;
  intro: string;
  icon: typeof ShieldCheck;
  hero: string;
  highlights: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  gallery: string[];
  completed: string;
};

const CONTENT: Record<string, ServiceContent> = {
  "remocao-amianto": {
    title: "Remoção de Amianto",
    tagline: "Trabalho certificado, seguro e conforme a legislação",
    intro:
      "Executamos a remoção de coberturas em fibrocimento com equipas certificadas, transporte licenciado e destino final autorizado. Substituímos por soluções modernas em painel sandwich, prontas para décadas de uso.",
    icon: ShieldCheck,
    hero: amiantoHero.url,
    highlights: [
      { title: "Equipa certificada", desc: "Técnicos com formação específica em remoção de materiais com amianto." },
      { title: "Transporte licenciado", desc: "Recolha, transporte e encaminhamento para operador autorizado." },
      { title: "Substituição imediata", desc: "Instalação de nova cobertura em painel sandwich." },
    ],
    process: [
      { step: "01", title: "Avaliação técnica", desc: "Visita ao local, medição e proposta detalhada, sem compromisso." },
      { step: "02", title: "Plano de trabalhos", desc: "Submissão do plano à entidade competente e calendarização da obra." },
      { step: "03", title: "Remoção segura", desc: "Desmontagem controlada, embalamento e recolha por operador licenciado." },
      { step: "04", title: "Nova cobertura", desc: "Montagem imediata do novo painel sandwich e entrega da obra." },
    ],
    gallery: [work1, work3, work5, work2],
    completed: "+ de 150 remoções concluídas",
  },
  "coberturas-painel-sandwich": {
    title: "Coberturas em Painel Sandwich / Coberturas Deck",
    tagline: "Isolamento térmico e acústico com montagem rápida",
    intro:
      "Fornecemos e aplicamos coberturas em painel sandwich e cobertura deck para pavilhões industriais e armazéns. Garantimos estanquicidade, isolamento e um acabamento limpo.",
    icon: HardHat,
    hero: work4,
    highlights: [
      { title: "Painéis novos e usados", desc: "Stock permanente no armazém para respostas rápidas." },
      { title: "Isolamento eficiente", desc: "Material isolante de acordo com as especificações técnicas do projeto." },
      { title: "Instalação rápida", desc: "Equipas experientes que minimizam a paragem da atividade." },
    ],
    process: [
      { step: "01", title: "Levantamento", desc: "Medição do vão, análise da estrutura existente e escolha do painel." },
      { step: "02", title: "Proposta clara", desc: "Orçamento detalhado com prazos, materiais e mão de obra." },
      { step: "03", title: "Fornecimento", desc: "Preparação dos painéis, remates e acessórios em armazém próprio." },
      { step: "04", title: "Montagem", desc: "Instalação, remates e limpeza final da obra." },
    ],
    gallery: [work4, work6, work2, work5],
    completed: "+ de 250 coberturas executadas",
  },
  "estruturas-metalicas": {
    title: "Estruturas Metálicas",
    tagline: "Pavilhões e estruturas construídas para durar",
    intro:
      "Projetamos e executamos estruturas metálicas para pavilhões industriais, armazéns, coberturas de grandes vãos e ampliações. Trabalho de precisão com cálculo, corte, soldadura e montagem em obra.",
    icon: Building2,
    hero: work2,
    highlights: [
      { title: "Cálculo rigoroso", desc: "Projeto adaptado às cargas, vãos e utilização prevista." },
      { title: "Soldadura de qualidade", desc: "Execução por soldadores experientes, com acabamentos limpos." },
      { title: "Montagem chave-na-mão", desc: "Da fundação metálica à cobertura, entregamos a obra pronta." },
    ],
    process: [
      { step: "01", title: "Estudo prévio", desc: "Análise do terreno, do uso e das exigências estruturais." },
      { step: "02", title: "Projeto e orçamento", desc: "Desenho técnico, quantidades e proposta de execução." },
      { step: "03", title: "Fabrico em oficina", desc: "Corte, furação e soldadura das peças com controlo de qualidade." },
      { step: "04", title: "Montagem em obra", desc: "Erguimento da estrutura e alinhamentos finais." },
    ],
    gallery: [work2, work4, work6, work7],
    completed: "+ de 200 estruturas montadas",
  },
  "revestimento-fachadas": {
    title: "Revestimento de Fachadas",
    tagline: "Fachadas industriais e comerciais com acabamento duradouro",
    intro:
      "Aplicamos revestimentos de fachada em chapa lacada e painel sandwich para edifícios industriais e comerciais. Um acabamento uniforme, estanque e com longa vida útil.",
    icon: DoorOpen,
    hero: work3,
    highlights: [
      { title: "Chapa e painel", desc: "Várias soluções e cores para adaptar a cada projeto." },
      { title: "Remates limpos", desc: "Cunhais, cantos e vãos executados com rigor." },
      { title: "Manutenção reduzida", desc: "Materiais resistentes à corrosão e aos agentes atmosféricos." },
    ],
    process: [
      { step: "01", title: "Análise do edifício", desc: "Medição das fachadas e escolha do sistema mais adequado." },
      { step: "02", title: "Proposta", desc: "Orçamento com materiais, cores e prazos." },
      { step: "03", title: "Preparação", desc: "Fornecimento dos painéis e acessórios necessários." },
      { step: "04", title: "Aplicação", desc: "Montagem, remates e limpeza da obra." },
    ],
    gallery: [work3, work5, work7, work1],
    completed: "+ de 180 fachadas revestidas",
  },
};

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const data = CONTENT[params.slug];
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Serviço não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.data.title} — Serralharia Marques Alves`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.data.intro.slice(0, 160) },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.data.intro.slice(0, 160) },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-foreground">Serviço não encontrado</h1>
        <p className="mt-3 text-sm text-muted-foreground">O serviço que procura não existe ou foi movido.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          <ArrowLeft className="h-4 w-4" /> Voltar ao início
        </Link>
      </div>
    </div>
  );
}

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
          <Link to="/" hash="porque" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Sobre</Link>
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
            <Link to="/" hash="porque" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Sobre</Link>
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

function ServicePage() {
  const { data } = Route.useLoaderData() as { data: ServiceContent };
  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
          <div className="absolute inset-0 -z-10">
            <img
              src={data.hero}
              alt=""
              className={`h-full w-full object-cover object-center ${data.hero === amiantoHero.url ? "opacity-70" : "opacity-40"}`}
            />
            <div
              className={
                data.hero === amiantoHero.url
                  ? "absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/40"
                  : "absolute inset-0 bg-gradient-to-t from-secondary via-secondary/85 to-secondary/60"
              }
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
            <Link to="/" hash="servicos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Todos os serviços
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-white text-black">
                <Icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">{data.tagline}</span>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-secondary-foreground/85 sm:text-lg">
              {data.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
              <div className="w-full">
                <div className="inline-flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wider text-white sm:text-base">{data.completed}</span>
                </div>
              </div>
              <Button asChild size="lg" className="btn-accent-sweep h-14 w-full bg-white px-8 text-base text-black hover:bg-white/90 sm:w-auto">
                <Link to="/" hash="contacto">
                  Pedir Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Porquê connosco</span>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl md:text-4xl">Um serviço completo</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-3">
              {data.highlights.map((h) => (
                <div key={h.title} className="rounded-md border border-border bg-card p-7">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase text-foreground">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-secondary py-14 text-secondary-foreground sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Como trabalhamos</span>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase sm:text-3xl md:text-4xl">Processo em 4 etapas</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {data.process.map((p) => (
                <div key={p.step} className="rounded-md border border-secondary-foreground/10 bg-secondary-foreground/[0.03] p-7">
                  <div className="font-display text-3xl font-bold text-accent">{p.step}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold uppercase">{p.title}</h3>
                  <p className="mt-2 text-sm text-secondary-foreground/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-muted py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Trabalhos</span>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl md:text-4xl">Exemplos recentes</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 md:grid-cols-4">
              {data.gallery.map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-md bg-secondary">
                  <img src={src} alt={`${data.title} — foto ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="btn-accent-sweep border-foreground bg-background text-foreground hover:bg-background hover:text-foreground">
                <Link to="/" hash="trabalhos">Ver mais trabalhos <ArrowRight className="h-4 w-4" /></Link>
              </Button>
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
              Peça um orçamento gratuito e sem compromisso. Resposta em menos de 24 horas.
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