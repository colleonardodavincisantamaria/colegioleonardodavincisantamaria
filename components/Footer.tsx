import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/escudo.jpg"
                  alt="Escudo"
                  fill
                  className="object-contain rounded-full"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-sky leading-tight">COLEGIO</p>
                <p className="text-base font-bold leading-tight">Leonardo Da Vinci</p>
              </div>
            </Link>
            <p className="text-sm text-white/60 italic leading-relaxed">
              &ldquo;Un Espacio para Sentir, Pensar y Crear&rdquo;
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-orange transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-orange transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-sm font-semibold text-sky uppercase tracking-wider mb-4">
              Institución
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Nosotros", href: "/nosotros" },
                { label: "Gobierno Escolar", href: "/gobierno-escolar" },
                { label: "Contacto", href: "/contacto" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-sm font-semibold text-sky uppercase tracking-wider mb-4">
              Documentos
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Cronogramas", href: "/academico/cronogramas" },
                { label: "Útiles Escolares", href: "/academico/utiles-escolares" },
                { label: "Formatos", href: "/documentos/formatos" },
                { label: "Circulares", href: "/documentos/circulares" },
                { label: "Reglamentos", href: "/documentos/reglamentos" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-sky uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="text-orange mt-0.5 flex-shrink-0" />
                <span>Santa María, Boyacá, Colombia</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone size={15} className="text-orange flex-shrink-0" />
                <a href="tel:" className="hover:text-white transition-colors">
                  Por confirmar
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail size={15} className="text-orange flex-shrink-0" />
                <a
                  href="mailto:info@coldavincisantamaria.com"
                  className="hover:text-white transition-colors"
                >
                  info@coldavincisantamaria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Colegio Leonardo Da Vinci. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">Santa María, Boyacá, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
