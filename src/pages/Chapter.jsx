import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Divider from "../components/Divider.jsx";
import { projects } from "../data/projects.js";
import { asset } from "../asset.js";

function Ingredient({ item }) {
  return (
    <div className="ing">
      <dt className="mono">{item.label}</dt>
      <dd>
        {item.value}
        {item.list && <span className="pills">{item.list.map((t) => <span className="pill" key={t}>{t}</span>)}</span>}
        {item.colors && (
          <span className="swatches">
            {item.colors.map((c) => <span key={c} title={c} style={{ background: c }} />)}
          </span>
        )}
      </dd>
    </div>
  );
}

// Con key=slug, cada capítulo vuelve a "abrirse" al navegar entre ellos
export default function Chapter() {
  const { slug } = useParams();
  return <ChapterBook key={slug} slug={slug} />;
}

function ChapterBook({ slug }) {
  const [opened, setOpened] = useState(false);
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return <Navigate to="/" replace />;
  const p = projects[i];
  const prev = projects[i - 1];
  const next = projects[i + 1];

  return (
    <main className="wrap chapter">
      <Link className="mono back" to="/">Volver al índice</Link>

      <div className="book">
        {!opened && (
          <div className={`lid tone-${p.tone}`} onAnimationEnd={() => setOpened(true)} aria-hidden="true">
            <div className="lid-in">
              <span className="mono">Capítulo {p.n}</span>
              <strong>{p.title}</strong>
            </div>
          </div>
        )}

        <header className="chapter-head">
          <p className="mono label">Capítulo {p.n} · <span className={`tag ${p.pro ? "pro" : ""}`}>{p.tag}</span></p>
          <h1>{p.title}</h1>
          <p className="sub">{p.subtitle}</p>
          <p className="epigraph">{p.epigraph}</p>
        </header>

        <div className="chapter-grid">
          <aside className="margin" aria-label="Ingredientes">
            <h2>Ingredientes</h2>
            <p className="mono muted small">Lo importante del proyecto</p>
            <dl>{p.ingredients.map((it) => <Ingredient key={it.label} item={it} />)}</dl>
          </aside>

          <div className="flow">
            {p.steps.map((s, k) => (
              <div key={s.title}>
                {k > 0 && <Divider />}
                <Reveal as="article" className={`step ${s.example ? "example" : ""}`}>
                  <p className="mono step-n">Paso {String(k + 1).padStart(2, "0")}</p>
                  <h2>{s.title}</h2>
                  {s.text.map((t, j) => <p key={j}>{t}</p>)}
                  {s.image && (
                    <figure>
                      <img src={asset(s.image)} alt={s.caption || s.title} />
                      <figcaption className="mono">{s.caption}</figcaption>
                    </figure>
                  )}
                  {s.blurred && (
                    <figure>
                      <div className="blurbox"><span className="blurred mock"><i /><i /><i /></span><span className="lock mono">Difuminado</span></div>
                      <figcaption className="mono">{s.caption}</figcaption>
                    </figure>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="pager mono">
        {prev ? <Link to={`/capitulo/${prev.slug}`}>Capítulo anterior</Link> : <span />}
        {next ? <Link to={`/capitulo/${next.slug}`}>Capítulo siguiente</Link> : <Link to="/">Volver al índice</Link>}
      </nav>
    </main>
  );
}
