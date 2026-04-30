import { User } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  "Meu custo com cada projeto é basicamente o meu tempo. Tenho margem para negociar e ainda fazer sentido para mim.",
  "Fechar um projeto desse porte me permite reservar uma janela exclusiva de produção, sem dividir minha atenção entre vários projetos menores.",
  "O seu projeto para mim é um baita case no meu portfólio e você é uma cliente muito estratégica.",
];

export const WhySection = () => {
  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <SectionHeader
          step="Capítulo 2"
          icon={User}
          title="Por que eu estou"
          highlight="fazendo isso?"
        />
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-5">
        <Reveal delay={100}>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Primeiro preciso que você entenda o meu negócio:
          </p>
        </Reveal>

        {reasons.map((text, i) => (
          <Reveal
            key={i}
            delay={200 + i * 150}
            variant={i % 2 === 0 ? "left" : "right"}
          >
            <div className="glow-card p-5 sm:p-6 flex gap-4 items-start">
              <span className="font-display text-3xl sm:text-4xl text-primary leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-1">
                {text}
              </p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={750} variant="scale">
          <p className="text-xl sm:text-2xl font-display uppercase text-center text-primary text-glow mt-8">
            Por tudo isso, eu posso fazer uma oferta que é realmente maluca,
            mas que faz sentido para nós dois.
          </p>
        </Reveal>
      </div>
    </section>
  );
};