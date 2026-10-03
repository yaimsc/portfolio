// Todo el contenido vive aquí. Cada capítulo tiene "spreads" (dobles páginas):
// left = ingredientes y puntos importantes, right = transcurso y pasos.
export const person = {
  name: "Yaiza Muñoz",
  role: "Software Engineer con enfoque en diseño, más de 8 años en tech",
  email: "yaimsc@gmail.com",
};

const ejemplo = (text) => ({ type: "example", text });

export const projects = [
  {
    slug: "aura",
    num: 1,
    page: "07",
    title: "AURA",
    longTitle: "AURA: ejercicio y nutrición que se adaptan a tu ciclo hormonal",
    epigraph: "Tu cuerpo cambia. Tu energía también.",
    tag: "TFM",
    pro: false,
    cover: "/assets/aura-app.jpg",
    meta: [
      ["Tiempo", "Nov 2025 a mar 2026"],
      ["Alcance", "Landing web y app móvil"],
    ],
    spreads: [
      {
        title: "La receta",
        left: [
          { type: "list", title: "Ingredientes", items: ["Figma", "Design system propio", "Heroicons y Streamline", "Ilustraciones de unDraw", "Josefin Sans y Nunito"] },
          {
            type: "points",
            title: "Puntos importantes",
            items: [
              ["Problema", "Apps separadas de ciclo, nutrición y ejercicio: la usuaria debe interpretar datos aislados."],
              ["Solución", "Un ecosistema donde la IA adapta entrenamientos, comidas y rutinas a la fase del ciclo."],
              ["Referentes", "Musa, Hormona, Dotsdays, YogaJoy y BitePal. Ninguna cruza las tres vertientes."],
            ],
          },
        ],
        right: [
          {
            type: "steps",
            title: "Transcurso",
            steps: [
              { title: "Formalización del proyecto", meta: "23 nov", text: "Definición del problema, objetivos y alcance." },
              { title: "Branding y user persona", meta: "18 dic", text: "Identidad cálida y tranquila, con trazo fino y fotografía de tonos suaves." },
              { title: "Arquitectura y design system", meta: "26 ene", text: "Estructura de la web y la app, y librería de componentes." },
              { title: "Wireframes y prototipo inicial", meta: "15 feb", text: "Primeras pantallas y flujos para validar la idea." },
              { title: "Alta fidelidad y prototipo final", meta: "23 mar", text: "Diseño final de la landing y la app, con prototipo navegable." },
            ],
          },
        ],
      },
      {
        title: "El resultado",
        left: [
          { type: "figure", src: "/assets/aura-app.jpg", alt: "Pantallas finales de la app AURA", caption: "Fig. 1. Inicio, receta y entrenamiento." },
          {
            type: "swatches",
            title: "Paleta de marca",
            items: [["#d84c97", "Primario"], ["#30bba6", "Secundario"], ["#feead1", "Acento"]],
          },
        ],
        right: [
          { type: "figure", src: "/assets/aura-web.jpg", alt: "Diseño final de la landing web de AURA", caption: "Fig. 2. Landing web." },
          { type: "figure", src: "/assets/aura-prototipo.jpg", alt: "Prototipo de AURA en web y móvil", caption: "Fig. 3. Prototipo en web y móvil." },
          { type: "notice", text: "Añade aquí el enlace a la memoria completa o al prototipo de Figma." },
        ],
      },
    ],
  },
  {
    slug: "rediseno",
    num: 2,
    page: "19",
    title: "Rediseño de una herramienta interna",
    longTitle: "Rediseño de una herramienta interna",
    epigraph: "Proyecto confidencial. Las imágenes están difuminadas y puedo contarlo en detalle en una conversación.",
    tag: "Proyecto profesional",
    pro: true,
    cover: null,
    meta: [
      ["Empresa", "[Confidencial]"],
      ["Tiempo", "[Año]"],
    ],
    spreads: [
      {
        title: "La receta",
        left: [
          { type: "list", title: "Ingredientes", items: ["[Herramientas que usaste]"] },
          { type: "points", title: "Puntos importantes", items: [["Reto", "[Qué problema había que resolver, sin datos sensibles]"], ["Decisión", "[Qué decidiste y por qué]"], ["Resultado", "[Qué cambió, sin cifras confidenciales]"]] },
        ],
        right: [
          {
            type: "steps",
            title: "Transcurso",
            steps: [
              { title: "[Primer paso]", meta: "[Fecha]", text: "Ejemplo: investigación con usuarios internos." },
              { title: "[Segundo paso]", meta: "[Fecha]", text: "Ejemplo: design system y componentes en código." },
              { title: "[Tercer paso]", meta: "[Fecha]", text: "Ejemplo: colaboración con desarrollo y validación." },
            ],
          },
        ],
      },
      {
        title: "Un vistazo",
        left: [{ type: "blur", caption: "Fig. 1. Imagen difuminada por confidencialidad." }],
        right: [{ type: "blur", caption: "Fig. 2. Imagen difuminada por confidencialidad." }, ejemplo("Para mostrar una captura difuminada, usa <img className=\"blurred\" /> en Blocks.jsx.")],
      },
    ],
  },
  {
    slug: "crm",
    num: 3,
    page: "31",
    title: "De tablet a bolsillo",
    longTitle: "De tablet a bolsillo: rediseñando una app para comerciales",
    epigraph: "Proyecto profesional anterior al máster. Los textos son de ejemplo y se sustituirán por los reales.",
    tag: "Proyecto profesional",
    pro: true,
    cover: null,
    meta: [
      ["Tiempo", "2017–2018"],
      ["Rol", "[Tu rol en el proyecto]"],
    ],
    spreads: [
      {
        title: "La receta",
        left: [
          { type: "list", title: "Ingredientes", items: ["[Herramientas que usaste]"] },
          { type: "points", title: "Puntos importantes", items: [["Contexto", "Ejemplo: los comerciales usaban el CRM en tablet y necesitaban consultarlo también en el móvil."], ["Reto", "Ejemplo: adaptar la información de una pantalla grande a una pequeña."], ["Resultado", "[Qué cambió para los usuarios. Métricas solo si están confirmadas]"]] },
        ],
        right: [
          {
            type: "steps",
            title: "Transcurso",
            steps: [
              { title: "Escuchar a los usuarios", meta: "[Fecha]", text: "Ejemplo: entender qué hacían en cada visita." },
              { title: "Unificar la identidad visual", meta: "[Fecha]", text: "Ejemplo: mismos componentes en tablet y móvil." },
              { title: "Adaptar y lanzar un MVP", meta: "[Fecha]", text: "Ejemplo: priorizar lo esencial e iterar con su feedback." },
            ],
          },
        ],
      },
      {
        title: "Diseños finales",
        left: [ejemplo("Aquí va la primera captura de la app. Guárdala en public/assets y añade un bloque de tipo figure en data.js.")],
        right: [ejemplo("Aquí va la segunda captura, con su pie de figura.")],
      },
    ],
  },
];
