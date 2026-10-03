import { useContext } from "react";
import { BookCtx } from "./ctx.js";
import Doodle from "./Doodle.jsx";
import { person, projects } from "./data.js";

export function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span /><Doodle name="sparkle" size={16} /><span />
    </div>
  );
}

function Toc() {
  const { goTo, spreads } = useContext(BookCtx);
  const row = (id, title, tag, pro) => {
    const idx = spreads.findIndex((s) => s.id === id);
    return (
      <li key={id}>
        <button className="row" onClick={() => goTo(idx)}>
          <span className="name">
            {title}
            {tag && <span className={`tag ${pro ? "pro" : ""}`}>{tag}</span>}
          </span>
          <i className="leader" />
          <span className="pg">p. {idx * 2 + 2}</span>
        </button>
      </li>
    );
  };
  return (
    <section>
      <h2>Índice</h2>
      <p className="soft">Elige un capítulo y el libro se abre por esa página.</p>
      <ul className="toc">
        {projects.map((p) => row(`${p.slug}-0`, `Capítulo ${p.num}. ${p.title}`, p.tag, p.pro))}
        {row("colofon", "Colofón y contacto")}
      </ul>
    </section>
  );
}

function Prologue() {
  return (
    <section>
      <h2>Prólogo</h2>
      <p>Soy Yaiza Muñoz, Software Engineer con más de ocho años de experiencia en tech. Me muevo entre el código y el diseño para crear productos digitales que mejoran el día a día de las personas.</p>
      <p>Desarrollo con design systems para asegurar coherencia visual y que cada interacción sea clara y funcional. Colaboro estrechamente con desarrolladores, uniendo diseño y tecnología para que el producto final respete cada detalle pensado para la experiencia del usuario.</p>
      <p>Fuera de la pantalla leo, cocino para relajarme, hago punto, disfruto de la naturaleza y exploro nuevas formas de diseño. Para mí, el buen UX no solo organiza interfaces: hace la vida más sencilla, cercana y significativa para quien lo usa.</p>
      <p>Este libro reúne tres capítulos: un trabajo final de máster y dos proyectos profesionales. Cada uno se lee como una receta: a la izquierda, los ingredientes y lo importante; a la derecha, el transcurso paso a paso.</p>
      <p className="mono prompt"><span>$</span> aficiones --listar</p>
      <ul className="hobbies">
        <li><Doodle name="book" /><span><b>Leer</b><em>[tu lectura actual]</em></span></li>
        <li><Doodle name="pot" /><span><b>Cocinar</b><em>[tu plato de cabecera]</em></span></li>
        <li><Doodle name="yarn" /><span><b>Hacer punto</b><em>[lo que llevas en las agujas]</em></span></li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Colofón</h2>
      <p>Si crees que mi perfil puede encajar, escríbeme para integrar productos digitales y mejorar experiencias.</p>
      <p><a className="mail" href={`mailto:${person.email}`}>{person.email}</a></p>
      <ul className="links mono">
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Behance</a></li>
      </ul>
      <p className="mono soft">Compuesto en Libre Baskerville, Inter y JetBrains Mono. Hecho con React y Vite.</p>
    </section>
  );
}

function End() {
  const { goTo } = useContext(BookCtx);
  return (
    <section className="end">
      <Doodle name="sparkle" size={56} />
      <h2>Fin</h2>
      <p className="soft">Gracias por leer.</p>
      <button className="btn" onClick={() => goTo(-1)}>Cerrar el libro</button>
    </section>
  );
}

export function Block({ b }) {
  switch (b.type) {
    case "prologue": return <Prologue />;
    case "toc": return <Toc />;
    case "contact": return <Contact />;
    case "end": return <End />;
    case "chapterHead": {
      const p = b.p;
      return (
        <header className="chapter-head">
          <p className="mono label">Capítulo {p.num}</p>
          <h2>{p.longTitle}</h2>
          <p className="epigraph">{p.epigraph}</p>
          <div className="chips">
            <span className={`tag ${p.pro ? "pro" : ""}`}>{p.tag}</span>
            {p.meta.map(([k, v]) => <span className="chip" key={k}><b>{k}</b> {v}</span>)}
          </div>
        </header>
      );
    }
    case "label":
      return <p className="mono label">{b.text}</p>;
    case "list":
      return (
        <section>
          <h3>{b.title}</h3>
          <ul className="ticks">{b.items.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
      );
    case "points":
      return (
        <section>
          <h3>{b.title}</h3>
          <dl className="points">
            {b.items.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>
      );
    case "steps":
      return (
        <section>
          <h3>{b.title}</h3>
          <ol className="steps">
            {b.steps.map((s, k) => (
              <li key={s.title}>
                {k > 0 && <Divider />}
                <div className="step">
                  <span className="n">{String(k + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{s.title}</strong>
                    {s.meta && <span className="when">{s.meta}</span>}
                    <p>{s.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );
    case "figure":
      return (
        <figure className="fig">
          <img src={b.src} alt={b.alt} />
          <figcaption>{b.caption}</figcaption>
        </figure>
      );
    case "swatches":
      return (
        <section>
          <h3>{b.title}</h3>
          <div className="swatches">
            {b.items.map(([c, n]) => (
              <div className="swatch" key={c}><b style={{ background: c }} />{c.toUpperCase()}<br />{n}</div>
            ))}
          </div>
        </section>
      );
    case "blur":
      return (
        <figure className="fig">
          <div className="blurbox">
            <span className="blurred mock" aria-hidden="true"><i /><i /><i /></span>
            <span className="lock">Difuminado</span>
          </div>
          <figcaption>{b.caption}</figcaption>
        </figure>
      );
    case "notice":
      return <p className="notice">{b.text}</p>;
    default:
      return <p className="example">{b.text}</p>;
  }
}
