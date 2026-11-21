# ANTON · website de marketing

Website de marketing de ANTON, el banco para agentes IA gobernado por humanos.
Objetivo único: que el visitante se una a la lista de espera.

Vite + React 18 + TypeScript + Tailwind CSS 3 + React Router 6 + Motion. Sin backend
y sin llamadas de red en tiempo de ejecución (solo Google Fonts).

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc --noEmit + build de producción en dist/
npm run preview  # sirve dist/
```

El router usa rutas limpias (`BrowserRouter`): al alojarlo, configura un rewrite de
todas las rutas a `index.html`.

## Mapa de páginas

| Ruta | Página | Enlazada desde |
|---|---|---|
| `/` | Home | Logo |
| `/personal` | Personal | Cabecera, pie |
| `/empresas` | Empresas | Cabecera, pie |
| `/builders` | Builders | Cabecera, pie |
| `/pasaporte` | Producto: Pasaporte | Pie |
| `/cuentas-y-reglas` | Producto: Cuentas y reglas | Pie, home |
| `/observatory` | Producto: Observatory | Pie, home |
| `/manifiesto` | Manifiesto | Cabecera (Compañía), pie |
| `/equipo` | Equipo | Cabecera (Compañía), pie, manifiesto |
| `/inversores` | Inversores (tesis + contacto simulado) | Cabecera (Compañía), pie |
| `/lista-de-espera` | Lista de espera (acepta `?perfil=persona\|empresa\|builder\|inversor`) | Botón de cabecera, pie |
| `/demo` | Demo · Próximamente | Botones "Ver el demo", pie |
| `/privacidad` | Aviso de privacidad (plantilla) | Pie, formularios |
| `/aviso-legal` | Aviso legal (plantilla) | Pie |
| `*` | 404 | — |

## Estructura

```
src/
  main.tsx, App.tsx, index.css
  i18n/        es.ts (fuente), en.ts y pt.ts (tipados contra es.ts), useI18n.tsx
  data/        sample.ts (únicos datos de ejemplo permitidos)
  lib/         waitlist.ts (único punto de integración), motion.ts, hooks.ts
  assets/photos/  fotos publicadas (WebP + JPG, dos tamaños) y manifest.json
  components/  Band (sección a todo el ancho), Pattern (tramas), PhotoHero,
               ProductCards, Header, Footer, HeroPanel, HomeHero, Photo, PhoneMock, PhoneScreens,
               SignalRings, ActivityMarquee, BentoCard, PillButton, WaitlistForm,
               WaitlistSection, TimelineItem, PassportCard, RuleCard, HowItWorks,
               Reveal, CountUp, Disclaimer, Bits
  pages/       una por ruta
scripts/
  build-photos.mjs   regenera src/assets/photos/ desde scripts/photo-sources/
