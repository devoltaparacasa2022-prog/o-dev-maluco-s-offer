import {
  Home,
  FileText,
  CalendarCheck,
  Wifi,
  MapPin,
  ShieldCheck,
  BedDouble,
  Info,
  Link2,
  QrCode,
  Palette,
  Heart,
  Monitor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { PackageCheck } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  description?: string;
  emphasis?: boolean;
};

const items: Item[] = [
  {
    icon: Home,
    title: "25 Guias Digitais da Hospedagem",
    description: "um para cada imóvel, centralizado numa plataforma única sua.",
    emphasis: true,
  },
  { icon: FileText, title: "Informações individuais de cada hospedagem" },
  { icon: CalendarCheck, title: "Check-in e check-out" },
  { icon: Wifi, title: "Wi-Fi" },
  { icon: MapPin, title: "Localização" },
  { icon: ShieldCheck, title: "Regras" },
  { icon: BedDouble, title: "Comodidades" },
  { icon: Info, title: "Instruções importantes" },
  { icon: Link2, title: "Links de acesso" },
  { icon: QrCode, title: "QR Codes" },
  { icon: Palette, title: "Organização e padronização visual" },
  { icon: Heart, title: "Estrutura pensada para facilitar a vida do hóspede" },
  {
    icon: Monitor,
    title:
      "E uma Landing Page para apresentar seu trabalho, seus imóveis, seu e-book e direcionar melhor os interessados.",
  },
];

export const OfferSummary = () => {
  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <SectionHeader
          step="Capítulo 4"
          icon={PackageCheck}
          title="Resumo da Oferta"
        />
        <p className="text-center text-lg text-muted-foreground -mt-4 mb-10">
          O que você vai receber:
        </p>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {items.map(({ icon: Icon, title, description, emphasis }, i) => (
          <Reveal key={i} delay={i * 60} variant="up">
            <div className="glow-card p-4 h-full flex gap-3 items-start hover:border-primary hover:-translate-y-1 transition-all duration-300">
              <Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div className="text-sm leading-snug">
                <p
                  className={
                    emphasis ? "text-primary font-semibold" : "text-foreground"
                  }
                >
                  {title}
                </p>
                {description && (
                  <p className="text-muted-foreground mt-1">{description}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};