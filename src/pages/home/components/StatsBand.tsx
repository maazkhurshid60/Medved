import Reveal from "@/components/base/Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import { homeStats } from "@/mocks/home";

interface ParsedStat {
  prefix: string;
  number: number;
  suffix: string;
}

function parseStat(raw: string): ParsedStat {
  const match = raw.match(/^(\D*)([\d.,]+)(\D*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  return {
    prefix: match[1] ?? "",
    number: Number(match[2].replace(/[,]/g, "")) || 0,
    suffix: match[3] ?? "",
  };
}

function StatCard({ raw, label, index }: { raw: string; label: string; index: number }) {
  const parsed = parseStat(raw);
  const { ref, value } = useCountUp(parsed.number);

  return (
    <Reveal index={index} step={120} y={30} className="h-full">
      <div className="glass group flex h-full flex-col justify-between rounded-[28px] p-7 transition-transform duration-500 hover:-translate-y-1 md:p-9">
        <span className="h-px w-10 bg-foreground-950/20" aria-hidden="true" />
        <div className="mt-10">
          <span
            ref={ref}
            className="font-heading text-5xl font-medium leading-none tracking-[-0.02em] text-foreground-950 md:text-6xl"
          >
            {parsed.prefix}
            {value}
            {parsed.suffix}
          </span>
          <p className="mt-4 font-label text-[10px] text-secondary-600">{label}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function StatsBand() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal y={16}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="glass inline-flex rounded-full px-4 py-2 font-label text-[10px] text-foreground-700">
              Track Record
            </span>
            <span className="rule hidden flex-1 md:ml-6 md:block" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {homeStats.map((stat, index) => (
            <StatCard key={stat.label} raw={stat.value} label={stat.label} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}