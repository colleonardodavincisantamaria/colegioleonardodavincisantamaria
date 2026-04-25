import PageHero from "@/components/PageHero";
import DocumentCard from "@/components/DocumentCard";
import SectionHeader from "@/components/SectionHeader";

const textos = [
  { title: "Textos Preescolar", file: "TEXTOS-PREESCOLAR.pdf" },
  { title: "Textos Grado 1°", file: "TEXTOS-PRIMERO.pdf" },
  { title: "Textos Grado 2°", file: "TEXTOS-SEGUNDO.pdf" },
  { title: "Textos Grado 3°", file: "TEXTOS-TERCERO.pdf" },
  { title: "Textos Grado 4°", file: "TEXTOS-CUARTO.pdf" },
  { title: "Textos Grado 5°", file: "TEXTOS-QUINTO.pdf" },
  { title: "Textos Grado 6°", file: "TEXTOS-SEXTO.pdf" },
  { title: "Textos Grado 7°", file: "TEXTOS-SEPTIMO.pdf" },
  { title: "Textos Grado 8°", file: "TEXTOS-OCTAVO.pdf" },
  { title: "Textos Grado 9°", file: "TEXTOS-NOVENO-1.pdf" },
  { title: "Textos Grado 10°", file: "TEXTOS-DECIMO.pdf" },
  { title: "Textos Grado 11°", file: "TEXTOS-ONCE.pdf" },
  { title: "Nivel de Inglés", file: "NIVEL-DE-INGLES.pdf" },
];

export default function TextosEscolaresPage() {
  return (
    <>
      <PageHero
        title="Textos Escolares"
        subtitle="Material bibliográfico requerido por grado para el año 2026."
        breadcrumb="Académico"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Textos por Grado 2026"
            subtitle="Descarga la lista de textos escolares requeridos para cada nivel."
          />
          <div className="grid gap-4">
            {textos.map(({ title, file }) => (
              <DocumentCard
                key={file}
                title={title}
                description="Textos escolares requeridos para el año académico 2026."
                href={`/documentos/textos/${encodeURIComponent(file)}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
