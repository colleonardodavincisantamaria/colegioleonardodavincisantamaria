import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ExternalLink, Calendar, FileText, ArrowRight } from "lucide-react";

export default function DocentesPage() {
  return (
    <>
      <PageHero
        title="Docentes"
        subtitle="Acceso a plataformas y recursos exclusivos para el equipo docente del Colegio Leonardo Da Vinci."
        breadcrumb="Comunidad"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 bg-navy/5 border border-navy/15 rounded-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
            <p className="text-sm text-navy">
              Algunas secciones son de <strong>acceso restringido</strong> para docentes y
              directivos. Inicia sesión con tu cuenta institucional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-blue" />
              </div>
              <h2 className="font-bold text-navy text-lg mb-2">Google Classroom</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Gestiona tus clases, asigna tareas, sube materiales y hace seguimiento del
                progreso de tus estudiantes.
              </p>
              <a
                href="https://classroom.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-light transition-colors"
              >
                Ir a Classroom <ExternalLink size={14} />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4">
                <Calendar size={24} className="text-navy" />
              </div>
              <h2 className="font-bold text-navy text-lg mb-2">Cronograma Docentes</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Consulta el cronograma de jornadas pedagógicas, reuniones y actividades
                institucionales para el año 2026.
              </p>
              <Link
                href="/academico/cronogramas"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-light transition-colors"
              >
                Ver cronograma <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm sm:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                <FileText size={24} className="text-orange" />
              </div>
              <h2 className="font-bold text-navy text-lg mb-2">Circulares Docentes</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Circulares informativas y documentos administrativos destinados al equipo docente
                de la institución.
              </p>
              <Link
                href="/documentos/circulares"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange text-white text-sm font-semibold rounded-xl hover:bg-orange-light transition-colors"
              >
                Ver circulares <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
