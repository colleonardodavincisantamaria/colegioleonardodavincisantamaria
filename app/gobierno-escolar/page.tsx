import Image from "next/image";
import PageHero from "@/components/PageHero";

const consejos = [
  {
    id: "consejo-de-padres",
    title: "Consejo de Padres",
    image: "/images/gobierno-escolar/1.CONSEJO_DE_PADRES_2026.jpg",
    desc: "Órgano de participación de los padres de familia para apoyar la gestión institucional.",
  },
  {
    id: "personero-contralor",
    title: "Personero y Contralor Estudiantil",
    image: "/images/gobierno-escolar/2.PERSONERO_Y_CONTRALOR_2026_.jpg",
    desc: "Representantes estudiantiles que promueven y defienden los derechos de los estudiantes.",
  },
  {
    id: "consejo-estudiantes",
    title: "Consejo de Estudiantes",
    image: "/images/gobierno-escolar/3.CONSEJO_DE_ESTUDIANTES_2026_.jpg",
    desc: "Máximo órgano colegiado de representación estudiantil de la institución.",
  },
  {
    id: "junta-directiva",
    title: "Junta Directiva",
    image: "/images/gobierno-escolar/4.JUNTA_DIRECTIVA_2026.jpg",
    desc: "Órgano directivo de la Asociación de Padres de Familia del colegio.",
  },
  {
    id: "consejo-directivo",
    title: "Consejo Directivo",
    image: "/images/gobierno-escolar/5.CONSEJO_DIRECTIVO_2026.jpg",
    desc: "Instancia de mayor jerarquía que define políticas institucionales.",
  },
  {
    id: "consejo-academico",
    title: "Consejo Académico",
    image: "/images/gobierno-escolar/6.CONSEJO_ACADEMICO_2026.jpg",
    desc: "Instancia de participación docente que orienta el proceso pedagógico.",
  },
  {
    id: "convivencia-escolar",
    title: "Convivencia Escolar",
    image: "/images/gobierno-escolar/7.CONVIVENCIA_ESCOLAR_2026.jpg",
    desc: "Comité que promueve un ambiente escolar armónico y de sana convivencia.",
  },
  {
    id: "equipo-de-trabajo",
    title: "Nuestro Equipo de Trabajo",
    image: "/images/gobierno-escolar/8.NUESTRO_EQUIPO_DE_TRABAJO_2026.jpg",
    desc: "El talento humano comprometido con la educación de calidad en nuestra institución.",
  },
];

export default function GobiernoEscolarPage() {
  return (
    <>
      <PageHero
        title="Gobierno Escolar"
        subtitle="Conoce los órganos de participación y representación de nuestra comunidad educativa para el año 2026."
        breadcrumb="Institución"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {consejos.map(({ id, title, image, desc }) => (
              <div
                id={id}
                key={id}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
              >
                <div className="relative h-52 w-full bg-slate-100">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-navy text-sm leading-snug">{title}</h2>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{desc}</p>
                  <span className="mt-2 inline-block text-xs font-semibold text-blue/70 bg-blue/5 px-2 py-0.5 rounded-full">
                    2026
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
