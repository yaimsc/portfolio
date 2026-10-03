// Ruta de una imagen de /public/assets, válida con cualquier base
export const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
