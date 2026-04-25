import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contacto"
        subtitle="Estamos disponibles para atenderte. No dudes en escribirnos o visitarnos."
        breadcrumb="Institución"
      />
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-navy mb-5">Información de Contacto</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      label: "Dirección",
                      value: "Santa María, Boyacá, Colombia",
                    },
                    {
                      icon: Phone,
                      label: "Teléfono",
                      value: "Por confirmar",
                    },
                    {
                      icon: Mail,
                      label: "Correo",
                      value: "info@coldavincisantamaria.com",
                    },
                    {
                      icon: Clock,
                      label: "Horario de Atención",
                      value: "Lunes a Viernes: 7:00 am – 5:00 pm",
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-navy" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                          {label}
                        </p>
                        <p className="text-sm font-medium text-navy mt-0.5">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <Send size={18} className="text-orange" />
                Envíanos un mensaje
              </h2>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Tu teléfono"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Asunto
                  </label>
                  <select
                    name="asunto"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors bg-white"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="matriculas">Matrículas y admisiones</option>
                    <option value="info">Información general</option>
                    <option value="academico">Información académica</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-navy hover:bg-navy-light text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
