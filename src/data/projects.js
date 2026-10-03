// Contenido de los capítulos. Edita aquí los textos, herramientas y pasos.
// ingredients: columna izquierda (lo importante). steps: columna derecha (el transcurso).
export const projects = [
  {
    slug: "aura", n: 1, page: "07", tone: "rose", title: "AURA", tag: "TFM", pro: false,
    subtitle: "Ejercicio y nutrición que se adaptan a tu ciclo hormonal",
    epigraph: "Tu cuerpo cambia. Tu energía también.",
    cover: "aura-app.jpg",
    ingredients: [
      { label: "Tiempo", value: "Noviembre de 2025 a marzo de 2026" },
      { label: "Alcance", value: "Landing web y app móvil" },
      { label: "Herramientas", list: ["Figma", "Design system propio", "Heroicons", "Streamline", "unDraw"] },
      { label: "Tipografías", value: "Josefin Sans y Nunito" },
      { label: "Paleta", colors: ["#D84C97", "#30BBA6", "#FEEAD1"] },
      { label: "Referentes", list: ["Musa", "Hormona", "Dotsdays", "YogaJoy", "BitePal"] },
    ],
    steps: [
      { title: "Entender el problema", text: [
        "Las mujeres experimentan cambios físicos y emocionales ligados al ciclo hormonal, que afectan a su energía, descanso, alimentación y estado emocional.",
        "Las herramientas actuales se reparten entre apps de ciclo, de hábitos nutricionales y de ejercicio. Cada una se queda en su ámbito y es la usuaria quien debe interpretar los datos aislados." ] },
      { title: "Analizar el mercado", text: ["Analicé Musa, Hormona, Dotsdays, YogaJoy y BitePal. Ninguna cruza ciclo, nutrición y ejercicio en una misma experiencia."] },
      { title: "Dar forma a la solución", image: "aura-app.jpg", caption: "Pantallas de la app: inicio, receta y entrenamiento.", text: [
        "AURA conecta las tres vertientes. Con los datos de cada usuaria, la IA interpreta en qué fase del ciclo está y recomienda entrenamientos, comidas y rutinas adaptadas a cómo se siente.",
        "Funciones clave: cuestionario inicial, home con la fase actual, calendario del ciclo, registro de comidas y ejercicio, recomendaciones por fase, comunidad y notificaciones." ] },
      { title: "Marca y design system", text: ["La identidad es cálida y tranquila, con trazo fino y fotografía de tonos suaves. Todo se apoya en un design system con fundamentos y componentes reutilizables."] },
      { title: "Diseñar y prototipar", image: "aura-web.jpg", caption: "Diseño final de la landing web.", text: ["Del branding y la user persona (diciembre) a la arquitectura y el design system (enero), los wireframes (febrero) y la alta fidelidad con el prototipo final (marzo)."] },
      { title: "Resultado", image: "aura-prototipo.jpg", caption: "Prototipo en web y móvil.", text: ["Una landing web y una app con prototipo navegable. Añade aquí el enlace a la memoria completa o al prototipo de Figma."] },
    ],
  },
  {
    slug: "rediseno", n: 2, page: "19", tone: "sky", title: "Rediseño de una herramienta interna", tag: "Proyecto profesional", pro: true,
    subtitle: "Proyecto confidencial",
    epigraph: "Las imágenes están difuminadas. Puedo contarlo en detalle en una conversación.",
    cover: null, blurredCover: true,
    ingredients: [
      { label: "Empresa", value: "[Confidencial]" },
      { label: "Tiempo", value: "[Año]" },
      { label: "Equipo", value: "[Equipo y perfiles]" },
      { label: "Herramientas", list: ["[Herramienta 1]", "[Herramienta 2]"] },
    ],
    steps: [
      { title: "El reto", example: true, text: ["Ejemplo: explica el reto y por qué hacía falta rediseñar, sin nombres de clientes ni datos internos."] },
      { title: "Lo que hice", example: true, text: ["Ejemplo: investigación, design system, colaboración con desarrollo y validación con usuarios internos."] },
      { title: "Vistazo al resultado", blurred: true, caption: "Imagen difuminada por confidencialidad.", text: ["Sustituye este bloque por tus capturas con la clase blurred."] },
    ],
  },
  {
    slug: "crm", n: 3, page: "31", tone: "butter", title: "De tablet a bolsillo", tag: "Proyecto profesional", pro: true,
    subtitle: "Rediseñando una app para comerciales, 2017–2018",
    epigraph: "Proyecto profesional anterior al máster.",
    cover: null,
    ingredients: [
      { label: "Tiempo", value: "2017–2018" },
      { label: "Rol", value: "[Tu rol en el proyecto]" },
      { label: "Equipo", value: "[Equipo y perfiles]" },
      { label: "Herramientas", list: ["[Herramienta 1]", "[Herramienta 2]"] },
    ],
    steps: [
      { title: "Contexto y problema", example: true, text: ["Ejemplo: los comerciales necesitaban consultar el CRM durante las visitas, pero la app solo existía para tablet."] },
      { title: "La solución", example: true, text: ["Ejemplo: qué priorizaste para la pantalla pequeña y qué cambió para los usuarios. Añade métricas solo si las tienes confirmadas."] },
      { title: "El proceso", example: true, text: ["Ejemplo: escuchar a los usuarios, unificar la identidad visual, adaptar la información de una pantalla grande a una pequeña y lanzar un MVP para iterar."] },
      { title: "Diseños finales", example: true, text: ["Ejemplo: aquí van las capturas de la app. Guárdalas en public/assets y añade image y caption al paso."] },
    ],
  },
];
