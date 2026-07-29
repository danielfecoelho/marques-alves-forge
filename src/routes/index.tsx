import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, Building2, HardHat, DoorOpen, ShieldCheck, CheckCircle2, Hammer, Clock, Award, X, ChevronLeft, ChevronRight, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-technician.jpg";
import logo from "@/assets/logo-original.png";
import sobreBg from "@/assets/sobre-bg.jpeg.asset.json";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "916 328 909";
const PHONE_RAW = "+351916328909";
const PHONE_2 = "914 468 612";
const PHONE_2_RAW = "+351914468612";
const WHATSAPP = "https://wa.me/351916328909?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento.";
const EMAIL = "geral@serralhariamarquesalves.pt";
const ADDRESS = "Rua de Real, 4765-148 Pedome";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Rua de Real, 4765-148 Pedome");
const SCHEDULE = "Seg a Sex · 07:00 – 18:00";

const openExternal = (url: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferrer");
};

const services = [
  { slug: "remocao-amianto", icon: ShieldCheck, title: "Remoção de Amianto", desc: "Remoção certificada e segura de coberturas em fibrocimento, com substituição por novos materiais." },
  { slug: "coberturas-painel-sandwich", icon: HardHat, title: "Coberturas em Painel Sandwich", desc: "Revestimentos de coberturas em painel sandwich, novos ou recuperados, com execução rápida." },
  { slug: "estruturas-metalicas", icon: Building2, title: "Estruturas Metálicas", desc: "Pavilhões, armazéns e estruturas industriais executadas com precisão e robustez." },
  { slug: "revestimento-fachadas", icon: DoorOpen, title: "Revestimento de Fachadas", desc: "Revestimentos de fachada em chapa e painel para edifícios industriais e comerciais." },
];

const galleryCategories = [
  {
    id: "amianto",
    label: "Remoção de Amianto",
    images: [work1, work3, work5, work2, work4, work6, work7, work1, work3, work5, work2, work4],
  },
  {
    id: "estruturas",
    label: "Estruturas Metálicas",
    images: [work2, work4, work6, work7, work1, work3, work5, work2, work4, work6, work7, work1],
  },
  {
    id: "fachadas",
    label: "Revestimento de Fachadas",
    images: [work3, work5, work7, work1, work2, work4, work6, work3, work5, work7, work1, work2],
  },
  {
    id: "sandwich",
    label: "Cobertura em Painel Sandwich",
    images: [work4, work6, work2, work5, work7, work1, work3, work4, work6, work2, work5, work7],
  },
] as const;

