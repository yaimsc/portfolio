import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Block } from "./Blocks.jsx";
import Doodle from "./Doodle.jsx";
import { BookCtx } from "./ctx.js";
import { person, projects } from "./data.js";
import { useMedia } from "./hooks.js";

const DUR = 800; // ms, igual que la animación CSS

// Todo el libro es una lista de dobles páginas: prólogo, índice, capítulos y colofón
function buildSpreads() {
  const spreads = [
    { id: "prologue", title: "Prólogo", left: [{ type: "prologue" }], right: [{ type: "hobbies" }] },
    { id: "toc", title: "Índice", left: [{ type: "toc" }], right: [{ type: "guide" }] },
  ];
  projects.forEach((p) => {
    p.spreads.forEach((s, k) => {
      const lead = k === 0 ? { type: "chapterHead", p } : { type: "label", text: `Capítulo ${p.num}, ${s.title}` };
      spreads.push({ id: `${p.slug}-${k}`, title: `${p.title}. ${s.title}`, left: [lead, ...s.left], right: s.right });
    });
  });
  spreads.push({ id: "colofon", title: "Colofón", left: [{ type: "contact" }], right: [{ type: "end" }] });
  return spreads;
}

function Page({ blocks, side, n }) {
  return (
    <div className={`page ${side}`}>
      {blocks.map((b, k) => <div className="blk" key={k}><Block b={b} /></div>)}
      <p className="folio">— {n} —</p>
    </div>
  );
}

function CoverPage({ onOpen }) {
  const [photoOk, setPhotoOk] = useState(true);
  return (
    <div className="page cover-page">
      <div className="frame">
        <p className="mono meta">Edición 2026</p>
        <figure className="portrait">
          {photoOk ? (
            <img src="/assets/yaiza.jpg" alt={`Retrato de ${person.name}`} onError={() => setPhotoOk(false)} />
          ) : (
            <div className="ph"><Doodle name="sparkle" size={48} /><span className="mono">Tu foto en public/assets/yaiza.jpg</span></div>
          )}
          <Doodle name="sparkle" size={30} className="s1" />
          <Doodle name="sparkle" size={20} className="s2" />
        </figure>
        <h1>{person.name}</h1>
        <p className="mono meta">{person.role}</p>
        <p className="epigraph">Traduzco soluciones digitales fielmente a producto final.</p>
        {onOpen && <button className="btn" onClick={onOpen}>Abrir el libro</button>}
      </div>
    </div>
  );
}

export default function Book() {
  const spreads = useMemo(buildSpreads, []);
  const indexIdx = useMemo(() => spreads.findIndex((s) => s.id === "toc"), [spreads]);
  const wide = useMedia("(min-width: 900px)");
  const reduce = useMedia("(prefers-reduced-motion: reduce)");
  const canFlip = wide && !reduce;

  const [i, setI] = useState(-1); // -1 es el libro cerrado
  const [flip, setFlip] = useState(null); // { dir: "next" | "prev", to }
  const timer = useRef(null);
  const busy = !!flip;

  useEffect(() => () => clearTimeout(timer.current), []);

  const go = useCallback(
    (to) => {
      if (busy || to < -1 || to >= spreads.length || to === i) return;
      if (!canFlip) {
        setI(to);
        return;
      }
      setFlip({ dir: to > i ? "next" : "prev", to });
      timer.current = setTimeout(() => {
        setI(to);
        setFlip(null);
      }, DUR);
    },
    [busy, spreads.length, i, canFlip]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, i]);

  const target = flip ? flip.to : i;
  const closed = target === -1;
  const leftIdx = flip?.dir === "prev" ? flip.to : i;
  const rightIdx = flip?.dir === "next" ? flip.to : i;

  // Qué se ve en cada página. idx -1 es la portada (a la derecha) y una página vacía (a la izquierda)
  const pageAt = (idx, side, live = false) => {
    if (idx < 0) return side === "right" ? <CoverPage onOpen={live ? () => go(0) : undefined} /> : <div className="page ghost" />;
    return <Page blocks={spreads[idx][side]} side={side} n={side === "left" ? idx * 2 + 2 : idx * 2 + 3} />;
  };

  return (
    <BookCtx.Provider value={{ goTo: go, spreads }}>
      <div className="book3d">
        {target > 0 && <button className="bookmark" aria-label="Volver al índice" title="Volver al índice" onClick={() => go(indexIdx)} />}

        <div className={`pages ${canFlip ? "flipmode" : "fade"} ${closed ? "closed" : ""}`} key={canFlip ? "flip" : i}>
          {pageAt(leftIdx, "left")}
          {pageAt(rightIdx, "right", !flip)}

          {flip && (
            <div className={`leaf ${flip.dir}`}>
              <div className="face front">
                {flip.dir === "next" ? pageAt(i, "right") : pageAt(i, "left")}
              </div>
              <div className="face back">
                {flip.dir === "next" ? pageAt(flip.to, "left") : pageAt(flip.to, "right")}
              </div>
            </div>
          )}
        </div>

        <div className="controls">
          <button onClick={() => go(i - 1)} disabled={i === -1 || busy}>{i === 0 ? "Cerrar el libro" : "Página anterior"}</button>
          <button className={i > indexIdx ? "" : "hidden"} onClick={() => go(indexIdx)} disabled={busy}>Volver al índice</button>
          <button onClick={() => go(i + 1)} disabled={i === spreads.length - 1 || busy}>{i === -1 ? "Abrir el libro" : "Página siguiente"}</button>
        </div>
        <p className="hint mono">{i < 0 ? "Abre el libro con el botón o con la flecha derecha." : `${spreads[i].title}. Pasa página con las flechas del teclado.`}</p>
      </div>
    </BookCtx.Provider>
  );
}
