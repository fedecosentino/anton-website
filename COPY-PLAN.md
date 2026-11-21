# Plan de copy: storyline e identidad de marca de ANTON

> **Estado (21-11-2026):** hecha la entrevista (fase 0), la guía de voz (fase 1, en
> `BRAND-VOICE.md`) y la home (fase 2). Donde este plan y la guía no coincidan, manda la
> guía: el arranque es una escena y no el problema, los ejemplos van en dólares y
> Observatory no se traduce. Hecha también la fase 3 (páginas interiores) y añadido el
> portugués, y la fase 4 (microcopy). Queda la revisión nativa de inglés y portugués.

Revisión de todo el texto del site (`src/i18n/es.ts`: home, 11 páginas interiores, formularios,
teléfono, cinta, pie, intro y legales) y plan para mejorarlo. Este documento propone; no se ha
cambiado ningún texto todavía.

## 1. Diagnóstico

### Lo que ya funciona (se conserva)
- **El H1 de la home**: «Tu agente ya sabe comprar. Ahora dale un banco.» Tiene tensión y promesa.
- **«Su dinero. Tus reglas.»** (Cuentas y reglas). Es la mejor frase del site y está escondida.
- **«sin vigilarlo»**, **«con su porqué»**, **«Tú mandas»**, **«Tu OK»**, **«congelar»**: vocabulario
  propio que ya existe y solo hay que convertir en sistema.
- **La página de Empresas**: es la única con arco completo (dolor → parche → solución).
- **La cinta y el teléfono**: cuentan el producto con datos, no con adjetivos.
- Tuteo consistente, frases cortas, cero jerga técnica fuera de Builders.

### Los seis problemas

1. **La historia no tiene villano hasta el final.** La home pasa de la promesa a las funciones.
   El problema («hoy tu agente paga con tu tarjeta prestada y nadie responde») no aparece hasta
   la sección 8. Quien no llega ya convencido no siente por qué importa.

2. **Vendemos el dinero, pero lo primero que existe es el Pasaporte.** La mayor parte de la
   home habla de saldo, límites y bloqueos. El Pasaporte, que es el primer
   producto, solo aparece en la tarjeta de Builders y en una línea de la lista de espera. El
   aviso legal corrige en letra pequeña lo que el titular promete en grande.

3. **Falta el momento feliz en «Así trabaja tu agente».** Los tres pasos son: pones la regla,
   te pide OK, bloquea. La compra autónoma (11 de 12 en el ejemplo) no tiene paso propio. El
   relato enseña los frenos, no el viaje.

4. **La misma idea, contada cinco veces con las mismas palabras.**
   | Idea | Apariciones en `es.ts` | Dónde |
   |---|---|---|
   | «en una frase» | 12 | hero, pasos, sección de la regla, Personal, Cuentas, Empresas, manifiesto, metas |
   | «te avisamos» | 11 | todos los cierres y la lista de espera |
   | «porqué» | 7 | home, Empresas, Observatory, metas |
   | «Tú mandas» | 2 | título de «Para quién» y etiqueta de la sección del código, en la misma página |
   En la home, las secciones 4, 5 y 6 cuentan lo mismo (regla, OK, bloqueo, congelar) tres veces.

5. **Un concepto, varios nombres.**
   | Concepto | Términos en uso |
   |---|---|
   | Quien responde por el agente | dueño · responsable · responsable humano · persona que responde · persona verificada |
   | Lo que limita al agente | regla · política · límites |
   | Lo que hace el agente | compra · pago · operación · intento de pago |
   | Meterle dinero | fondear · mesada · pasarle dinero |
   | Pararlo | congelar · detener |
   | Nombres de producto | Pasaporte y Cuentas y reglas (español) · Observatory y Builders (inglés) |

6. **La voz es correcta, pero no es de nadie.** Es clara y limpia, y podría ser de cualquier
   fintech. Las etiquetas son descriptivas («Cómo funciona», «Control», «Estados», «Filtros»),
   el manifiesto tiene títulos de pitch deck («El problema», «La oportunidad», «La solución»)
   y los cierres piden el correo sin decir qué gana quien lo deja.