const advantages = [
  { icon: Hammer, title: "Orçamentos sem compromisso", desc: "Avaliação gratuita e proposta detalhada para o seu projeto." },
  { icon: Award, title: "Materiais de alta qualidade", desc: "Trabalhamos apenas com fornecedores certificados e materiais duradouros." },
  { icon: Clock, title: "Prazos cumpridos", desc: "Planeamento rigoroso e execução pontual, do início ao fim da obra." },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Serralharia Marques Alves — voltar ao início" className="flex items-center">
          <img src={logo} alt="Serralharia Marques Alves" className="h-10 w-auto rounded-sm md:h-12" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#servicos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Serviços</a>
          <a href="#trabalhos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Trabalhos</a>
          <a href="#porque" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Sobre</a>
          <a href="#contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contacto</a>
        </nav>
        <Button asChild size="sm" className="btn-accent-sweep hidden md:inline-flex">
          <a href="#contacto">Pedir Orçamento</a>
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
            <a href="#servicos" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Serviços</a>
            <a href="#trabalhos" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Trabalhos</a>
            <a href="#porque" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Sobre</a>
            <a href="#contacto" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted">Contacto</a>
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-accent-sweep mt-2 inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground">Pedir Orçamento</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="Técnico da Serralharia Marques Alves em obra" width={1920} height={1280} className="h-full w-full object-cover object-right sm:object-center" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-secondary/7" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 md:py-40">
        <div className="max-w-3xl">
          <p className="text-base text-secondary-foreground/85 sm:text-lg md:text-xl">
            Serralharia em Pedome <span className="hidden sm:inline">· </span><br className="sm:hidden" />ao serviço de todo o país
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-secondary-foreground sm:text-5xl md:text-7xl">
            Soluções metálicas <span className="relative inline-block text-white"><span className="relative z-10">feitas para durar</span><span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/70 md:h-4" /></span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-secondary-foreground/85 sm:text-lg md:text-xl">
            Especialistas em remoção de amianto, coberturas em painel sandwich, revestimentos de fachada e estruturas metálicas em todo o país.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button asChild size="lg" className="btn-accent-sweep h-14 w-full bg-white px-8 text-base text-black shadow-[var(--shadow-glow)] hover:bg-white/90 sm:w-auto">
              <a href="#contacto">
                Pedir Orçamento Grátis <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-accent-sweep h-14 w-full border-secondary-foreground/30 bg-transparent px-8 text-base text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground sm:w-auto">
              <a href="#trabalhos">Ver Trabalhos</a>
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-secondary-foreground/15 pt-6 sm:mt-12 sm:gap-6">
            <div>
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">15+</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/70">Anos de experiência</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">500+</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/70">Projetos concluídos</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">100%</div>
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
    <section id="servicos" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Os Nossos Serviços</span>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-foreground sm:text-4xl md:text-5xl">
            Tudo o que o seu projeto precisa
          </h2>
          <p className="mt-4 text-muted-foreground">
            Da conceção à instalação, executamos cada trabalho com o máximo cuidado técnico e atenção ao detalhe.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group relative flex flex-col overflow-hidden rounded-md border border-secondary/20 bg-secondary p-7 text-left text-secondary-foreground transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-industrial)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-black">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-accent">
                Saber mais <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="trabalhos" className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:flex-wrap sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfólio</span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase text-foreground sm:text-4xl md:text-5xl">
              Trabalhos recentes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma seleção de projetos executados para clientes residenciais, industriais e comerciais.
            </p>
          </div>
          <Button asChild variant="outline" className="btn-accent-sweep w-full border-foreground bg-background text-foreground hover:bg-background hover:text-foreground sm:w-auto">
            <a href="#contacto">Solicitar projeto semelhante</a>
          </Button>
        </div>
        <GalleryAlbums />
      </div>
    </section>
  );
}

