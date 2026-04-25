import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Users,
  FileText,
  Calendar,
  ClipboardList,
  Bell,
  ArrowRight,
  GraduationCap,
  Building2,
  Award,
} from "lucide-react";

const quickLinks = [
  {
    icon: Calendar,
    title: "Cronogramas",
    desc: "Actividades del año escolar 2026",
    href: "/academico/cronogramas",
    color: "bg-blue/10 text-blue",
  },
  {
    icon: BookOpen,
    title: "Útiles Escolares",
    desc: "Listas por grado Preescolar a 11°",
    href: "/academico/utiles-escolares",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: FileText,
    title: "Textos Escolares",
    desc: "Material bibliográfico requerido",
    href: "/academico/textos-escolares",
    color: "bg-sky/10 text-sky",
  },
  {
    icon: ClipboardList,
    title: "Formatos",
    desc: "Autorización de inasistencias y retiros",
    href: "/documentos/formatos",
    color: "bg-orange/10 text-orange",
  },
  {
    icon: Bell,
    title: "Circulares",
    desc: "Comunicados para padres y docentes",
    href: "/documentos/circulares",
    color: "bg-blue/10 text-blue",
  },
  {
    icon: Users,
    title: "Gobierno Escolar",
    desc: "Consejos y órganos de participación",
    href: "/gobierno-escolar",
    color: "bg-navy/10 text-navy",
  },
];

const stats = [
  { icon: GraduationCap, value: "Preescolar", label: "hasta Grado 11°" },
  { icon: Building2, value: "Santa María", label: "Boyacá, Colombia" },
  { icon: Award, value: "Bilingüe", label: "Programa de inglés" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gradient min-h-[92vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange/20 text-orange border border-orange/30 mb-6">
                Año Escolar 2026
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Colegio
                <br />
                <span className="text-sky">Leonardo</span>
                <br />
                Da Vinci
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-white/80 italic font-light">
                &ldquo;Un Espacio para Sentir, Pensar y Crear&rdquo;
              </p>
              <p className="mt-4 text-base text-white/65 max-w-lg leading-relaxed">
                Formamos personas íntegras, creativas y comprometidas con la sociedad.
                Educación de calidad en Santa María, Boyacá.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange hover:bg-orange-light text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange/30"
                >
                  Conócenos
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-xl hover:bg-white/15 transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </div>

            {/* Shield */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-sky/20 blur-3xl scale-110" />
                <div className="relative w-56 h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-navy">
                  <Image
                    src="/images/escudo.jpg"
                    alt="Escudo Colegio Leonardo Da Vinci"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 224px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass rounded-2xl px-6 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-orange" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">{value}</p>
                  <p className="text-white/60 text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Access ── */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy">Accesos Rápidos</h2>
            <p className="mt-2 text-slate-500">Los documentos y secciones más consultados</p>
            <div className="mt-3 h-1 w-14 bg-orange rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickLinks.map(({ icon: Icon, title, desc, href, color }) => (
              <Link
                key={href}
                href={href}
                className="card-hover group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue/20"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy text-base group-hover:text-blue transition-colors">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue/70 group-hover:gap-2 transition-all">
                  Ver más <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About snippet ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-orange uppercase tracking-widest">
                Sobre Nosotros
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy leading-tight">
                Formando el futuro de Colombia
              </h2>
              <div className="mt-4 h-1 w-14 bg-orange rounded-full" />
              <p className="mt-6 text-slate-600 leading-relaxed">
                El Colegio Leonardo Da Vinci es una institución educativa comprometida con la
                excelencia académica y la formación integral de sus estudiantes, desde Preescolar
                hasta Grado 11°.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Nuestro modelo pedagógico integra las artes, la ciencia y la tecnología, inspirado
                en el genio universal Leonardo Da Vinci, fomentando la creatividad, el pensamiento
                crítico y los valores humanos.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-2xl font-bold text-navy">100%</p>
                  <p className="text-sm text-slate-500 mt-1">Compromiso educativo</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-2xl font-bold text-navy">Pre — 11°</p>
                  <p className="text-sm text-slate-500 mt-1">Todos los niveles</p>
                </div>
              </div>
              <Link
                href="/nosotros"
                className="mt-6 inline-flex items-center gap-2 text-blue font-semibold hover:text-navy transition-colors"
              >
                Conoce nuestra historia <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Misión", body: "Formar ciudadanos íntegros con valores sólidos y competencias para el siglo XXI." },
                { title: "Visión", body: "Ser reconocidos como la institución educativa de mayor impacto en Boyacá." },
                { title: "Valores", body: "Respeto, creatividad, responsabilidad, honestidad y compromiso social." },
                { title: "Proyecto", body: "Pedagogía activa e innovadora que integra las artes y la tecnología." },
              ].map(({ title, body }) => (
                <div key={title} className="bg-navy rounded-2xl p-5 text-white">
                  <h3 className="font-bold text-sky text-sm uppercase tracking-wide mb-2">
                    {title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="bg-gradient-to-r from-navy via-blue to-sky py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="mt-3 text-white/70 text-base">
            Estamos aquí para ayudarte. Escríbenos o visítanos en Santa María, Boyacá.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-orange hover:bg-orange-light text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange/30"
          >
            Contáctanos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
