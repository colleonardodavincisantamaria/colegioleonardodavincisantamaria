import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FileText, Bell, ClipboardList, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Bell,
    title: "Circulares",
    desc: "Mantente al día con los comunicados informativos enviados a los padres de familia.",
    href: "/documentos/circulares",
    color: "bg-blue/10 text-blue",
  },
  {
    icon: ClipboardList,
    title: "Formatos",
    desc: "Descarga los formatos de inasistencia y autorización de retiro de estudiantes.",
    href: "/documentos/formatos",
    color: "bg-orange/10 text-orange",
  },
  {
    icon: FileText,
    title: "Reglamentos",
    desc: "Conoce el Reglamento Interno y los Estatutos de la Asociación de Padres.",
    href: "/documentos/reglamentos",
    color: "bg-navy/10 text-navy",
  },
];

export default function PadresPage() {
  return (
    <>
      <PageHero
        title="Padres de Familia"
        subtitle="Información y recursos para la comunidad de padres y acudientes del Colegio Leonardo Da Vinci."
        breadcrumb="Comunidad"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-navy">Recursos para Padres</h2>
            <div className="mt-3 h-1 w-14 bg-orange rounded-full" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {cards.map(({ icon: Icon, title, desc, href, color }) => (
              <Link
                key={href}
                href={href}
                className="card-hover group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-blue/20"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue/70">
                  Ir a {title} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