### Dos grietas de confianza
- **«Ver el demo» lleva a un «Próximamente».** Es el segundo botón del hero en todas las
  páginas y rompe una promesa en el primer clic.
- **Varios bloques muestran placeholders como contenido** (Equipo, niveles del Pasaporte, firma
  de «Por qué lo hacemos»). Mientras no haya dato, conviene esconder el bloque, no enseñar
  corchetes.

## 2. Identidad verbal propuesta

### La idea de marca
> **Tu agente gasta. Tú mandas.**

Ya está latente en el site. Resume el producto (autonomía con control), pone al humano de
protagonista y da el patrón rítmico de la marca: dos frases cortas en contraste.

| Opción | Frase | Tono | Mejor para |
|---|---|---|---|
| A (recomendada) | Tu agente gasta. Tú mandas. | Directo, humano | Línea de marca en todo el site |
| B | Su dinero. Tus reglas. | Sentencioso, de producto | Cuentas y reglas, campañas |
| C | Autonomía con dueño. | Conceptual, sobrio | Inversores, prensa |

### Los tres pilares, en una tríada
Hoy el eyebrow del hero dice «Identidad · Dinero · Reglas». Propongo que cada producto
responda una pregunta, y que la tríada se repita siempre igual:

| Producto | Pregunta | Frase |
|---|---|---|
| Pasaporte | ¿Quién es? | Sabes quién es. |
| Cuentas y reglas | ¿Cuánto puede? | Sabes cuánto puede. |
| Observatory | ¿Qué hizo? | Sabes qué hizo. |

### Cinco rasgos de voz

| Rasgo | Qué significa | Sí | No |
|---|---|---|---|
| Claro como un buen banquero | Sujeto, verbo, dato. Frases de una idea. | «Hasta $1,500 por compra.» | «Soluciones flexibles de gasto» |
| El humano manda | El sujeto es «tú». El agente es «tu agente», nunca «la IA» ni «el bot». ANTON aparece poco, como garante. | «Tú decides la excepción.» | «ANTON gestiona tus aprobaciones» |
| Siempre con el porqué | Cada afirmación trae su razón o su número. | «Bloqueado en 9 ms: supera tu límite mensual.» | «Seguridad de primer nivel» |
| Sereno | Sin miedo y sin hype. El riesgo se nombra sin dramatizar. | «Funciona hasta que algo sale mal.» | «¡No dejes que tu agente te arruine!» |
| Honesto con el estado | «Todavía», «primero», «hoy». La hoja de ruta es parte del relato. | «Todavía no somos un banco.» | Prometer en presente lo que no existe |

### Recursos propios (para usar con medida)
- **El par en contraste**: «Su dinero. Tus reglas.» Uno por sección como máximo.
- **El porqué**: sustantivo, nunca «la razón» ni «el motivo».
- **Tu OK**: siempre con posesivo. Es el gesto de la marca.
- **Congelar**: el único verbo para parar al agente.

### Glosario (un término por concepto)

| Usar | Para | Evitar |
|---|---|---|
| dueño | La persona que crea y fondea el agente (Personal, Pasaporte) | propietario, usuario |
| responsable | El mismo rol dentro de una empresa | responsable humano, persona verificada |
| regla | Lo que escribe una persona | límites (como sinónimo) |
| política | El conjunto de reglas de una empresa | regla (en Empresas) |
| compra | Lo que hace el agente, en todo el marketing | pago, transacción |
| operación | Solo una fila de Observatory | movimiento |
| tu OK / pedir OK | La excepción | aprobación, autorización, permiso |
| congelar | Parar al agente | detener, pausar, bloquear |
| bloquear | Lo que hace ANTON con lo que rompe la regla | rechazar, denegar |
| Pasaporte / pasaporte | Mayúscula el producto, minúscula el documento | KYA fuera de Builders |

## 3. Storyline de la home

Arco: **promesa → tensión → idea → cómo funciona → por qué fiarte → para quién → dónde estamos → acción.**

