# Pendiente

## Placeholders visibles en el site (completar antes de publicar)
| Placeholder | Dónde |
|---|---|
| `[NOMBRE]` / `[NAME]` ×5 | /equipo |
| `[CARGO]` / `[ROLE]` ×5 | /equipo |
| `[BIO DE DOS LÍNEAS]` / `[TWO-LINE BIO]` ×5 | /equipo |
| `[IN]` (iniciales) ×5 + foto | /equipo (tarjetas y hero) |
| `[CRITERIO NIVEL 2]`, `[DESCRIPCIÓN DEL NIVEL 2 POR DEFINIR]` | /pasaporte, niveles |
| `[CRITERIO NIVEL 3]`, `[DESCRIPCIÓN DEL NIVEL 3 POR DEFINIR]` | /pasaporte, niveles |
| `[FECHA]` / `[DATE]` | /privacidad, /aviso-legal |
| `[RAZÓN SOCIAL]` / `[LEGAL NAME]` | /privacidad, /aviso-legal |
| `[DOMICILIO]` / `[ADDRESS]` | /privacidad, /aviso-legal |
| `[CORREO DE CONTACTO]` / `[CONTACT EMAIL]` | /privacidad, /aviso-legal |
| `[FINALIDADES SECUNDARIAS, SI LAS HAY]` | /privacidad |
| `[PROCEDIMIENTO Y PLAZOS DE RESPUESTA]` | /privacidad |
| `[DATOS DE REGISTRO]` | /aviso-legal |
| `[CONDICIONES DE USO]` | /aviso-legal |
| `[LEY Y JURISDICCIÓN APLICABLES]` | /aviso-legal |

## Fotografía
- [ ] **Foto propia pendiente**: equipo fundador, horizontal, para "Por qué lo hacemos"
      (home). Hoy hay un hueco rayado (`PhotoSlot`).
- [ ] `[NOMBRE], [CARGO]` de la firma en "Por qué lo hacemos" (home).
- [ ] Confirmar con legal el uso de las seis fotos de Pexels (ver CREDITS.md).
- [ ] Validar la segunda selección de fotos (perfil latino/europeo), sobre todo la de
      Personal por la edad aparente (ver ⚠️ en DECISIONS.md, sección v3).
- [ ] Ver en movimiento las animaciones de las páginas interiores con el navegador en
      primer plano.

## Técnico
- [ ] Conectar `submitWaitlist()` en `src/lib/waitlist.ts` con el proveedor real y
      quitar el texto "versión de prueba" de las confirmaciones.
- [ ] Revisión legal de /privacidad y /aviso-legal (son plantillas).
- [ ] Prerender/SSG para que el contenido sea legible sin JavaScript y mejore el SEO.
- [ ] Imagen Open Graph (`og:image`): hoy solo hay título y descripción.
- [ ] Autoalojar las fuentes si se quiere evitar la petición a Google Fonts.
- [ ] Rewrite SPA en el hosting (todas las rutas → `index.html`).
- [ ] Probar rendimiento de animaciones en un móvil de gama media real.
- [ ] Validar el copy EN y PT con nativos (el portugués es europeo, de «tu»; sin revisión nativa).

## Decisiones de producto abiertas
- Qué significan los niveles 2 y 3 del Pasaporte.
- Si el demo interactivo (/demo) se construye y cuándo.
