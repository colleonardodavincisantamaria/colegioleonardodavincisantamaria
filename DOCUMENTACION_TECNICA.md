# Documentación Técnica — Sitio Web Colegio Leonardo Da Vinci

**Fecha:** Mayo 2026  
**Versión:** 0.1.0  
**URL producción:** (pendiente confirmar dominio definitivo)

---

## 1. Resumen del proyecto

Sitio web institucional del **Colegio Leonardo Da Vinci**, ubicado en Santa María, Boyacá, Colombia. Su propósito es informar a padres de familia, estudiantes y docentes sobre la institución, poner a disposición documentos académicos y dar acceso a los órganos del gobierno escolar.

---

## 2. Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 16.2.4 | Framework principal (App Router) |
| React | 19.2.4 | Biblioteca de UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos (configurado vía `@tailwindcss/postcss`) |
| Lucide React | 1.11.x | Iconografía |
| @vercel/blob | 2.3.x | Almacenamiento de archivos (PDFs, imágenes) |
| Geist (Google Fonts) | — | Tipografía principal |

**Entorno de desarrollo:**
- Node.js (se recomienda ≥ 20 LTS)
- Gestor de paquetes: npm

---

## 3. Estructura de archivos

```
/
├── app/                        # Rutas (Next.js App Router)
│   ├── layout.tsx              # Layout raíz: Navbar + Footer + metadatos globales
│   ├── page.tsx                # Página de inicio "/"
│   ├── globals.css             # Estilos globales, variables de color, utilidades CSS
│   ├── favicon.ico
│   ├── nosotros/
│   │   └── page.tsx            # "/nosotros"
│   ├── gobierno-escolar/
│   │   └── page.tsx            # "/gobierno-escolar"
│   └── contacto/
│       └── page.tsx            # "/contacto"
│
├── components/                 # Componentes reutilizables
│   ├── Navbar.tsx              # Barra de navegación fija (desktop + mobile)
│   ├── Footer.tsx              # Pie de página con 4 columnas
│   ├── PageHero.tsx            # Banner de cabecera para páginas interiores
│   ├── SectionHeader.tsx       # Encabezado de sección con línea decorativa
│   └── DocumentCard.tsx        # Tarjeta para descarga de documentos (PDF/imagen)
│
├── public/
│   └── images/
│       ├── escudo.jpg                          # Escudo institucional
│       ├── LISTA_TEXTOS_ESCOLARES.png          # Lista de textos 2026
│       ├── LISTA_UTILES_ESCOLARES_2026.png     # Lista de útiles 2026
│       └── gobierno-escolar/                   # Fotos de consejos (pendiente subir)
│           ├── 1.CONSEJO_DE_PADRES_2026.jpg
│           ├── 2.PERSONERO_Y_CONTRALOR_2026_.jpg
│           ├── 3.CONSEJO_DE_ESTUDIANTES_2026_.jpg
│           ├── 4.JUNTA_DIRECTIVA_2026.jpg
│           ├── 5.CONSEJO_DIRECTIVO_2026.jpg
│           ├── 6.CONSEJO_ACADEMICO_2026.jpg
│           ├── 7.CONVIVENCIA_ESCOLAR_2026.jpg
│           └── 8.NUESTRO_EQUIPO_DE_TRABAJO_2026.jpg
│
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## 4. Paleta de colores

Definida en `app/globals.css` bajo la directiva `@theme` de Tailwind v4:

| Token | Hex | Uso |
|---|---|---|
| `navy` | `#0d1b4b` | Fondo oscuro principal, textos de titulares |
| `navy-light` | `#162460` | Hover del navy |
| `blue` | `#2d7dd2` | Acento principal, enlaces |
| `blue-light` | `#3d8fe0` | Hover del blue |
| `sky` | `#4fb3e8` | Acento secundario, textos sobre fondos oscuros |
| `orange` | `#f47c20` | Llamados a acción (CTA), detalles decorativos |
| `orange-light` | `#f89040` | Hover del orange |

El gradiente hero se define con la clase utilitaria `.hero-gradient` en `globals.css`.

---

## 5. Páginas implementadas

### 5.1 Inicio — `/`

**Archivo:** `app/page.tsx`

Secciones en orden vertical:

