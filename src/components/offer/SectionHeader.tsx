import type { LucideIcon } from "lucide-react";

type Props = {
  step: string;
  icon: LucideIcon;
  title: string;
  highlight?: string;
};

export const SectionHeader = ({ step, icon: Icon, title, highlight }: Props) => {
  return (
    <div className="text-center mb-8 md:mb-10">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary">
        {step}
      </span>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl uppercase flex items-center justify-center gap-3">
        <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />
        {title}
        {highlight && <span className="text-primary text-glow">{highlight}</span>}
      </h2>
    </div>
  );
};