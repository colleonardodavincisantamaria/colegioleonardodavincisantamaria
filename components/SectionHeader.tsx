interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h1
        className={`text-3xl lg:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`mt-3 text-base lg:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-14 rounded-full ${centered ? "mx-auto" : ""} ${
          light ? "bg-orange" : "bg-orange"
        }`}
      />
    </div>
  );
}
