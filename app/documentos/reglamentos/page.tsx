import PageHero from "@/components/PageHero";
import DocumentCard from "@/components/DocumentCard";
import SectionHeader from "@/components/SectionHeader";

export default function ReglamentosPage() {
  return (
    <>
      <PageHero
        title="Reglamentos"
        subtitle="Documentos normativos que rigen la vida institucional del Colegio Leonardo Da Vinci."
        breadcrumb="Documentos"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Documentos Normativos"
            subtitle="Descarga los reglamentos y estatutos institucionales."
          />
          <div className="grid gap-4">
            <DocumentCard
              title="Reglamento Interno de Trabajo"
              description="Normas que regulan las relaciones laborales dentro de la institución."
              href="/documentos/reglamentos/2. REGLAMENTO INTERNO DE TRABAJO.pdf"
            />
            <DocumentCard
              title="Estatutos Asociación de Padres de Familia"
              description="Estatutos que regulan la Asociación de Padres de Familia del Colegio LDV."
              href="/documentos/reglamentos/3.ESTATUTOS DE ASOCIAIÓN DE PADRES D EFAMILIA COLEGIO LDV.pdf"
            />
          </div>
          <div className="mt-8 bg-blue/5 border border-blue/15 rounded-2xl p-6">
            <p className="text-sm text-navy font-semibold mb-1">Manual de Convivencia</p>
            <p className="text-sm text-slate-500">
              El Manual de Convivencia se encuentra en proceso de aprobación por el Consejo
              Directivo. Estará disponible próximamente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
