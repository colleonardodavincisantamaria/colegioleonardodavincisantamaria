import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Heart, Lightbulb, Target, Users } from "lucide-react";

const valores = [
  { icon: Heart, title: "Respeto", desc: "Reconocemos y valoramos la dignidad de cada persona en nuestra comunidad." },
  { icon: Lightbulb, title: "Creatividad", desc: "Fomentamos el pensamiento innovador y la expresión artística en todos los niveles." },
  { icon: Target, title: "Responsabilidad", desc: "Cumplimos nuestros compromisos académicos y sociales con excelencia." },
  { icon: Users, title: "Comunidad", desc: "Construimos lazos de solidaridad entre estudiantes, familias y docentes." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Nosotros"
        subtitle="Conoce la historia, misión y equipo del Colegio Leonardo Da Vinci de Santa María, Boyacá."
        breadcrumb="Institución"
      />

      {/* Misión y Visión */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy rounded-3xl p-8 text-white">
              <div className="w-12 h-12 rounded-2xl bg-orange/20 flex items-center justify-center mb-5">
                <Target size={24} className="text-orange" />
              </div>
              <h2 className="text-xl font-bold text-sky mb-3">Nuestra Misión</h2>
              <p className="text-white/75 leading-relaxed text-sm">
                El Colegio Leonardo Da Vinci tiene como misión formar personas íntegras, creativas
                y comprometidas con la sociedad, a través de una educación de calidad que integra
                los valores humanos, la excelencia académica y el desarrollo artístico y
                tecnológico, contribuyendo al progreso de Santa María, Boyacá y de Colombia.
              </p>
            </div>
            <div className="bg-blue rounded-3xl p-8 text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <Lightbulb size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Nuestra Visión</h2>
              <p className="text-white/80 leading-relaxed text-sm">
                Para 2030, el Colegio Leonardo Da Vinci será reconocido como la institución
                educativa de mayor impacto en el municipio de Santa María y la región de Boyacá,
                destacándose por su modelo pedagógico innovador, la formación integral de sus
                estudiantes y su contribución al desarrollo cultural y social de la región.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escudo e historia */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-blue/10 blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-navy/20">
                  <Image
                    src="/images/escudo.jpg"
                    alt="Escudo Colegio Leonardo Da Vinci"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold text-orange uppercase tracking-widest">
                Nuestra identidad
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy">El Escudo Institucional</h2>
              <div className="mt-4 h-1 w-14 bg-orange rounded-full" />
              <p className="mt-6 text-slate-600 leading-relaxed">
                Nuestro escudo institucional representa los pilares fundamentales de la educación
                Da Vinci: la ciencia representada en el engranaje, el arte en la paleta de
                colores, la música en la guitarra, y la sabiduría en el búho — símbolo eterno
                del conocimiento.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                El eslogan <em className="text-navy font-semibold">&ldquo;Un Espacio para Sentir,
                Pensar y Crear&rdquo;</em> resume nuestra filosofía: una educación que no solo
                desarrolla la mente, sino también las emociones y la creatividad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-orange uppercase tracking-widest">
              Lo que nos define
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy">Nuestros Valores</h2>
            <div className="mt-4 h-1 w-14 bg-orange rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-hover bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-navy" />
                </div>
                <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