function GalleryAlbums() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const current = galleryCategories.find((c) => c.id === activeAlbum) ?? null;

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveAlbum(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % current.images.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + current.images.length) % current.images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current]);

  const openAlbum = (id: string) => {
    setActiveAlbum(id);
    setLightboxIndex(0);
  };

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => openAlbum(cat.id)}
            className="group relative aspect-[4/3] overflow-hidden rounded-md bg-secondary text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={cat.images[0]}
              alt={`Álbum ${cat.label}`}
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/90" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:gap-4 sm:p-6">
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {cat.images.length} fotos
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase text-white sm:text-2xl md:text-3xl">
                  {cat.label}
                </h3>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                <Search className="h-5 w-5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-black/95 animate-in fade-in duration-200"
          onClick={() => setActiveAlbum(null)}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4" onClick={(e) => e.stopPropagation()}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Álbum</span>
              <h3 className="font-display text-lg font-bold uppercase text-white md:text-xl">{current.label}</h3>
            </div>
            <button
              type="button"
              aria-label="Fechar álbum"
              onClick={() => setActiveAlbum(null)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => setLightboxIndex((i) => (i - 1 + current.images.length) % current.images.length)}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Próxima"
              onClick={() => setLightboxIndex((i) => (i + 1) % current.images.length)}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <figure className="flex max-h-full max-w-6xl flex-col items-center">
              <img
                src={current.images[lightboxIndex]}
                alt={`${current.label} — foto ${lightboxIndex + 1}`}
                className="max-h-[70vh] w-auto rounded-md object-contain"
              />
              <figcaption className="mt-3 text-center font-display text-sm uppercase tracking-wider text-white/80">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(current.images.length).padStart(2, "0")}
              </figcaption>
            </figure>
          </div>

          <div className="border-t border-white/10 p-4" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1">
              {current.images.map((src, i) => (
                <button
                  key={`${current.id}-thumb-${i}`}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-colors ${
                    i === lightboxIndex ? "border-white" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WhyUs() {
  return (
    <section id="porque" className="relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground sm:py-24">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={sobreBg.url} alt="" className="h-full w-full scale-110 object-contain object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-secondary/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-secondary/45" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Porquê escolher-nos</span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl md:text-5xl">
              Construímos <span className="relative inline-block text-white"><span className="relative z-10">solidez e segurança</span><span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/70 md:h-4" /></span>
            </h2>
            <p className="mt-5 text-secondary-foreground/75 text-justify">
              A Serralharia Marques Alves é reconhecida pela eficácia e qualidade nos seus serviços: remoção de amianto, revestimentos de coberturas em painel sandwich, revestimentos de fachada e estruturas metálicas. No nosso armazém, dispomos também de painéis sandwich novos ou usados e praticamente todo o tipo de ferro para venda ao público (limitado ao stock existente).
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button asChild size="lg" className="btn-accent-sweep h-12 bg-white px-7 text-sm text-black hover:bg-white/90">
                <Link to="/sobre">Conhecer a empresa <ArrowRight className="h-5 w-5" /></Link>
              </Button>
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
    <section id="contacto" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-industrial)]">
          <div className="grid lg:grid-cols-2">
            <div className="bg-secondary p-6 text-secondary-foreground sm:p-10 md:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Fale connosco</span>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
                Tem um projeto em mente?
              </h2>
              <p className="mt-4 text-secondary-foreground/75">
                Resposta rápida em menos de 24 horas. Ligue, envie mensagem ou visite-nos.
              </p>
              <div className="mt-8 space-y-5">
                <div className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Telefone</div>
                    <a href={`tel:${PHONE_RAW}`} className="block font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">{PHONE}</a>
                    <a href={`tel:${PHONE_2_RAW}`} className="block font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl">{PHONE_2}</a>
                  </div>
                </div>
                <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4">
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Email</div>
                    <div className="break-all text-sm font-medium sm:text-base">{EMAIL}</div>
                  </div>
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" onClick={openExternal(MAPS_URL)} className="group flex items-center gap-4">
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Morada</div>
                    <div className="text-base font-medium">{ADDRESS}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">Horário</div>
                    <div className="text-base font-medium">{SCHEDULE}</div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return _Footer();
}

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Nome obrigatório").max(100),
  phone: z.string().trim().min(6, "Telefone inválido").max(30),
  email: z.union([z.literal(""), z.string().trim().email("Email inválido").max(255)]),
  workType: z.string().trim().min(1).max(100),
  message: z.string().trim().max(2000).optional(),
});

type ContactErrors = Partial<Record<"name" | "phone" | "email" | "workType" | "message", string>>;

function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    workType: "Remoção de Amianto",
    message: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      const next: ContactErrors = {};
      (Object.keys(flat) as Array<keyof typeof flat>).forEach((k) => {
        const msg = flat[k]?.[0];
        if (msg) next[k as keyof ContactErrors] = msg;
      });
      setErrors(next);
      toast.error("Verifique os campos do formulário.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("send failed");
      toast.success("Pedido enviado!", {
        description: "Entraremos em contacto em menos de 24h.",
      });
      setValues({ name: "", phone: "", email: "", workType: "Remoção de Amianto", message: "" });
    } catch {
      toast.error("Não foi possível enviar", {
        description: "Tente novamente ou contacte-nos por telefone.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (err?: string) =>
    `h-12 w-full rounded-md border bg-background px-4 text-sm focus:outline-none transition-colors ${
      err ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"
    }`;

  return (
    <form
      className="space-y-5 p-6 sm:p-10 md:p-14 animate-fade-in"
      onSubmit={onSubmit}
      noValidate
    >
      <h3 className="font-display text-xl font-medium text-muted-foreground sm:text-2xl">Ou, se preferir, deixe-nos os detalhes</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nome *</label>
          <input value={values.name} onChange={update("name")} className={fieldClass(errors.name)} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Telefone *</label>
          <input value={values.phone} onChange={update("phone")} className={fieldClass(errors.phone)} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">O seu email</label>
        <input type="email" value={values.email} onChange={update("email")} className={fieldClass(errors.email)} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tipo de Trabalho</label>
        <select value={values.workType} onChange={update("workType")} className={fieldClass(errors.workType)}>
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
        <textarea
          rows={4}
          value={values.message}
          onChange={update("message")}
          className={`w-full rounded-md border bg-background p-4 text-sm focus:outline-none transition-colors ${
            errors.message ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"
          }`}
        />
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="btn-accent-sweep h-14 w-full text-base">
        {submitting ? "A enviar..." : (<>Enviar Pedido <ArrowRight className="h-5 w-5" /></>)}
      </Button>
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <CheckCircle2 className="h-4 w-4 text-primary" /> Sem compromisso. Resposta em menos de 24h.
      </p>
    </form>
  );
}

function _Footer() {
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

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
