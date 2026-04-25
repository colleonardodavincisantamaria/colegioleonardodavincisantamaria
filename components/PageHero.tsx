interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="hero-gradient pt-28 pb-14 lg:pt-36 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <p className="text-sky/70 text-sm font-medium mb-2">{breadcrumb}</p>
        )}
        <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base lg:text-xl text-white/75 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-5 h-1 w-16 bg-orange rounded-full" />
      </div>
    </section>
  );
}
