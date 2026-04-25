import PageHero from "@/components/PageHero";
import DocumentCard from "@/components/DocumentCard";
import SectionHeader from "@/components/SectionHeader";

export default function CronogramasPage() {
  return (
    <>
      <PageHero
        title="Cronogramas"
        subtitle="Actividades programadas para el año escolar 2026."
        breadcrumb="Académico"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Cronogramas 2026"
            subtitle="Descarga los cronogramas de actividades para estudiantes y docentes."
          />
          <div className="grid gap-4">
            <DocumentCard
              title="Cronograma de Estudiantes 2026"
              description="Actividades, evaluaciones y eventos programados para el año escolar."
              href="/documentos/cronogramas/CRONOGRAMA ESTUDIANTES 2026.pdf"
            />
            <DocumentCard
              title="Cronogramas Docentes 2026"
              description="Calendario de actividades, jornadas pedagógicas y reuniones para docentes."
              href="/documentos/cronogramas/CRONOGRAMAS DOCENTES 2026.pdf"
            />
          </div>
        </div>
      </section>
    </>
  );
}
