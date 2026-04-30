import devMaluco from "@/assets/dev-maluco.png";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-8 pb-12 md:pt-16 md:pb-20 overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,360px)_1fr] gap-8 md:gap-10 items-center">
          {/* Image */}
          <div className="relative mx-auto md:mx-0 animate-fade-in-up">
            <div className="absolute inset-0 -z-10 blur-3xl bg-primary/30 rounded-full" />
            <img
              src={devMaluco}
              alt="Desenvolvedor surpreso fazendo uma oferta maluca"
              width={768}
              height={768}
              className="w-[260px] sm:w-[320px] md:w-[360px] h-auto drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
            />
          </div>

          {/* Title block */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] uppercase">
              <span className="block text-foreground">O Dev</span>
              <span className="block text-primary text-glow">Ficou Maluco</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Uma oferta realmente insana. Por um motivo muito especial.
              <br />
              E atenção: essa oferta tem validade de{" "}
              <span className="text-primary font-semibold">24 horas.</span>
              <br />
              Ao final do tempo, essa página e a oferta desaparecem.
            </p>

            {/* Stamp */}
            <div className="hidden lg:flex absolute -top-2 right-0 items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary animate-spin-slow" />
                <div className="absolute inset-3 rounded-full border border-primary/60" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-2">
                  <span className="font-display text-primary text-sm leading-tight uppercase">
                    Oferta
                    <br />
                    por tempo
                    <br />
                    limitado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stamp */}
        <div className="lg:hidden flex justify-center mt-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-2">
              <span className="font-display text-primary text-xs leading-tight uppercase">
                Oferta
                <br />
                por tempo
                <br />
                limitado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "600ms" }}>
        <span className="text-xs uppercase tracking-widest">Role para começar</span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};