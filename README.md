# Portfolio de Yaiza Muñoz (React + Vite)

## Abrirlo en WebStorm
1. File > Open y elige esta carpeta.
2. Terminal: `npm install` y luego `npm run dev` (http://localhost:5173).
3. Para publicar: `npm run build`; la carpeta `dist` se puede subir a cualquier hosting estático.

## Estructura
- `src/data/projects.js`: todo el contenido de los capítulos. Cada proyecto tiene `ingredients` (columna izquierda) y `steps` (columna derecha, separados por un divider).
- `src/pages/Home.jsx` y `src/pages/Chapter.jsx`: portada con índice y página de capítulo.
- `src/components/`: `Nav`, `Reveal` (animación al hacer scroll) y `Divider` (malla de punto).
- `src/styles.css`: colores y tipografías en `:root`.
- `public/assets/`: imágenes.

## Animaciones
- Al entrar en un capítulo, la tapa del libro se abre. Los pasos se "pasan" como páginas al hacer scroll.
- Respeta `prefers-reduced-motion`.

## Pendiente de tu parte
- Foto en `public/assets/yaiza.jpg`.
- Aficiones del bloque de terminal, enlaces de Instagram y Behance, y enlace a la memoria o prototipo de AURA.
- Textos de ejemplo de los capítulos 2 y 3 en `projects.js` (para difuminar capturas reales usa `blurred`).
