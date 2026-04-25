import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function ConductoRegularPage() {
  return (
    <>
      <PageHero
        title="Conducto Regular"
        subtitle="Pasos y procedimientos para la resolución de conflictos en nuestra institución."
        breadcrumb="Documentos"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Conducto Regular y Resolución de Conflictos"
            subtitle="Sigue el conducto regular establecido para una convivencia escolar armónica."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/conducto-regular/CONDUCTO_REGULAR.jpg"
                  alt="Conducto Regular"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-5 pb-5">
                <h3 className="font-bold text-navy">Conducto Regular</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Pasos a seguir para presentar situaciones o inquietudes a las directivas del
                  colegio.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/conducto-regular/RESOLUCION_DE_CONFLICTOS.jpg"
                  alt="Resolución de Conflictos"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-5 pb-5">
                <h3 className="font-bold text-navy">Resolución de Conflictos</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Procedimiento para la resolución pacífica de conflictos entre miembros de la
                  comunidad educativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