1. **Hero** — Fondo degradado azul-marino con escudo institucional, titular, eslogan y dos botones CTA ("Conócenos" / "Contáctanos"). Barra de estadísticas con 3 datos clave (nivel educativo, ubicación, bilingüismo).
2. **Accesos Rápidos** — Cuadrícula de 6 tarjetas enlazando a las secciones más consultadas (Cronogramas, Útiles, Textos, Formatos, Circulares, Gobierno Escolar). Datos definidos en el array `quickLinks`.
3. **Sobre Nosotros** (fragmento) — Texto introductorio + 4 tarjetas pequeñas con Misión, Visión, Valores y Proyecto. Enlace hacia `/nosotros`.
4. **Banda CTA** — Gradiente horizontal con botón de contacto.

### 5.2 Nosotros — `/nosotros`

**Archivo:** `app/nosotros/page.tsx`

Secciones:

1. `PageHero` con título y subtítulo.
2. **Misión y Visión** — Dos tarjetas de fondo `navy` y `blue`.
3. **El Escudo Institucional** — Imagen del escudo + texto explicativo de su simbología.
4. **Nuestros Valores** — 4 tarjetas: Respeto, Creatividad, Responsabilidad, Comunidad. Datos en el array `valores`.

### 5.3 Gobierno Escolar — `/gobierno-escolar`

**Archivo:** `app/gobierno-escolar/page.tsx`

Muestra una galería de 8 tarjetas, una por consejo/órgano. Cada tarjeta tiene:
- Imagen (`/images/gobierno-escolar/N.NOMBRE.jpg`)
- Título y descripción
- Ancla de navegación (`id`) para enlaces directos desde la Navbar

| `id` de ancla | Consejo/Órgano |
|---|---|
| `consejo-de-padres` | Consejo de Padres |
| `personero-contralor` | Personero y Contralor Estudiantil |
| `consejo-estudiantes` | Consejo de Estudiantes |
| `junta-directiva` | Junta Directiva |
| `consejo-directivo` | Consejo Directivo |
| `consejo-academico` | Consejo Académico |
| `convivencia-escolar` | Convivencia Escolar |
| `equipo-de-trabajo` | Nuestro Equipo de Trabajo |

> **Pendiente:** Las 8 imágenes no están en el repositorio — ver sección de mantenimiento.

### 5.4 Contacto — `/contacto`

**Archivo:** `app/contacto/page.tsx`

Dos columnas:
- **Información de contacto** — Dirección, teléfono (pendiente), correo, horario.
- **Formulario HTML** — Campos: nombre, teléfono, correo, asunto (select), mensaje. Actualmente usa `action="#"` (no envía correos todavía).

> **Pendiente:** conectar el formulario a un servicio de envío de correos.

---

## 6. Páginas en el menú pero aún sin implementar

Las siguientes rutas aparecen en la Navbar y el Footer pero no tienen página creada. Devuelven 404 en producción:

| Ruta | Menú |
|---|---|
| `/academico/cronogramas` | Académico |
| `/academico/utiles-escolares` | Académico |
| `/academico/textos-escolares` | Académico |
| `/academico/proyecto-pedagogico` | Académico |
| `/documentos/reglamentos` | Documentos |
| `/documentos/formatos` | Documentos |
| `/documentos/circulares` | Documentos |
| `/documentos/conducto-regular` | Documentos |
| `/comunidad/padres` | Comunidad |
| `/comunidad/estudiantes` | Comunidad |
| `/comunidad/docentes` | Comunidad |

---

## 7. Componentes reutilizables

### `Navbar` — `components/Navbar.tsx`

- Componente cliente (`"use client"`).
- Barra fija (`position: fixed`) con efecto blur al hacer scroll.
- Navegación desktop con dropdowns animados (hover con debounce de 150 ms).
- Menú móvil con acordeones por sección.
- El logo incluye el escudo (`/images/escudo.jpg`) y el nombre del colegio.

### `Footer` — `components/Footer.tsx`

- 4 columnas: Marca + redes sociales, Institución, Documentos, Contacto.
- Redes sociales actualmente con `href="#"` (pendiente enlazar cuentas reales).

### `PageHero` — `components/PageHero.tsx`

Banner de cabecera para todas las páginas interiores. Props:

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Título principal (H1) |
| `subtitle` | `string?` | Subtítulo opcional |
| `breadcrumb` | `string?` | Etiqueta de contexto (ej. "Institución") |

### `SectionHeader` — `components/SectionHeader.tsx`

Encabezado de sección con título, subtítulo opcional y línea decorativa naranja. Props:

| Prop | Tipo | Default |
|---|---|---|
| `title` | `string` | — |
| `subtitle` | `string?` | — |
| `centered` | `boolean` | `false` |
| `light` | `boolean` | `false` (texto oscuro) |

