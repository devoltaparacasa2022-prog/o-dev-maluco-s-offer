import { useEffect } from "react";
import { Zap } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import { OFFER_DEADLINE } from "@/config/offer";

const Cell = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative rounded-xl border-2 border-primary/60 bg-card px-4 sm:px-6 py-3 sm:py-4 min-w-[88px] sm:min-w-[120px] shadow-[0_0_25px_hsl(var(--primary)/0.3)]">
      <div className="absolute inset-x-0 top-1/2 h-px bg-primary/20" />
      <span className="font-display text-5xl sm:text-7xl text-foreground tabular-nums tracking-wider">
        {value}
      </span>
    </div>
    <span className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
  </div>
);

type Props = { onExpired: () => void };

export const Countdown = ({ onExpired }: Props) => {
  const { hours, minutes, seconds, expired } = useCountdown(OFFER_DEADLINE);

  useEffect(() => {
    if (expired) onExpired();
  }, [expired, onExpired]);

  if (expired) return null;

  return (
    <section className="container">
      <div className="text-center">
        <h2 className="flex items-center justify-center gap-3 font-display text-xl sm:text-2xl md:text-3xl uppercase">
          <Zap className="w-6 h-6 text-primary fill-primary" />
          A oferta tem validade de:
          <Zap className="w-6 h-6 text-primary fill-primary" />
        </h2>

        <div className="mt-6 flex items-end justify-center gap-3 sm:gap-5">
          <Cell value={hours} label="Horas" />
          <span className="font-display text-5xl sm:text-7xl text-primary pb-7">
            :
          </span>
          <Cell value={minutes} label="Minutos" />
          <span className="font-display text-5xl sm:text-7xl text-primary pb-7">
            :
          </span>
          <Cell value={seconds} label="Segundos" />
        </div>

        <p className="font-handwritten text-xl sm:text-2xl text-muted-foreground mt-6">
          Ao final do tempo, essa página e a oferta desaparecem.
        </p>
      </div>
    </section>
  );
};