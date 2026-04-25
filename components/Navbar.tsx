"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Gobierno Escolar",
    href: "/gobierno-escolar",
    children: [
      { label: "Consejo de Padres", href: "/gobierno-escolar#consejo-de-padres" },
      { label: "Personero y Contralor", href: "/gobierno-escolar#personero-contralor" },
      { label: "Consejo de Estudiantes", href: "/gobierno-escolar#consejo-estudiantes" },
      { label: "Junta Directiva", href: "/gobierno-escolar#junta-directiva" },
      { label: "Consejo Directivo", href: "/gobierno-escolar#consejo-directivo" },
      { label: "Consejo Académico", href: "/gobierno-escolar#consejo-academico" },
      { label: "Convivencia Escolar", href: "/gobierno-escolar#convivencia-escolar" },
      { label: "Nuestro Equipo", href: "/gobierno-escolar#equipo-de-trabajo" },
    ],
  },
  {
    label: "Académico",
    children: [
      { label: "Cronogramas", href: "/academico/cronogramas" },
      { label: "Útiles Escolares", href: "/academico/utiles-escolares" },
      { label: "Textos Escolares", href: "/academico/textos-escolares" },
      { label: "Proyecto Pedagógico", href: "/academico/proyecto-pedagogico" },
    ],
  },
  {
    label: "Documentos",
    children: [
      { label: "Reglamentos", href: "/documentos/reglamentos" },
      { label: "Formatos", href: "/documentos/formatos" },
      { label: "Circulares", href: "/documentos/circulares" },
      { label: "Conducto Regular", href: "/documentos/conducto-regular" },
    ],
  },
  {
    label: "Comunidad",
    children: [
      { label: "Padres de Familia", href: "/comunidad/padres" },
      { label: "Estudiantes", href: "/comunidad/estudiantes" },
      { label: "Docentes", href: "/comunidad/docentes" },
    ],
  },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy/10"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/escudo.jpg"
                alt="Escudo Colegio Leonardo Da Vinci"
                fill
                className="object-contain rounded-full"
                sizes="48px"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-navy leading-tight">COLEGIO</p>
              <p className="text-sm lg:text-base font-bold text-navy leading-tight">
                Leonardo Da Vinci
              </p>
              <p className="text-[10px] text-blue leading-tight">Santa María, Boyacá</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-100 transition-colors">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="nav-dropdown absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl shadow-navy/10 border border-slate-100 py-1.5 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-blue/5 hover:text-navy transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange mr-2.5 flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-100 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <MobileDropdown item={item} onClose={() => setMobileOpen(false)} />
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-navy transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function MobileDropdown({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-navy transition-colors"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pl-4 pb-1 space-y-0.5">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex items-center px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-blue/5 hover:text-navy transition-colors"
              onClick={onClose}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange mr-2.5 flex-shrink-0" />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