### `DocumentCard` — `components/DocumentCard.tsx`

Tarjeta de descarga para documentos. Props:

| Prop | Tipo | Default |
|---|---|---|
| `title` | `string` | — |
| `description` | `string?` | — |
| `href` | `string` | — |
| `type` | `"pdf" \| "image"` | `"pdf"` |

Abre el documento en una pestaña nueva (`target="_blank"`).

---

## 8. SEO y metadatos

Configurados en `app/layout.tsx` con el objeto `metadata` de Next.js:

- **title:** `Colegio Leonardo Da Vinci | Santa María, Boyacá`
- **description:** `Colegio Leonardo Da Vinci — Un Espacio para Sentir, Pensar y Crear...`
- **keywords:** colegio, Leonardo Da Vinci, Santa María, Boyacá, Colombia, educación
- **Open Graph:** título, descripción, locale `es_CO`, tipo `website`

---

## 9. Despliegue

El sitio está desplegado en **Vercel**. La dependencia `@vercel/blob` confirma la integración con la plataforma para almacenamiento de archivos.

### Comandos del proyecto

```bash
# Desarrollo local
npm run dev         # Inicia el servidor en http://localhost:3000

# Producción
npm run build       # Genera el build optimizado
npm run start       # Inicia el servidor de producción

# Calidad de código
npm run lint        # Ejecuta ESLint
```

### Variables de entorno necesarias

| Variable | Descripción |
|---|---|
| `BLOB_READ_WRITE_TOKEN` | Token de Vercel Blob para gestión de archivos |

Agregar en Vercel → Project → Settings → Environment Variables, y localmente en un archivo `.env.local`.

---

## 10. Mantenimiento

### 10.1 Tareas pendientes (alta prioridad)

- [ ] **Subir imágenes del Gobierno Escolar** — Las 8 fotos deben colocarse en `public/images/gobierno-escolar/` con los nombres exactos que espera `app/gobierno-escolar/page.tsx`.
- [ ] **Confirmar número de teléfono** — Reemplazar "Por confirmar" en `app/contacto/page.tsx` (línea 30) y `components/Footer.tsx` (línea 108).
- [ ] **Enlazar redes sociales** — Cambiar `href="#"` en `components/Footer.tsx` (líneas 32 y 40) por las URLs reales de Facebook e Instagram.
- [ ] **Activar el formulario de contacto** — Conectar `app/contacto/page.tsx` a un servicio de correo (opciones: Resend, Formspree, o una API Route de Next.js con nodemailer).
- [ ] **Crear las páginas pendientes** — Las 11 rutas listadas en la sección 6.

### 10.2 Actualización anual (inicio de año escolar)

- Reemplazar las imágenes en `public/images/gobierno-escolar/` con las fotos del año vigente.
- Actualizar la etiqueta "Año Escolar 20XX" en `app/page.tsx` (línea 76).
- Actualizar los documentos de útiles y textos escolares en `public/images/`.
- Revisar y actualizar el subtítulo de `app/gobierno-escolar/page.tsx` con el año en curso.

### 10.3 Actualización de contenidos frecuentes

| Contenido | Archivo a editar |
|---|---|
| Misión y Visión | `app/nosotros/page.tsx` |
| Datos de contacto | `app/contacto/page.tsx` y `components/Footer.tsx` |
| Accesos rápidos en inicio | `app/page.tsx` — array `quickLinks` |
| Estadísticas del hero | `app/page.tsx` — array `stats` |
| Ítems del menú | `components/Navbar.tsx` — array `navItems` |

### 10.4 Agregar una nueva página de documentos

1. Crear la carpeta y el archivo, por ejemplo `app/documentos/circulares/page.tsx`.
2. Usar el componente `PageHero` como cabecera.
3. Usar el componente `DocumentCard` para cada documento, apuntando a su URL en Vercel Blob o a la imagen en `public/`.
4. La ruta ya está en el menú — no hace falta modificar `Navbar.tsx`.

---

## 11. Información de la institución

| Campo | Valor |
|---|---|
| Nombre | Colegio Leonardo Da Vinci |
| Municipio | Santa María, Boyacá, Colombia |
| Correo | info@coldavincisantamaria.com |
| Horario de atención | Lunes a viernes, 7:00 am – 5:00 pm |
| Niveles educativos | Preescolar a Grado 11° |
| Programa especial | Bilingüe (inglés) |
