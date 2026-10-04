import { createContext } from "react";

// Navegación del libro: goTo(n) lleva a la doble página n. -1 es el libro cerrado.
// indexIdx es la posición de la doble página del índice, para no repetir el id a mano.
export const BookCtx = createContext({ goTo: () => {}, spreads: [], indexIdx: 0 });
