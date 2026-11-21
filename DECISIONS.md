# Decisiones

Decisiones tomadas sin consultar, con su motivo. Revisa las marcadas con ⚠️.

## Stack y estructura
- **Tailwind 3** (no 4): configuración clásica por `tailwind.config.js`, tokens del brief
  como colores/fuentes/radios. Las clases que varían por prop (`pill-*`, `bento-*`) se
  resuelven con mapas literales para que Tailwind no las purgue.
- **Motion 11 (`motion/react`)** para toda la animación de React. Los bucles simples
  (flotación del teléfono, anillos de señal) son CSS. **No se añadió ninguna otra
  librería**: la sección fijada usa `position: sticky` + `useScroll` de Motion, así que no
  hizo falta una librería de scroll.
- **i18n propio** (contexto + diccionarios TS) en lugar de i18next: `en.ts` se tipa contra
  `es.ts`, lo que garantiza en compilación que no falte ni sobre ninguna clave.
- Las **rutas son las mismas en ES y EN** (slugs en español). Cambiar de idioma no cambia
  la URL.
- `components/Bits.tsx` agrupa piezas pequeñas (Eyebrow, SampleTag, StatusTag,
  SectionHeading, ArrowIcon); `PhoneScreens.tsx` agrupa las pantallas del teléfono.

## Diseño
- ⚠️ **Tamaño del H1.** Syne 800 es muy ancha (≈0.85 em por letra): con el mínimo de
  44 px del brief, palabras como "pasaporte" desbordan a 360 px. El H1 usa
  `clamp(30px, min(6.6vw, 11.5cqi), 104px)` (se limita también por el ancho de su
  columna). Resultado: ~34 px en móvil y ~74 px en el hero de escritorio. Igual con H2
  (`12.5cqi`) y títulos de tarjeta (`clamp(22px, 10.5cqi, 28px)`). (Valores ajustados
  después: ver «Títulos que se salían en tablet».) Por la misma razón
  los titulares EN se redactaron con palabras cortas.
- La **cabecera es fija**; se compacta con `translateY` y escala del logo, y el fondo
  translúcido aparece con opacidad (solo transform/opacity).
- El **teléfono** no lleva barra de estado y muestra "Datos de ejemplo" arriba a la
  derecha. Los botones dentro del teléfono ("Aprobar", "Congelar agente") son
  ilustraciones, no `<button>`: no hacen nada, y un botón real que no hace nada sería
  peor para accesibilidad.
- **Estados**: además de la etiqueta de texto, cada estado tiene una forma distinta
  (círculo, rombo, cuadrado). Los colores de estado solo aparecen sobre superficies
  oscuras.
- **Inversores**: el botón del hero lleva a "Hablemos" (formulario de contacto) en lugar
  de la lista de espera, y la página cierra con ese formulario.
- **Lista de espera**: el formulario completo está en el panel derecho del hero (sin
  retraso de entrada ni inclinación 3D); no lleva un segundo formulario al final.
- **Manifiesto, Equipo, Inversores** usan una tarjeta tipográfica sobre el panel teal en
  vez de teléfono.
- El **nombre del agente de ejemplo** ("Compras de Juan") no se traduce en EN: es un dato
  de ejemplo. Sí se traducen "verificado"/"Nivel".
