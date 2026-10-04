# Portfolio de Yaiza Muñoz: libro cerrado (React + Vite)

Se abre como un libro: portada cerrada con tu foto y quién eres; al abrirlo, el prólogo a solas (la antesala, con tus aficiones); después el índice; luego cada case study con ficha de receta (izquierda: ingredientes y puntos importantes; derecha: transcurso por pasos). Las páginas giran al avanzar y al volver atrás.

## Abrirlo en WebStorm
1. File > Open y elige esta carpeta.
2. Terminal: `npm install` y después `npm run dev` (http://localhost:5173).
3. Para publicar: `git push` a `main`. El workflow `.github/workflows/deploy.yml` compila y sube el sitio a GitHub Pages automáticamente.

## Cómo se navega
- Portada: botón "Abrir el libro" o flecha derecha (abre por el prólogo).
- Prólogo: botón "Ir al índice" en la página derecha.
- Índice: pulsa un capítulo y el libro pasa página hasta él.
- En cualquier case study: marcapáginas rosa (arriba a la derecha) o botón "Volver al índice". La página gira hacia atrás.
- Flechas del teclado para pasar página. En móvil no hay giro 3D, hay un fundido, la barra de página queda fija abajo y al pasar página la vista vuelve arriba del libro (si no, el cambio caía fuera de pantalla).

## Dónde tocar
- `src/i18n/locales/es.json` y `en.json`: **todo el texto del sitio**. Al final de cada archivo están `person` (tu nombre, rol y email) y `projects` (los capítulos: `spreads` con la página izquierda y derecha de cada doble página).
- `src/book/blocks/`: los bloques que pintan cada página (índice, prólogo, pasos, figuras...). El `type` de cada bloque del JSON decide cuál se usa.
- `src/hooks/useBook.js`: orden de las páginas (`buildSpreads`) y la animación. `indexIdx` es la doble página del índice.
- `src/styles/global.scss`: colores y tipografías en `:root`.
- `public/assets/`: imágenes.

## Textos e idiomas
Todo lo que se ve está en los JSON de idioma, así que no hay texto suelto en el JSX. Eso incluye los capítulos, que antes vivían solo en español: al cambiar de idioma ahora se translate todo, no solo la interfaz.

El contenido se lee con el hook `useContent()`, que devuelve `{ person, projects }` del idioma activo. Si añades un capítulo, `useBook.js` lo coloca solo en el orden del libro.

## Estilos (CSS Modules)
Cada componente tiene su `*.module.scss` al lado, con solo las clases que ese componente usa. En el JSX se importan y se acceden por nombre: `import s from "./ChapterHead.module.scss"` y `className={s.epigraph}`. Las clases se scopean solas, así que dos ficheros pueden usar `.tag` o `.prompt` sin pisarse.

- `src/styles/global.scss` es la única capa global: variables de `:root`, reset del navegador, tipografía base de `h1-h3` y `p`, y tres utilidades que comparten varios ficheros (`.mono`, `.soft`, `.btn`). Nada más es global.
- Añadir un estilo nuevo: crea el `.module.scss` junto al `.jsx` que lo necesita. Si una clase se repite en varios ficheros, duplica la regla en lugar de subirla a `global.scss`.
- Las reglas que se solapaban entre módulos se han resuelto dejando solo el valor final (por ejemplo `.chapter-head .epigraph` ya no existe porque dentro de una página siempre era `1rem`).

## Pendiente de tu parte
- Foto: `public/assets/yaiza.jpg` (si falta, se ve un marco con un destello).
- Aficiones y stack: textos entre corchetes en `hobbies` de los JSON.
- Enlaces de Instagram y Behance en `src/book/blocks/Contact.jsx` y el de la memoria o prototipo de AURA en el bloque `notice` del capítulo 1.
- Textos entre corchetes de los capítulos 2 y 3, en los dos JSON.
- El inglés de los capítulos lo escribí yo: revisa el tono y ajusta lo que no suene a ti.