| # | Hoy | Propuesta | Qué cambia |
|---|---|---|---|
| 1 | Hero | Hero | Se mantiene el H1. El párrafo deja de repetir el tagline. El segundo botón deja de prometer un demo que no existe. |
| 2 | Cinta | Cinta | Sin cambios. |
| 3 | Para quién | **Tensión (nueva): «Hoy tu agente paga con tu tarjeta.»** | Entra el villano: tarjeta prestada, API keys compartidas, prepago. |
| 4 | Así trabaja tu agente | **La idea: «Tu agente gasta. Tú mandas.»** + los tres pilares | Presenta Pasaporte, Cuentas y reglas y Observatory con la tríada. El Pasaporte va primero. |
| 5 | Tu regla, en una frase | Así trabaja tu agente, **con cuatro pasos** | Se añade la compra autónoma. Absorbe la sección de la regla. |
| 6 | Tú mandas (código) | Por qué fiarte: la regla vive en código | Se queda, más afilada. |
| 7 | Observatory | Observatory | Título con el porqué. |
| 8 | Por qué lo hacemos | Para quién | Baja: primero entiendo el producto, luego elijo mi camino. |
| 9 | Lista de espera | **Dónde estamos: «Todavía no somos un banco.»** | La honestidad pasa de la letra pequeña al relato. Se funde con «Por qué lo hacemos». |
| 10 | Pie | Lista de espera, con motivo para apuntarse | — |

Desaparece una sección repetida (la regla, que se funde con los pasos) y entran dos que hoy
faltan: la tensión y el estado real del producto.

## 4. Reescrituras de mayor impacto

Los titulares respetan el límite de Syne: ninguna palabra de más de 10 letras.

| Dónde | Hoy | Propuesta | Por qué |
|---|---|---|---|
| Hero, párrafo | El banco para agentes IA, gobernado por humanos. Ponle reglas en una frase y mira todo lo que hace. | Una cuenta propia, tus reglas en una frase y un registro de todo lo que hace. Sin prestarle tu tarjeta. | No repite el tagline y nombra el parche actual. |
| Hero, botón 2 | Ver el demo | Ver cómo funciona | Lleva a «Así trabaja tu agente» mientras no haya demo. |
| Tensión (nueva) | — | **Hoy tu agente paga con tu tarjeta.** Tarjetas prestadas, API keys compartidas, prepago con tope. Funciona hasta que algo sale mal. Y entonces nadie sabe quién hizo qué. | Da al visitante un problema que reconoce. |
| Pilares (nueva) | Identidad · Dinero · Reglas | **Sabes quién es. Sabes cuánto puede. Sabes qué hizo.** | Una pregunta por producto. |
| Pasos | 01 Le pones una regla · 02 Te pide OK · 03 Bloquea | 01 Tú pones la regla. · 02 Él compra solo. · 03 Te pide OK si se sale. · 04 ANTON bloquea el resto. | Aparece el momento feliz y cada paso tiene sujeto. |
| Código | La regla vive en código, no depende del modelo. | La regla vive en código. Ningún prompt la convence. | Mismo hecho, más memorable. |
| Observatory | Mira todo lo que hace. | Mira todo lo que hace. Y por qué. | Mete el rasgo de marca. |
| Para quién | Tu agente puede gastar. Tú mandas. | Para ti, para tu equipo, para lo que construyes. | El título por fin habla de audiencias. |
| Estado (nueva) | Venimos de la banca. Sabemos qué falta. | **Todavía no somos un banco.** Empezamos por lo primero que hace un banco: saber quién eres. Por eso el Pasaporte llega antes que el dinero. | Convierte la limitación en argumento de confianza. |
| Cierre | Déjanos tu correo y te avisamos cuando abramos. | Los primeros de la lista prueban el Pasaporte antes que nadie. | Da un motivo. Requiere confirmar que es cierto. |
| Manifiesto, bloques | El problema · La oportunidad · La solución · El equipo · El momento | Todo pago asume un humano. · Delegar no es soltar. · Las reglas no se negocian. · Primero identidad, después dinero. · Esto se decide ahora. | De índice de pitch a cinco convicciones. |
| Observatory, estados | Tres estados, siempre con nombre. | Solo, con tu OK o bloqueada. | Dice los tres estados en vez de anunciarlos. |
| Lista de espera | Así seguimos. | Qué pasa después de apuntarte. | Claro antes que ingenioso. |
| Builders, botón | Quiero participar | Contarles mi caso | El botón dice qué pasa al pulsarlo. |
| Navegación | Compañía | Nosotros | «Compañía» es un calco; «Empresas» ya está ocupado. |

