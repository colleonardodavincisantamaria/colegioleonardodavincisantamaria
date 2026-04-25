import PageHero from "@/components/PageHero";
import DocumentCard from "@/components/DocumentCard";
import SectionHeader from "@/components/SectionHeader";

export default function ProyectoPedagogicoPage() {
  return (
    <>
      <PageHero
        title="Proyecto Pedagógico"
        subtitle="Proyectos institucionales que orientan el proceso educativo del Colegio Leonardo Da Vinci."
        breadcrumb="Académico"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Proyectos Institucionales 2025"
            subtitle="Documentos que describen los proyectos pedagógicos en desarrollo."
          />
          <div className="grid gap-4">
            <DocumentCard
              title="Proyecto Institucional 2025 — Grado 1° a 11°"
              description="Proyecto pedagógico institucional para todos los grados de primaria y secundaria."
              href="/documentos/proyecto/PROYECTO  2025 1° A 11°.pdf"
            />
            <DocumentCard
              title="Proyecto Institucional 2025 — Preescolar"
              description="Proyecto pedagógico institucional para los niveles de preescolar."
              href="/documentos/proyecto/PROYECTO PREESCOLAR 2025.pdf"
            />
          </div>
        </div>
      </section>
    </>
  );
}