- Se añadió el **porqué** de cada operación de la línea de tiempo (p. ej., "Supera tu
  límite de $5,000 al mes"), derivado solo de la regla y los importes de ejemplo.
- Copys que cambiaron por espacio: "Fraude y responsabilidad sin gestionar" pasó a título
  "Riesgo sin gestionar" (el fraude y la responsabilidad siguen en el cuerpo).

## Movimiento
- **Secuencia del hero.** El brief pide 120 ms entre etiqueta, titular, párrafo y
  botones, y el titular palabra a palabra. Para que el párrafo no suba mientras el
  titular aún entra, se usan 0 / 0.12 / 0.36 / 0.48 s.
- **Subrayado** como una barra por palabra con `scaleX` encadenado (no
  `background-size`), para animar solo transform y que funcione si las palabras saltan de
  línea.
- **Pulso ámbar** = anillo fijo cuya opacidad pulsa. **Destello rojo** = degradado cónico
  que rota (transform) detrás de un borde de 1.5 px. Nada anima `box-shadow` en bucle.
- **Sección fijada** solo con ventana ≥ 1024 px de ancho y ≥ 700 px de alto; si no, pasos
  apilados. Con reduced-motion también se apila (en estado final).
- **Cinta**: implementada con `useAnimationFrame` (no CSS) para poder acelerarla con la
  velocidad del scroll. Además de la pausa en hover, tiene un botón "Pausar cinta" (WCAG
  2.2.2) y se pausa con el foco.
- **Cifras que cuentan desde cero**: se aplicó a la vista previa de la regla (11 · 1 · 0).
  El saldo del hero cuenta de $5,000 a $3,701 según el brief. Los importes de ejemplo de
  las tarjetas no cuentan: son texto del copy.
- **Reduced motion**: `MotionConfig reducedMotion="user"` + un hook `useReduce()` que
  pinta el estado final (`initial={false}`), y una media query CSS que apaga los bucles.
  Comprobado forzando el modo en el navegador: saldo $3,701, sin movimiento.
- ⚠️ **"Legible aunque el JavaScript falle"**: no se cumple. Es una SPA de React: sin JS
  no se renderiza nada. Para cumplirlo haría falta prerender/SSG (p. ej.,
  `vite-plugin-ssg` o migrar a Astro/Next). Queda en TODO.md.
- ⚠️ No pude medir 60 fps en un móvil real; solo se revisó en el navegador del entorno de
  desarrollo (que además limita los fotogramas). Todo lo animado usa transform/opacity.

## Privacidad y datos
- Sin analítica ni cookies. Solo se guarda `anton.lang` en `localStorage`.
- Los formularios no envían nada: `src/lib/waitlist.ts` es el único punto de integración.
- No se mencionan bancos, empleadores ni personas reales; el equipo usa placeholders.

## Home v2: secciones diferenciadas y fotografía

### Secuencia y fondos
| # | Sección | Fondo | Composición |
|---|---|---|---|
| 1 | Hero | `#F3F5F2` | Panel blanco (texto) + panel de foto con dos tarjetas flotantes |
| 2 | Cinta de actividad | `#0B0D0C` | Franja a todo el ancho, Space Mono blanco/teal |
| 3 | Para quién | `#FFFFFF` | Titular centrado + tres tarjetas con foto arriba |
| 4 | Así trabaja tu agente | `#0B0D0C` | Scroll fijado, teléfono sobre panel teal (único uso) |
| 5 | Tu regla, en una frase | `#00E5C3` | Retrato circular + cita grande |
| 6 | Tú mandas | `#EFE9DD` | Titular + 4 tarjetas blancas / foto vertical con alerta |
| 7 | Observatory | `#FFFFFF` | Línea de tiempo en tarjeta gris / texto y botón |
| 8 | Por qué lo hacemos | `#F3F5F2` | Panel blanco partido: foto / texto |
| 9 | Lista de espera | `#0B0D0C` | Centrada, campos oscuros, botón teal |
| 10 | Pie | `#F3F5F2` | Sin cambios de contenido |

- **El pie pasa a fondo claro en todo el site**, no solo en la home (es un componente
  compartido). El resto de páginas no se tocó: siguen con su hero y su cierre teal.
- **"Tú mandas" lleva cuatro puntos**, como pide el brief. El quinto ("Registro con el
  porqué") sale de la home; lo cubre la sección Observatory y sigue en el copy.
- **La cita de la regla** en la sección teal es la versión corta del brief; la regla
  completa de los datos de ejemplo se mantiene en el teléfono y en las páginas internas.
- **Estados sobre superficies oscuras**: en Observatory la tarjeta es gris claro, pero
  cada fila de la línea de tiempo sigue siendo oscura para que ámbar/rojo/teal cumplan
  contraste. La alerta "Bloqueada" también va en tarjeta oscura.
- En la **cinta**, el botón de pausa pasa a ser un icono (con `aria-label`) dentro de la
  franja. Con reduced-motion la cinta se muestra estática en varias filas.
- La **inclinación 3D del hero** desaparece en la home (seguía al teléfono, que ya no
  está); se mantiene en los heros de las páginas internas.
- **"Venimos de la banca"** es el titular del brief; no se nombra ningún banco.

### Fotografía
- **Fuente**: Unsplash dio pocos resultados gratuitos que encajaran; las seis salieron de
  Pexels, buscadas a mano en el navegador. Detalle y revisión en CREDITS.md.
- **Serie**: luz natural y tonos cálidos en las seis. Ajuste suave por foto en
  `scripts/build-photos.mjs` (temperatura ±3 %, saturación ±4 %, contraste +2 %), sin
  filtros de color encima.
- **Diversidad**: tres hombres y una mujer solos, de edades y orígenes distintos, y un
  equipo mixto. ⚠️ La foto de Empresas muestra un equipo de rasgos asiáticos; si se quiere
  más cercanía con público hispanohablante, es la primera candidata a sustituir.
- ⚠️ **Hero**: la persona parece más joven que "unos 30 años" (veintitantos). Era la que
  mejor cumplía el resto: cocina, taza en una mano, teléfono en la otra, luz natural.
- ⚠️ **Retrato**: el original corta la frente; en el círculo se ve sonrisa, mano y
  teléfono. Si se prefiere un retrato con la cabeza completa, hay que cambiarla.
- **`sharp` como devDependency** solo para el script de fotos (no entra en el bundle).
- **Pesos**: hero 131 kB (JPG) / 82 kB (WebP); el resto ≤ 83 kB. Dos tamaños por foto.
- `Photo` usa el atributo `fetchpriority="high"` en minúsculas porque React 18 aún no
  reconoce la prop `fetchPriority`.
- **Tarjetas sobre foto**: siempre con fondo sólido. En el hero van a la derecha por
  debajo de la cara (teal) y abajo a la izquierda (saldo); el panel de foto mide 660 px
  de alto en móvil para que quepan sin taparse ni tapar la cara.
- La rejilla escalonada (`StaggerGrid`) ya no espera al 20 % de visibilidad: en móvil las
  tarjetas apiladas miden varias pantallas y tardaban en aparecer. Entran al asomar 120 px.

## v3: estilo de la home en las páginas interiores, fotos y tramas

### Páginas interiores
- Todas siguen el lenguaje de la home: **secciones a todo el ancho con fondo propio**
  (blanco, negro, teal, arena, `#F3F5F2`), nunca dos seguidas iguales (comprobado por
  script en las 15 rutas), y **cierre negro centrado** de lista de espera en lugar del
  panel teal. Componentes nuevos: `Band`, `Pattern`, `PhotoHero`, `ProductCards`.
- **Hero con foto + tarjeta de producto** en Personal, Empresas, Builders, Cuentas y
  reglas, Observatory y Demo. La tarjeta cambia según la página (pedir OK, política,
  pasaporte, regla + saldo, línea de tiempo).
- **Hero con panel de color y trama** donde el protagonista es otra cosa: Pasaporte
  (teal, la tarjeta de pasaporte), Manifiesto (negro, la promesa), Equipo (arena),
  Inversores (negro, la tesis) y Lista de espera (teal, el formulario).
- Las tarjetas bento usan en cada banda los acabados que contrastan con su fondo
  (`cardTones` en `pages/_shared.tsx`).
- **Equipo** incorpora el bloque "Por qué lo hacemos" con el hueco de la foto propia.
- Legales y 404 se quedan con el hero simple: no tienen contenido para más bandas.
- El teléfono sobre panel teal vuelve a aparecer en Personal ("Las excepciones, en tu
  mano"), donde enseña el flujo completo; en el resto va sin panel o no aparece.

### Fotos de perfil latino/europeo
- Sustituidas **Personal, Empresas, Builders y Retrato**; añadida **Calle**. Se
  mantienen Hero (encaja con el perfil pedido) y Control (solo manos).
- Para los heros interiores no se descargaron más fotos: son **recortes verticales
  (`-v`) de los mismos originales**, así la tarjeta de la home y la página a la que
  lleva comparten imagen.
- ⚠️ **Personal**: el chico parece muy joven. A mi juicio es adulto, pero no puedo
  comprobarlo; si hay duda, es la primera a cambiar (el brief descarta menores).
- ⚠️ **Retrato y Calle** muestran a la persona con el teléfono en la oreja (una llamada),
  no hablándole al teléfono como pedía el brief original. Priorizó el perfil pedido y
  que el retrato tuviera la cabeza completa.
- La serie queda con dos hombres y tres mujeres solos, más un equipo mixto.

### Tramas y fotos de fondo en bloques de color
- **Tramas** (`Pattern`): anillos concéntricos (eco de los anillos de señal), puntos y
  líneas diagonales. Son SVG en `currentColor` con opacidad 10–20 %, sin degradados.
  Anillos en los bloques teal, líneas en los arena, puntos o anillos en los negros.
- **Foto de fondo** solo en el bloque negro de lista de espera: en gris y al 17 % de
  opacidad. Peor caso (píxel blanco puro de la foto): el texto blanco queda en ~9:1 y
  el secundario se pasó a blanco para no bajar de 4.5:1.
- Para ese fondo se usan solo fotos **sin cara en primer plano** (terraza de Builders,
  manos de Control): una cara grande detrás del titular distraía.
- Sobre teal y arena no hay foto de fondo, solo trama: una foto tintada ensuciaba el
  color de marca y bajaba el contraste del texto.

### Verificación de esta ronda
- El panel del navegador estaba oculto y ahí las animaciones no avanzan, así que las
  capturas de las páginas interiores se hicieron **forzando el estado final**
  (reduced-motion). El layout, las fotos y que ninguna tarjeta tapa una cara están
  comprobados a 1440 y 390 px; ⚠️ **las animaciones de las páginas interiores no se
  volvieron a ver en movimiento** (reutilizan las de la home, que sí se revisaron).

## Intro de bienvenida (preloader)

- **Qué hace**: pantalla negra con "Welcome to / Bienvenido a" (los dos idiomas a la vez,
  sea cual sea el idioma activo; el botón de saltar sí sigue el idioma) y ANTON dibujándose con el componente `StrokeDrawType` (trazo que se dibuja y relleno
  teal que sube); al terminar espera 0.6 s, se funde en 0.6 s y aparece el site. En total
  unos 3 s.
- **Tipografía del logo**: ANTON usa exactamente la del logo de la cabecera (Syne 800,
  tracking -0.02em). La intro espera a que Syne esté cargada antes de empezar a dibujar.
- **Integración del componente**: va en `src/components/ui/stroke-draw-type.tsx` con el
  alias `@/` → `src` (estructura shadcn). El proyecto no tiene shadcn inicializado y no
  hace falta para esto. Cambios respecto al original: `useReducedMotion` se importa de
  `motion/react` (no se instala `framer-motion` aparte), se quitó `"use client"` y se
  añadió la prop `onComplete`.
- ⚠️ **Las utilidades del componente no venían en el código pegado** (`palette`, `tone`,
  `loop`, `motion`, `random` y `cn`). Las escribí yo a partir de cómo las usa el
  componente; el resultado se ve correcto, pero no son las originales del autor.
- **Una vez por sesión**: se guarda `anton.intro` en `sessionStorage`. No reaparece al
  navegar ni al recargar; sí al abrir el site en una pestaña nueva.
- **No bloquea**: se salta con el botón "Saltar intro", con Escape/Enter o con un clic, y
  hay un tope de 6 s por si la animación no avanza (pestaña en segundo plano).
- **Con prefers-reduced-motion no hay intro**: el site carga directamente.
- El site se monta cuando la intro termina, para que la animación del hero empiece
  mientras la intro se funde. Contrapartida: la foto del hero empieza a descargarse ~3 s
  más tarde en la primera visita.

## Copy v2: voz de marca y nueva home (tras la entrevista)

Respuestas de la entrevista y lo que cambió por cada una. La guía completa está en
`BRAND-VOICE.md`.

| Decisión tuya | Qué cambió |
|---|---|
| Le hablamos a personas con agentes | La home arranca con una escena doméstica y todos los ejemplos son de casa |
| Mercado global, idioma según el navegador | Sin preferencia guardada, abre en español si el navegador está en español y en inglés en el resto. El selector ES / EN sigue mandando |
| Dólares con cifras nuevas | Nuevo juego de datos de ejemplo en todo el site (tabla abajo) |
| Voz cálida y cotidiana | Hero, escena y pasos reescritos de tú a tú |
| «Tu agente gasta. Tú mandas.» | Es el titular de la sección de la idea, partido siempre en dos líneas |
| Banco, dicho con claridad | Nueva sección «Todavía no somos un banco.» antes del cierre |
| Arranque con una escena | Nueva sección «Un día cualquiera» justo después de la cinta |

### Nuevo orden de la home
| # | Sección | Fondo |
|---|---|---|
| 1 | Hero | `#F3F5F2` |
| 2 | Cinta | negro |
| 3 | Un día cualquiera (nueva) | blanco |
| 4 | La idea: «Tu agente gasta. Tú mandas.» + los tres pilares | teal |
| 5 | Así trabaja tu agente, ahora con cuatro pasos | negro |
| 6 | Por qué fiarte (la regla vive en código) | blanco |
| 7 | Observatory | arena |
| 8 | Para quién | `#F3F5F2` |
| 9 | Dónde estamos: «Todavía no somos un banco.» (nueva) | blanco |
| 10 | Lista de espera | negro |

- **La sección «Tu regla, en una frase» desaparece de la home** como bloque propio: la
  regla se cuenta en el paso 1 y sigue completa en Cuentas y reglas. Su retrato circular
  se queda, ahora junto a la línea de marca.
- **Cuarto paso**: se añadió «Él compra solo.» (pantalla nueva `AutoScreen`). El scroll
  fijado mide ahora 100vh por paso.
- **El segundo botón del hero** ya no es «Ver el demo» (llevaba a un «Próximamente») sino
  «Ver cómo funciona», que baja a los pasos. En las páginas interiores sigue «Ver el demo».
- **Observatory y Builders se quedan en inglés**: con mercado global son nombres propios.
  Corrige mi recomendación anterior de traducir Observatory.
- **El cierre no promete acceso anticipado**: no confirmaste que los primeros de la lista
  prueben el Pasaporte antes, así que dice solo que el Pasaporte llega primero.
- «Por qué lo hacemos» (con «Venimos de la banca. Sabemos qué falta.») sigue en Equipo.

### Datos de ejemplo en dólares
| Antes (MXN) | Ahora (USD) |
|---|---|
| $1,500 por compra · $5,000 al mes | $80 por compra · $300 al mes |
| Saldo $5,000 → $3,701 | Saldo $300 → $231 |
| Autónoma $1,299 | $69 |
| Con tu OK $3,200 | $179 |
| Bloqueada $20,000 | $1,900 |
| Suscripción $349 · Recarga $200 | $12 · $20 |

Las relaciones se mantienen: la autónoma cabe en el límite por compra, la que pide OK lo
supera sin pasar del mes, y la bloqueada supera el límite mensual. Tiempos (4.1 s, 11 s,
9 ms), nombres e IDs no cambian. ⚠️ Esto sustituye los «datos de ejemplo permitidos» del
brief original.

### Español neutro
mesada → presupuesto · fondear → ponerle dinero · audífonos → auriculares · monto → importe ·
aviso de privacidad → política de privacidad. Aplicado en todo `es.ts`.

### Lo que queda sin tocar de este plan
- **Páginas interiores**: tienen ya dólares y español neutro, pero su texto no se ha
  reescrito con la voz nueva (fase 3 de `COPY-PLAN.md`).
- **Microcopy** (botones, formularios, 404, metas) y revisión del inglés por un nativo.
- El título y la descripción de `index.html` siguen fijos en español hasta que carga la app.

## Copy v3: páginas interiores con la voz nueva y portugués

### Páginas interiores (fase 3 de COPY-PLAN.md)
Reescritas en los tres idiomas las once páginas interiores, con la misma estructura y la
voz de `BRAND-VOICE.md`. Lo más visible:

| Página | Cambio principal |
|---|---|
| Personal | Pasos como acciones de la persona: «Le pones dinero», «Le dices cómo gastar», «Te pregunta lo raro» |
| Empresas | «Aprobaciones» pasa a «dar el OK»; «responsable humano» pasa a «responsable» |
| Builders | El hero ya no repite el del Pasaporte: «Le falta poder decir quién es» |
| Pasaporte | Entra el argumento de «es lo primero que hace un banco: saber quién eres» |
| Cuentas y reglas | Cierre honesto: «Primero llega el Pasaporte; la cuenta, después» |
| Observatory | «No tienes que vigilarlo. Pero cuando quieras mirar, está todo» |
| Manifiesto | Los cinco bloques dejan de ser índice de pitch y pasan a convicciones: «Todo pago asume un humano», «Delegar no es soltar», «Las reglas no se negocian», «Primero identidad, después dinero», «Esto se decide ahora» |
| Demo | Sin artículo para «demo» (el/la varía por país): «Pronto podrás probarlo tú» |

- **«Ver el demo» desaparece de todos los heros.** El segundo botón es ahora «Ver cómo
  funciona» y lleva a los pasos de la home (`/#como-funciona`). /demo sigue en el pie.
- **Cierres sin la misma frase repetida**: cada lista de espera dice algo propio de su
  página, y ninguna promete acceso anticipado.
- **Titulares**: se evitaron palabras de más de 10 letras («aprobaciones»,
  «excepciones», «verificación», «instrucciones»). Comprobado por script en los tres
  idiomas.
- ⚠️ La cita del hero del manifiesto pasa de la promesa larga a la línea de marca
  («Tu agente gasta. Tú mandas.»).

### Portugués
- **Tercer idioma completo** (`src/i18n/pt.ts`), tipado contra `es.ts` como el inglés: si
  falta una clave, el build falla. Selector **ES / EN / PT** en cabecera y menú móvil.
- **Portugués de Brasil, de «você»**. ⚠️ No lo ha revisado un nativo. Si el mercado es
  también Portugal, hay que decidir si se neutraliza («celular», «time», «tela» son
  brasileños).
- **ANTON en femenino** («a ANTON», «Bem-vindo à ANTON»), como empresa. Es una decisión
  de marca fácil de cambiar si preferís «o ANTON».
- Detección por navegador: español, portugués o inglés según el primer idioma del
  navegador que tengamos; si no hay ninguno, inglés.
- La intro muestra los tres saludos: «Welcome to / Bienvenido a / Bem-vindo à» en una
  línea en escritorio y apilados en móvil.
- En portugués la página de privacidad se titula «Como tratamos seus dados»: «privacidade»
  tiene 11 letras y desbordaba en Syne.
- Las rutas siguen en español en los tres idiomas.

### Pendiente del plan de copy
Revisión nativa del inglés y del portugués (la fase 4, microcopy, está en «Copy v4»).

## Copy v4: microcopy (fase 4)

Aplicado en español, inglés y portugués.

| Dónde | Antes | Ahora | Por qué |
|---|---|---|---|
| Navegación y pie | Compañía | Nosotros | «Compañía» era un calco; «Empresas» ya está ocupado. Solo cambia en español |
| Pie | Demo | Demo (pronto) | El enlace lleva a un «Próximamente» y ahora lo dice |
| Tarjeta de pedir OK | Tu agente pide OK · Aprobar · Rechazar | Pide tu OK · Dar mi OK · Decir que no | «Tu OK» es el gesto de la marca; se evita «aprobar» |
| Estado resuelto | Con tu OK · Aprobado en 11 s | Con tu OK · en 11 s | No repetir la misma idea dos veces |
| Error de campo vacío | Este campo es obligatorio. | Escribe tu nombre. / Escribe tu correo. / Cuéntanos algo en el mensaje. | Cada error dice qué falta y cómo arreglarlo |
| Error de correo | Escribe un correo válido… | Ese correo no parece válido. Revisa que tenga @ y dominio… | Qué pasó y cómo se arregla |
| Error de consentimiento | Necesitamos tu permiso para escribirte. | Marca la casilla para que podamos escribirte. | Dice la acción |
| Confirmación del formulario | Listo, ya te tenemos en cuenta. | Casi. La lista aún no está abierta. | ⚠️ El título anterior decía lo contrario que el cuerpo: no se guarda nada |
| Confirmación de contacto | Gracias por escribirnos. | Gracias, pero aún no nos llega. | Igual: el mensaje no se envía todavía |
| 404 | Puede que el enlace esté mal… | El enlace está mal o la página se movió. Desde el inicio llegas a todo. | Añade la salida |
| Botón del hero de Inversores | Hablemos. (el título de la sección) | Escribir al equipo | Un botón dice qué pasa al pulsarlo |
| Campo de mensaje | Mensaje | Tu mensaje | Tono de tú a tú |
| Meta de `index.html` | Dale dinero a tu agente… | Tu agente gasta. Tú mandas. Dale dinero… | La línea de marca primero |

- Los errores del formulario tienen ahora una clave por caso (`nameRequired`,
  `emailRequired`, `messageRequired`) en lugar de una genérica.
- No se tocó: el aviso regulatorio, las etiquetas de estado (Autónoma, Con tu OK,
  Bloqueada), los datos de ejemplo ni los textos de las plantillas legales.
- Las etiquetas de las tarjetas de «Para quién» («Para ti», «Para tu equipo») no empiezan
  por verbo: son toda la tarjeta enlazada y se leen mejor así.
- ⚠️ El título y la descripción de `index.html` siguen fijos en español: es lo que ve un
  buscador o una vista previa de enlace antes de que cargue la app, también para quien
  llega en inglés o portugués.

## Página 404: pantalla de puntos LED

Hecha a partir de la referencia que enviaste (pantalla retro de puntos), con identidad de
ANTON en lugar de copiar sus motivos.

| De la referencia | En ANTON |
|---|---|
| Pantalla oscura de puntos con resplandor | Igual, sobre `#060608` y dentro de un panel de radio 48 como los heros |
| Rosa | Teal `#00E5C3` |
| «PAGE NOT FOUND» + 404 en relieve + «SIGNAL LOST» | «PÁGINA NO ENCONTRADA» + 404 en relieve + «SEÑAL PERDIDA» |
| 404 en fuente de píxel | 404 en **Syne 800**, la tipografía del logo, convertida a puntos |
| Notas musicales y corazones | Las formas de estado de ANTON: círculo, rombo, cuadrado y señal |
| Palmeras y montaña | Anillos de señal saliendo de la base (el motivo de marca) |
| «TAKE ME HOME» | «LLÉVAME AL INICIO», enlace real al inicio |
| «Click the screen to change the channel» | Igual: cada clic cambia de canal |

- **Tres canales**, los tres colores de estado de ANTON: teal «Señal perdida», ámbar «Sin
  tu OK» y rojo «Ruta bloqueada». ⚠️ Ámbar y rojo ocupan aquí toda la pantalla; hasta ahora
  solo se usaban como texto de estado. Es una pantalla oscura, así que cumple la regla, pero
  si prefieres que la 404 sea solo teal se quitan dos líneas.
- **Cómo está hecha**: un canvas de un píxel por punto, escalado por CSS y recortado en
  círculos con una máscara; un segundo canvas desenfocado hace el resplandor. Sin
  librerías nuevas. Se repinta a ~25 fps.
- **Accesibilidad**: la pantalla es decorativa (`aria-hidden`). El título y el texto reales
  están para lectores de pantalla, «Llévame al inicio» es un enlace de verdad colocado
  sobre el botón dibujado, y cambiar de canal es un botón (el texto de arriba a la
  derecha) además del clic. El canal activo se anuncia.
- **Reduced motion**: se pinta una sola vez, sin anillos en movimiento, sin destellos y
  sin nieve al cambiar de canal.
- **La cabecera y el pie siguen visibles**, con el aviso regulatorio. No es una pantalla
  completa como la referencia: va dentro del panel para no perder navegación ni aviso.
- Los acentos y la ñ se dibujan en dos filas extra sobre cada letra de la fuente de 5×7.
- Textos en los tres idiomas (`notFound.led`).

## Animación del logo

Referencia: «Block Wordmark» de 21st.dev. Se recrea el efecto, no se copia el componente.

- **Qué pasa** (~2,8 s): las letras de ANTON se vuelven bloques, los bloques se recogen en
  un cuadrado, un mazo de tarjetas se abre en abanico y se cierra, el cuadrado se parte en
  un bloque por letra y cada bloque destella en teal antes de dejar ver su letra.
- **Cuándo**: sola y al azar. La primera vez entre 5 y 9 s después de cargar; después cada
  14–32 s. Nunca dos a la vez. Los intervalos están en `AnimatedLogo.tsx` (`schedule`).
- **También al pasar el mouse** por el logo. Si ya está en marcha, el hover no la reinicia:
  termina la que hay. Y si acaba de sonar por hover (menos de 8 s), la automática siguiente
  se salta para que no se repita seguida. En pantallas táctiles no hay hover: ahí solo
  funciona la automática.
- **Dónde**: solo en el logo de la cabecera (`src/components/AnimatedLogo.tsx`). El del
  menú móvil y el del preloader no cambian.
- **Hecha con Motion** (`useAnimate`), no con Remotion como la referencia: Remotion es para
  vídeo y habría sido una librería más. Solo se animan `transform` y `opacity`.
- **Colores de marca**: bloques en el color del texto, tarjetas en los dos teal
  (`#00E5C3` y `#006B5C`). La referencia usa un mazo multicolor; aquí no entra ningún
  color fuera de la paleta.
- **Reduced motion**: no se dispara nunca; el logo queda fijo.
- **Accesibilidad**: bloques y mazo son decorativos (`aria-hidden`); el texto «ANTON» sigue
  en el DOM durante toda la animación y el enlace al inicio no cambia de tamaño.
- ⚠️ No hay pausa ni control para el usuario: es un movimiento breve y poco frecuente, pero
  si resulta molesto se sube el intervalo o se limita a una vez por visita.


## Fotografía: tercera selección (gente alegre, afín al público)

Pediste gente divertida, alegre y afín al público. Criterio aplicado:

- **Risa de verdad**, no sonrisa de catálogo: en cuatro de las seis fotos la persona se
  está riendo.
- **Afín al público** de `BRAND-VOICE.md` (alguien que ya usa agentes a diario): adultos de
  unos 25–40 años, con el teléfono o el portátil en la mano, en escenas cotidianas
  (parque, calle, mesa de trabajo). ⚠️ Es mi lectura del público: no hay un documento de
  ICP con edad, profesión o país. Si lo tienes, se ajusta la selección.
- **Perfil latino/europeo**, como pediste en la segunda selección.

| Hueco | Antes | Ahora |
|---|---|---|
| Hero | Hombre con café en la cocina | Hombre con barba y gorro riéndose con el teléfono en un parque |
| Personal | Joven abriendo un paquete | Mujer de pelo rizado riéndose al teléfono |
| Empresas | Tres personas ante un portátil | Dos compañeras riéndose ante un portátil |
| Builders | Mujer de perfil en una terraza | Hombre con gafas sonriendo a cámara con su portátil |
| Retrato | Mujer al teléfono | Mujer riéndose a cámara |
| Calle | Mujer caminando al teléfono | Mujer sonriendo en su bicicleta con el teléfono |
| Control | Manos con teléfono | Sin cambios (no hay rostro) |

- Los textos alternativos están actualizados en los tres idiomas (`photos.*`).
- `personal-v` baja a 900 y 600 px de ancho: el pelo rizado tiene mucho detalle y a
  1040 px no cabía en 90 KB sin comprimir de más. ⚠️ Aun así sale a calidad 48; si se nota,
  hay que subir el límite de peso de esa foto.
- ⚠️ Ya no hay nadie con un paquete ni con un café: el hero pierde el guiño literal a
  «Tú ni sueltas el café». El texto no depende de la foto, así que no se tocó.
- ⚠️ Cuatro de las seis fotos son al aire libre. Gana alegría y pierde algo de variedad de
  escenario.

## Portugués europeo

Pediste pasar el portugués a portugués europeo. Sustituye a la decisión «Portugués de
Brasil, de "você"» de «Copy v3».

- **De «tu»**, no de «você». En Portugal «você» suena distante o comercial; «tu» es el
  equivalente real del «tú» del español y lo que encaja con la voz cálida. ⚠️ Es la decisión
  más discutible: si prefieres un trato más formal (verbo en tercera persona, sin
  pronombre), dímelo y lo cambio.
- **Idea de marca**: «O teu agente gasta. Tu mandas.» Pilares: «Sabes quem ele é.»,
  «Sabes quanto ele pode.», «Sabes o que ele fez.»
- **Vocabulario**: celular → telemóvel, tela → ecrã, time → equipa, notebook → portátil,
  registro → registo, controle → controlo, contato → contacto, fatos → factos,
  assinatura → subscrição, fones → auscultadores, compartilhar → partilhar,
  autônoma → autónoma, café da manhã → pequeno-almoço, pular → saltar, prévia → antevisão,
  linha do tempo → cronologia.
- **Gramática**: sin gerundio («estamos a construir»), posesivo con artículo («o teu
  agente»), pronombre detrás del verbo («escrevemos-te», «dá-lhe»), contracciones
  («numa frase», «num parque»).
- **Placeholders legales**: «[RAZÃO SOCIAL]» pasa a «[DENOMINAÇÃO SOCIAL]» y «[ENDEREÇO]» a
  «[MORADA]», los términos de Portugal.
- `og:locale` pasa de `pt_BR` a `pt_PT`.
- ⚠️ Solo hay un portugués. Un navegador en portugués de Brasil recibe ahora el europeo;
  se entiende, pero suena extranjero. Si Brasil es mercado, hace falta un cuarto
  idioma (`pt-BR`) en vez de sustituir.
- ⚠️ Sin revisión nativa. Lo escribí yo; conviene que lo lea alguien de Portugal antes de
  publicar.
- Los nombres de ejemplo («Tienda Norte», «Compras de Juan», «Juan Doe») siguen en español
  en los tres idiomas, como estaban.

## Títulos que se salían en tablet

Al medir el portugués salió un fallo que ya existía en los tres idiomas: entre 768 y
~1000 px las tarjetas van en tres columnas y su caja de texto mide unos 165 px. Syne 800 es
tan ancha que una palabra de 8–10 letras ya no cabía («Empresas» se salía 30 px).

- **Títulos de tarjeta**: el tamaño mínimo baja de 22 a 16 px
  (`clamp(16px, 10.5cqi, 28px)`). En columnas anchas no cambia nada; en las estrechas el
  título se queda en ~17 px en vez de salirse.
- **Tarjetas de «Para quién» (home)**: el tamaño se calculaba sobre la tarjeta entera, no
  sobre la caja con margen interior. Ahora se mide sobre la caja del texto.
- **H1 y H2**: el límite por ancho de columna baja un poco (`11.5cqi` → `11.2cqi` y
  `12.5cqi` → `12cqi`). Dos titulares sobresalían ~10 px de su columna sin llegar a
  cortarse: «Um passaporte para o teu agente.» y «Encuentra lo que buscas.» ⚠️ Los
  titulares limitados por la columna quedan un 3–4 % más pequeños en todas las páginas.
- **Comprobado**: 14 rutas × 3 idiomas a 360, 768, 1024 y 1440 px (portugués también a 900
  y 1280), midiendo cada h1, h2, h3 y título de tarjeta. Sin desbordes.
- ⚠️ Es una medición, no una revisión visual: el panel de pruebas no pinta bien las
  animaciones de entrada. Conviene mirar la home a ~800 px en un navegador real.
- No se cambió el número de columnas. Tres columnas a 768 px siguen siendo estrechas para
  el texto de las tarjetas; si quieres, se pasa a dos columnas hasta 1024 px.

