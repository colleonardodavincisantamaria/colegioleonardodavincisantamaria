import PageHero from "@/components/PageHero";
import DocumentCard from "@/components/DocumentCard";
import SectionHeader from "@/components/SectionHeader";

const formatos = [
  {
    title: "Formato de Inasistencia por Días",
    desc: "Para justificar ausencias que abarcan uno o más días escolares.",
    file: "1.FORMATO SALIDA POR DÍAS.pdf",
  },
  {
    title: "Formato de Inasistencia por Horas",
    desc: "Para justificar ausencias parciales durante la jornada escolar.",
    file: "2.FORMATO SALIDA POR HORAS.pdf",
  },
  {
    title: "Autorización Retiro de Estudiantes con Acompañante",
    desc: "Autorización para que un acompañante distinto al acudiente retire al estudiante.",
    file: "3.AUTORIZACIÓN RETIRO DE ESTUDIANTES DEL COLEGIO.pdf",
  },
  {
    title: "Autorización Retiro Solo de Estudiantes",
    desc: "Autorización para que el estudiante salga del colegio sin acompañante.",
    file: "4.AUTORIZACIÓN RETIRO SOLOS DE ESTUDIANTES DEL COLEGIO.pdf",
  },
  {
    title: "Formato Descripción de los Hechos (Manual de Convivencia)",
    desc: "Formato para reportar situaciones relacionadas con convivencia escolar.",
    file: "FORMATO-DESCRIPCIÓN-DE-LOS-HECHOS-MANUAL-DE-CONVIVENCIA-1 - copia.pdf",
  },
];

export default function FormatosPage() {
  return (
    <>
      <PageHero
        title="Formatos"
        subtitle="Descarga los formatos oficiales para trámites y solicitudes del colegio."
        breadcrumb="Documentos"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Formatos Disponibles"
            subtitle="Imprime, diligencia y entrega en secretaría el formato correspondiente."
          />
          <div className="grid gap-4">
            {formatos.map(({ title, desc, file }) => (
              <DocumentCard
                key={file}
                title={title}
                description={desc}
                href={`/documentos/formatos/${encodeURIComponent(file)}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
