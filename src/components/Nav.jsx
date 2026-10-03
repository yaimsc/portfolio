import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const go = (id) => {
    if (pathname !== "/") navigate("/", { state: { scrollTo: id } });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="brand" to="/">Yaiza Muñoz</Link>
        <button onClick={() => go("indice")}>índice</button>
        <button onClick={() => go("capitulos")}>capítulos</button>
        <button onClick={() => go("autora")}>sobre la autora</button>
        <button onClick={() => go("colofon")}>contacto</button>
      </div>
      <button className="ribbon" onClick={() => go("indice")} aria-label="Ir al índice" />
    </header>
  );
}
