import Book from "./book/Book.jsx";
import Doodle from "./components/Doodle.jsx";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle.jsx";
import { useTranslation } from "react-i18next";
import { BookCtx } from "./book/ctx.js";
import { useBook } from "./hooks/useBook.js";
import s from "./App.module.scss";

export default function App() {
  const { t } = useTranslation();
  // El estado del libro vive aquí (no dentro de Book) para que la barra superior
  // pueda cerrar el libro desde la marca: "Yaiza Muñoz" vuelve al inicio cerrado.
  const book = useBook();
  const home = () => {
    book.goToPage(-1);
    book.bookRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  };
  return (
    <BookCtx.Provider value={{ goTo: book.goToPage, spreads: book.spreads, indexIdx: book.indexIdx }}>
      <header className={s.topbar}>
        <div className={s.wrap}>
          <button type="button" className={s.brand} onClick={home} aria-label={t("brand")} title={t("brand")}>
            {t("brand")}
          </button>
          <LanguageToggle />
        </div>
      </header>
      <main className={`${s.wrap} ${s.stage}`}>
        <Book state={book} />
      </main>
      <footer className={s.footer}>
        <div className={s.wrap}>
          <Doodle name="sparkle" size={14} /> {t("footer")}
        </div>
      </footer>
    </BookCtx.Provider>
  );
}