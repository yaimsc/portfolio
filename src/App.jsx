import Book from "./book/Book.jsx";
import Doodle from "./components/Doodle.jsx";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle.jsx";
import { useTranslation } from "react-i18next";
import s from "./App.module.scss";

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <header className={s.topbar}>
        <div className={s.wrap}>
          <span className={s.brand}>{t("brand")}</span>
          <LanguageToggle />
        </div>
      </header>
      <main className={`${s.wrap} ${s.stage}`}>
        <Book />
      </main>
      <footer className={s.footer}>
        <div className={s.wrap}>
          <Doodle name="sparkle" size={14} /> {t("footer")}
        </div>
      </footer>
    </>
  );
}
