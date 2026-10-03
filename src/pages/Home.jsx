import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Divider from "../components/Divider.jsx";
import { projects } from "../data/projects.js";
import { asset } from "../asset.js";

const STAR = `      █
      █
     ███
     ███
   ███████
█████████████
   ███████
     ███
     ███
      █
      █`;

export default function Home() {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const t = setTimeout(() => document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: "smooth" }), 60);
      return () => clearTimeout(t);
    }
  }, [state]);

  return (
    <main>
      <section className="hero wrap">
        <div className="hero-text">
          <p className="mono meta">Edición 2026<br />Software Engineer con enfoque en diseño, más de 8 años en tech</p>
          <h1>Yaiza Muñoz</h1>
          <p className="epigraph">Traduzco soluciones digitales fielmente a producto final.</p>
          <p>Uno desarrollo y diseño. Llevo los design systems al código de manera coherente, traduciendo cada detalle fielmente al producto final.</p>
          <button className="btn" onClick={() => document.getElementById("indice")?.scrollIntoView({ behavior: "smooth" })}>Ir al índice</button>
        </div>
        <div className="hero-tile" aria-hidden="true">
          <pre className="star">{STAR}</pre>
          <span className="mono tile-cap">patrón de punto, 13 × 11</span>
        </div>
      </section>

      <div className="wrap">
        <Reveal as="section" id="indice" className="card">
          <div className="spread">
            <div>
              <h2>Índice</h2>
              <ul className="toc">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link className="row" to={`/capitulo/${p.slug}`}>
                      <span className="name">Capítulo {p.n}. {p.title}<span className={`tag ${p.pro ? "pro" : ""}`}>{p.tag}</span></span>
                      <i className="leader" />
                      <span className="pg">p. {p.page}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Prólogo</h2>
              <p>Soy ingeniera de software y trabajo en el punto donde se unen código y diseño. Construyo productos digitales que mejoran el día a día de las personas, y me importa que cada detalle pensado llegue intacto al producto final. Por eso llevo los design systems al código y colaboro codo con codo con el resto del equipo de desarrollo.</p>
            </div>
          </div>
        </Reveal>

        <section id="capitulos" className="block">
          <Reveal as="h2">Capítulos</Reveal>
          <div className="shelf">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link className={`cover-card tone-${p.tone}`} to={`/capitulo/${p.slug}`}>
                  <span className="mono">Capítulo {p.n}</span>
                  <span className="ci">
                    {p.cover && <img src={asset(p.cover)} alt={`Imagen de ${p.title}`} />}
                    {p.blurredCover && <span className="blurred mock"><i /><i /><i /></span>}
                    {p.blurredCover && <span className="lock mono">Confidencial</span>}
                  </span>
                  <h3>{p.title}</h3>
                  <span className="tag">{p.tag}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal as="section" id="autora" className="card">
          <div className="spread">
            <div>
              <div className="portrait" style={{ backgroundImage: `url(${asset("punto.svg")})` }}>
                {/* Pon tu foto en public/assets/yaiza.jpg */}
                <img src={asset("yaiza.jpg")} alt="Retrato de Yaiza Muñoz" onError={(e) => e.currentTarget.remove()} />
              </div>
              <p className="mono cap">La autora</p>
            </div>
            <div>
              <h2>Sobre la autora</h2>
              <p>Soy Yaiza Muñoz, Software Engineer con más de ocho años de experiencia en tech. Me muevo entre el código y el diseño para crear productos digitales que mejoran el día a día de las personas.</p>
              <p>Desarrollo con design systems para asegurar coherencia visual y que cada interacción sea clara y funcional. Colaboro estrechamente con desarrolladores, uniendo diseño y tecnología para que el producto final respete cada detalle pensado para la experiencia del usuario.</p>
              <p>Fuera de la pantalla leo, cocino para relajarme, hago punto, disfruto de la naturaleza y exploro nuevas formas de diseño.</p>
              <div className="term mono">
                <div><span className="p">$</span> aficiones --listar</div>
                <div>leer ........... <span className="v">[tu lectura actual]</span></div>
                <div>cocinar ........ <span className="v">[tu plato de cabecera]</span></div>
                <div>hacer punto .... <span className="v">[lo que llevas en las agujas]</span></div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" id="colofon" className="card colophon">
          <Divider />
          <h2>Colofón</h2>
          <p>Si crees que mi perfil puede encajar, escríbeme para integrar productos digitales y mejorar experiencias.</p>
          <p><a className="mail" href="mailto:yaimsc@gmail.com">yaimsc@gmail.com</a></p>
          <ul className="links mono">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Behance</a></li>
          </ul>
          <p className="mono muted">Hecho con React y Vite. Compuesto en Libre Baskerville, Inter y JetBrains Mono.</p>
        </Reveal>
      </div>
    </main>
  );
}
