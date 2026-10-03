import { createContext } from "react";

// Navegación del libro: goTo(n) lleva a la doble página n. -1 es el libro cerrado.
export const BookCtx = createContext({ goTo: () => {}, spreads: [] });
