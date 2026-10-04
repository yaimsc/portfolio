import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { BookCtx } from "../ctx.js";
import Doodle from "../../components/Doodle.jsx";
import s from "./End.module.scss";

export function End() {
  const { t } = useTranslation();
  const { goTo } = useContext(BookCtx);
  return (
    <section className={s.end}>
      <Doodle name="sparkle" size={56} />
      <h2>{t("end.title")}</h2>
      <p className="soft">{t("end.p1")}</p>
      <button className="btn" onClick={() => goTo(-1)}>
        {t("end.closeBook")}
      </button>
    </section>
  );
}
