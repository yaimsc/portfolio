# Portfolio de Yaiza Muñoz: libro cerrado (React + Vite)

Se abre como un libro: portada cerrada con tu foto y quién eres; al abrirlo, prólogo e índice; después cada case study con ficha de receta (izquierda: ingredientes y puntos importantes; derecha: transcurso por pasos). Las páginas giran al avanzar y al volver atrás.

## Abrirlo en WebStorm
1. File > Open y elige esta carpeta.
2. Terminal: `npm install` y después `npm run dev` (http://localhost:5173).
3. Para publicar: `npm run build` (genera `dist/`).

## Cómo se navega
- Portada: botón "Abrir el libro" o flecha derecha.
- Índice: pulsa un capítulo y el libro pasa página hasta él.
- En cualquier case study: marcapáginas rosa (arriba a la derecha) o botón "Volver al índice". La página gira hacia atrás.
- Flechas del teclado para pasar página. En móvil no hay giro 3D, hay un fundido.

## Dónde tocar
- `src/data.js`: contenido de los capítulos (`spreads`: izquierda y derecha de cada doble página).
- `src/Blocks.jsx`: prólogo, aficiones, índice y colofón.
- `src/Book.jsx`: orden de las páginas (`buildSpreads`) y la animación.
- `src/styles.css`: colores y tipografías en `:root`.
- `public/assets/`: imágenes.

## Pendiente de tu parte
- Foto: `public/assets/yaiza.jpg` (si falta, se ve un marco con un destello).
- Aficiones y stack: textos entre corchetes en `src/Blocks.jsx`.
- Enlaces de Instagram y Behance en `src/Blocks.jsx` y el de la memoria o prototipo de AURA en `src/data.js`.
- Textos de ejemplo de los capítulos 2 y 3 en `src/data.js`.
