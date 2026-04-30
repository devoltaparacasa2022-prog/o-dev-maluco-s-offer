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
    <section className="container">
      <h2 className="font-display text-center text-2xl sm:text-3xl md:text-4xl uppercase mb-8">
        Resumo da oferta:{" "}
        <span className="text-primary">o que você vai receber</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, title, description, emphasis }, i) => (
          <div
            key={i}
            className="glow-card p-4 flex gap-3 items-start hover:border-primary/60 transition-colors"
          >
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
        ))}
      </div>
    </section>
  );
};