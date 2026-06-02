import PageHero from "@/components/PageHero";
import DocumentCard from "@/components/DocumentCard";
import SectionHeader from "@/components/SectionHeader";

const circularesParent = [
  "CIRCULAR No. 1. MATRÍCULAS ACADÉMICAS 2026.pdf",
  "CIRCULAR No. 2. ENTREGA DE TEXTOS ESCOLARES SANTILLANA.pdf",
  "CIRCULAR No. 3  GRUPOS DE NATACIÓN.pdf",
  "CIRCULAR No. 4  MANEJO HORARIOS DE CLASE SEMANA 16-20 FEB..pdf",
  "CIRCULAR No. 5 ESCUELA DE FORMACIÓN.pdf",
  "CIRCULAR No. 6 MEDIOS DE COMUNICACIÓN.pdf",
  "CIRCULAR No. 7 REPROGRAMACIÓN SIMULACRO No.1 IM-PROVE.pdf",
  "CIRCULAR No. 7 SIMULACRO No.1 IM-PROVE.pdf",
  "CIRCULAR No. 8 RECESO SEMANA SANTA.pdf",
  "CIRCULAR No. 9 CORTE DE NOTAS PAGINA WEB COLEGIOS.pdf",
  "CIRCULAR No. 10 DANZAS HORARIO PARA 7° A 11°.pdf",
  "CIRCULAR No. 11 JORNADA PEDAGODICA 17 DE ABRIL 2026.pdf",
  "CIRCULAR No. 12 VICULACIÓN PARA INSTAGRAM.pdf",
  "CIRCULAR No. 13 CRONOGRAMA  EVALUACIONES GENERALES PRIMER PERIODO.pdf",
  "CIRCULAR No. 13.1  CRONOGRAMA EVALUACIONES GENERALES PRIMER PERIODO.pdf",
  "CIRCULAR No. 13.2  CRONOGRAMA EVALUACIONES GENERALES PRIMER PERIODO.pdf",
  "CIRCULAR No. 13.3  CRONOGRAMA EVALUACIONES GENERALES PRIMER PERIODO.pdf",
  "CIRCULAR No. 15 JORNADA PEDAGÓGICA 04 DE MAYO.pdf",
  "CIRCULAR No. 16 DIA DE LOS NIÑOS.pdf",
  "CIRCULAR No. 16 REPROGRAMACIÓN DE APLICACIÓN EVALUACIONES.pdf",
  "CIRCULAR No. 17  SIMULACRO No.2 IM-PROVE.pdf",
  "CIRCULAR No. 18 Programación de actividades institucionales – 13, 14 y 15 de mayo.pdf",
  "CIRCULAR No. 18.1  Programación de actividades institucionales preescolar.pdf",
  "CIRCULAR No. 19 clase  natación Preescolar.pdf",
  "CIRCULAR No. 19 clase educacion fisica y natación.pdf",
  "CIRCULAR No. 20 SALIDA Y ENTREGA DE BOLETINES.pdf",
  "CIRCULAR No. 21 clase de danzas -preescolar.pdf",
  "CIRCULAR No. 21 clase de danzas.pdf",
  "CIRCULAR No. 22 Pagina web.pdf",
].filter((f) => !f.includes("copia"));

const circularesTeacher = [
  "CIRCULAR INFORMATIVA #1 ENTREGA DE HORARIOS.pdf",
  "recepcion de documentos entregados.pdf",
  "recepcion de documentos.pdf",
];

function cleanTitle(filename: string) {
  return filename.replace(".pdf", "").replace(/^CIRCULAR\s*(No\.)?\s*/i, "Circular ").trim();
}

export default function CircularesPage() {
  return (
    <>
      <PageHero
        title="Circulares"
        subtitle="Comunicados informativos para padres de familia y docentes."
        breadcrumb="Documentos"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Padres */}
          <div>
            <SectionHeader
              title="Circulares — Padres de Familia"
              subtitle="Comunicados informativos para la comunidad de padres y acudientes."
            />
            <div className="grid gap-3">
              {circularesParent.map((file) => (
                <DocumentCard
                  key={file}
                  title={cleanTitle(file)}
                  href={`/documentos/circulares/padres/${encodeURIComponent(file)}`}
                />
              ))}
            </div>
          </div>

          {/* Docentes */}
          <div>
            <SectionHeader
              title="Circulares — Docentes"
              subtitle="Comunicados y documentos informativos para el equipo docente."
            />
            <div className="grid gap-3">
              {circularesTeacher.map((file) => (
                <DocumentCard
                  key={file}
                  title={cleanTitle(file)}
                  href={`/documentos/circulares/docentes/${encodeURIComponent(file)}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