## 5. Plan de trabajo

| Fase | Qué se hace | Entregable | Depende de |
|---|---|---|---|
| 0 | Cuatro decisiones (abajo) | Respuestas | Ti |
| 1 | Plataforma verbal: idea de marca, rasgos, glosario | `BRAND-VOICE.md` de una página | Fase 0 |
| 2 | Home: nuevo orden y textos, con tres alternativas por titular | Propuesta en tabla, y luego en el site | Fase 1 |
| 3 | Páginas interiores: una función por página y sin repetir la home | Propuesta por página | Fase 2 |
| 4 | Microcopy: botones, formularios, errores, confirmaciones, 404, intro, metas | Propuesta | Fase 1 |
| 5 | Inglés: reescritura (no traducción) con la misma voz | `en.ts` | Fases 2–4 |
| 6 | Control: glosario aplicado, sin palabras de más de 10 letras en titulares, aviso regulatorio intacto, revisión a 360 px | Lista de comprobación | Todo |

Qué hace cada página interior, para que no se pisen:

| Página | Su única función | Hoy |
|---|---|---|
| Personal | Que una persona se imagine delegando una compra | Repite los pasos de la home |
| Empresas | Que un responsable de equipo vea el coste del parche | Bien; solo ajustar etiquetas |
| Builders | Cómo se conecta un agente | Compite con Pasaporte por explicar qué es |
| Pasaporte | Qué es y por qué va primero | Sin el argumento de «primero identidad» |
| Cuentas y reglas | La regla: cómo se escribe y qué pasa en cada caso | Bien; es dueña de «Su dinero. Tus reglas.» |
| Observatory | El porqué de cada decisión | Bien; quitar lenguaje de sistema de diseño |
| Manifiesto | Convicciones, en primera persona | Suena a pitch |
| Inversores | La tesis | Se solapa con el manifiesto; dejarlo como versión seca |

## 6. Decisiones que necesito de ti

1. **Mercado principal.** El texto es mexicano (MXN, «mesada», «audífonos», «fondear») y las
   fotos son de perfil latino y europeo. Si España cuenta, hay que neutralizar esas palabras.
2. **Línea de marca.** ¿«Tu agente gasta. Tú mandas.» (recomendada), «Su dinero. Tus reglas.»
   o «Autonomía con dueño.»?
3. **Cuánto pesa «banco».** Recomiendo mantenerlo en el H1 y contar en grande que todavía no
   lo sois (sección «Todavía no somos un banco»). La alternativa es bajar «banco» del titular.
   Conviene que lo vea quien lleve lo regulatorio.
4. **Nombres en inglés.** ¿Observatory y Builders se quedan, o pasan a Observatorio y
   Constructores? Recomiendo Observatorio (para alinear con Pasaporte) y dejar Builders.

## 7. Notas de localización

- **Inglés**: los pares en contraste funcionan igual («Your agent spends. You're in charge.»).
  «Tu OK» pasa a «Your OK». «Con su porqué» no tiene sustantivo equivalente: usar «and why».
- **Longitud**: el español ocupa un 15–20 % más que el inglés; los titulares se prueban
  primero en español.
- **Importes**: el formato $1,500 se mantiene en los dos idiomas. Si el mercado cambia, los
  ejemplos (MXN, Tienda Norte) cambian con él.
- **Syne**: ninguna palabra de más de 10 letras en H1 y H2, en ningún idioma.
