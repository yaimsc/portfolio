import Book from "./Book.jsx";
import Doodle from "./Doodle.jsx";

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <span className="brand">Yaiza Muñoz</span>
          <span className="mono soft">portfolio</span>
        </div>
      </header>
      <main className="wrap stage">
        <Book />
      </main>
      <footer>
        <div className="wrap"><Doodle name="sparkle" size={14} /> © 2026 Yaiza Muñoz</div>
      </footer>
    </>
  );
}
