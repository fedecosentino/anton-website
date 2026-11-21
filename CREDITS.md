# Créditos de fotografía

Todas las fotos vienen de [Pexels](https://www.pexels.com) y se usan bajo la
[licencia de Pexels](https://www.pexels.com/license/): uso gratuito, también comercial,
sin atribución obligatoria y con permiso para modificarlas. Están descargadas en el
repositorio (no se enlazan en caliente). Los originales están en `scripts/photo-sources/`
y las versiones publicadas en `src/assets/photos/` se generan con
`node scripts/build-photos.mjs` (recorte, ajuste suave de temperatura y contraste,
WebP + JPG en dos tamaños).

| Hueco | Archivos (`src/assets/photos/`) | Autor | URL de origen | Licencia |
|---|---|---|---|---|
| Hero (home, demo) | `hero-1200.*`, `hero-720.*` | Matheus Bertelli | https://www.pexels.com/photo/portrait-of-a-bearded-man-laughing-with-a-smart-phone-in-hands-17767217/ | Pexels License |
| Personal | `personal-880.*`, `personal-560.*`, `personal-v-900.*`, `personal-v-600.*` | Tim Douglas | https://www.pexels.com/photo/delighted-woman-having-phone-call-on-street-6567732/ | Pexels License |
| Empresas | `empresas-880.*`, `empresas-560.*`, `empresas-v-1040.*`, `empresas-v-640.*` | Arina Krasnikova | https://www.pexels.com/photo/cheerful-women-working-with-laptop-6016354/ | Pexels License |
| Builders | `builders-880.*`, `builders-560.*`, `builders-v-1040.*`, `builders-v-640.*` | Edmond Dantès | https://www.pexels.com/photo/bearded-man-wearing-eyeglasses-while-using-a-laptop-8068011/ | Pexels License |
| Retrato | `retrato-760.*`, `retrato-420.*` | tomateoignons | https://www.pexels.com/photo/photo-of-a-smiling-woman-3927663/ | Pexels License |
| Control (home, Cuentas y reglas) | `control-960.*`, `control-560.*` | Antoni Shkraba | https://www.pexels.com/photo/a-person-holding-a-smartphone-8206940/ | Pexels License |
| Calle (home, Observatory) | `calle-v-1040.*`, `calle-v-640.*` | Uriel Mont | https://www.pexels.com/photo/cheerful-black-woman-sitting-on-bicycle-with-smartphone-6280634/ | Pexels License |

Los archivos `-v` son el recorte vertical 4:5 del mismo original, para los heros de las
páginas interiores. Las fotos de Builders y Control se reutilizan además, en gris y muy
tenues, como fondo del bloque negro de lista de espera.

Cada `*` son dos archivos: `.webp` y `.jpg`.

## Revisión hecha al elegirlas
- Sin logos ni marcas visibles en el recorte publicado.
- Segunda selección (perfil latino/europeo): se sustituyeron Personal, Empresas, Builders y
  Retrato, y se añadió Calle. Hero y Control se mantienen.
- Tercera selección (gente alegre y afín al público: personas que ya usan agentes a diario):
  se sustituyeron Hero, Personal, Empresas, Builders, Retrato y Calle. Control se mantiene
  porque son unas manos, sin rostro. Los originales anteriores están en
  `scripts/photo-sources/anteriores/` por si hay que volver atrás.
- Descartada para Empresas https://www.pexels.com/photo/19086511/ : se lee el rótulo de un
  comercio en el fondo.
- Sin personas famosas ni menores (a juicio visual; no hay forma de comprobarlo).
- **Control**: la pantalla del teléfono muestra contenido borroso que no se reconoce
  como ninguna app. Si se prefiere una pantalla que no se vea, la alternativa revisada es
  https://www.pexels.com/photo/hands-holding-smartphone-in-sunlight-next-to-flowers-35794013/
- La licencia de Pexels no cubre derechos de imagen de las personas retratadas más allá
  de lo que declara la plataforma, y prohíbe dar a entender que esas personas avalan el
  producto. Conviene que alguien de legal lo confirme antes de publicar.

## Pendiente
- Foto del equipo fundador (sección "Por qué lo hacemos"): **foto propia pendiente**.
