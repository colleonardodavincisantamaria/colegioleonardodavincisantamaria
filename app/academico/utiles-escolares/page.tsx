import PageHero from "@/components/PageHero";
import DocumentCard from "@/components/DocumentCard";
import SectionHeader from "@/components/SectionHeader";

const utiles = [
  { title: "Transición / Preescolar", file: "TRANSICIÓN.pdf" },
  { title: "Pre-Jardín y Jardín", file: "_PRE - JARDÍN Y JARDÍN  .pdf" },
  { title: "Grado 1°", file: "Grado 1°.pdf" },
  { title: "Grado 2° y 3°", file: "Grado 2° y 3° (1).pdf" },
  { title: "Grado 4° y 5°", file: "Lista de utiles escolares  4- 52026.pdf" },
  { title: "Grado 6° a 11°", file: "6° a 11°.pdf" },
];

export default function UtilesEscolaresPage() {
  return (
    <>
      <PageHero
        title="Útiles Escolares"
        subtitle="Lista de útiles escolares por grado para el año 2026."
        breadcrumb="Académico"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Listas 2026"
            subtitle="Descarga la lista de útiles correspondiente al grado de tu hijo/a."
          />
          <div className="grid gap-4">
            {utiles.map(({ title, file }) => (
              <DocumentCard
                key={file}
                title={title}
                description="Lista de útiles escolares para el año 2026."
                href={`/documentos/utiles/${encodeURIComponent(file)}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