```

Fotos: créditos y licencias en `CREDITS.md`. Para cambiar una foto, sustituye el original
en `scripts/photo-sources/`, ajusta su recorte en el script y ejecuta
`node scripts/build-photos.mjs` (falla si algún archivo supera el peso máximo).

- Todo el copy vive en `src/i18n/es.ts`, `en.ts` y `pt.ts`. `en.ts` y `pt.ts` están tipados con
  `Dict = typeof es`, así que una clave que falte o sobre rompe `npm run build`.
- Idioma: sin preferencia guardada se usa el del navegador (español, portugués o, en el resto de
  casos, inglés). La elección del selector se guarda en `localStorage` (`anton.lang`)
  dentro de try/catch.
- Voz y glosario: `BRAND-VOICE.md`. Plan de copy: `COPY-PLAN.md`.
- Formularios: validan en el navegador, muestran una confirmación que dice que no se
  guardó nada y llaman a `submitWaitlist()` en `src/lib/waitlist.ts`, que hoy no hace
  nada (TODO para conectar el proveedor real).

## Movimiento

| Animación | Disparador | Duración |
|---|---|---|
| Etiqueta, párrafo y botones del hero | Carga de página (0 / 0.36 / 0.48 s) | 750 ms, sube 26 px |
| Titular palabra a palabra | Carga, desde 0.12 s, 60 ms entre palabras | 750 ms por palabra |
| Subrayado teal bajo las dos últimas palabras | 0.9 s | 800 ms (scaleX) |
| Teléfono entra con muelle (heros de páginas internas) | 1.0 s | spring (stiffness 120, damping 13) |
| Flotación del teléfono | Bucle CSS | 6 s por ciclo, 14 px, -2° a -1° |
| Inclinación 3D siguiendo el cursor (heros internos) | Puntero fino sobre el hero | Spring, máx. 6° |
| Anillos de señal | Bucle CSS, desfase 1.5 s | 4.5 s |
| Home: foto del hero (zoom 1.06 → 1 + fundido) | Carga, 0.15 s | 900 ms |
| Home: tarjeta de saldo y tarjeta "Pagado" | 1.05 s y 1.3 s | Spring suave (140/16) |
| Home: saldo $300 → $231 + barra mensual | 1.25 s | 1.3 s |
| Tarjetas sobre foto flotando | Bucle CSS | 3.6 s por tramo, 4 px |
| Fotos (resto) | 20 % visible, una vez | 900 ms, zoom 1.06 → 1 + fundido |
| Fotos de "Para quién" | Hover de la tarjeta | Zoom a 1.04, 700 ms |
| Alerta "Bloqueada" sobre la foto | 60 % visible | Spring suave + flotación |
| /demo: compra autónoma + saldo $300 → $231 + barra mensual | 1.2 s | 600 ms / 1.3 s |
| Compra que pide OK + pulso ámbar en el borde | 1.8 s (pulso a 2.3 s) | 600 ms / 1.6 s |
| Pago bloqueado + destello rojo en el borde + vibración | 2.4 s (destello 2.9 s, vibración 3.0 s) | 600 ms / 1.1 s / 450 ms |
| Sección fijada "Así trabaja tu agente" (≥1024 px y ≥700 px de alto) | Scroll (300 vh) | Fundido cruzado 450 ms; barra = progreso del scroll |
| Paso 1: chips de la regla | Paso activo | 450 ms, 180 ms entre chips |
| Paso 2: botones → "Con tu OK · Aprobado en 11 s" | Paso activo, +1.1 s | 400 ms |
| Paso 3: destello y vibración + "Congelar agente" se activa | Paso activo, +1.1 s | 1.1 s / 450 ms / 350 ms |
| Pasos apilados (móvil y reduced-motion) | 20 % visible | 600 ms, sube 24 px |
| Logo de la cabecera: bloques, mazo en abanico y destello teal | Sola, al azar (la primera a los 5–9 s y luego cada 14–32 s) y al pasar el mouse | ~2,8 s |
| Secciones | 20 % visible, una vez | 600 ms, sube 24 px |
| Tarjetas bento | 20 % visible, una vez | 600 ms, 80 ms entre tarjetas |
| Hover bento | Hover | Sube 8 px (spring) + sombra; titular +4 px |
| Botones | Hover | Escala 1.03; primarios magnéticos (≤ 6 px, puntero fino) |
| Cinta de actividad | Bucle continuo | 36 s por vuelta; pausa en hover/foco o con botón; acelera hasta 1.8× con el scroll |
| Cifras (vista previa 11 · 1 · 0) | 60 % visible, una vez | 1.1 s desde 0 |
| Sello "VERIFICADO" del pasaporte | 1.6 s | Spring |
| Cabecera compacta + fondo translúcido con blur | Scroll > 80 px | 300 ms |
| Intro de bienvenida (ANTON se dibuja y se rellena) | Primera carga de la sesión | ~2.5 s + 0.6 s de espera + fundido de 0.6 s |
| 404: pantalla LED (anillos, destellos, formas flotando) | Bucle en canvas | ~25 fps; nieve de 320 ms al cambiar de canal |
| Cambio de página | Navegación | 200 ms, sube 12 px |

Con `prefers-reduced-motion: reduce` nada se mueve: todo se pinta en su estado final,
el saldo muestra $231, la sección fijada se sustituye por los pasos apilados y la
cinta se muestra estática en varias filas.
