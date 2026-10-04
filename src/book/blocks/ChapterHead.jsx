import { useTranslation } from "react-i18next";
import s from "./ChapterHead.module.scss";

export function ChapterHead({ p }) {
  const { t } = useTranslation();
  return (
    <header>
      <p className={`mono ${s.label}`}>{t("chapter", { n: p.num })}</p>
      <h2>{p.longTitle}</h2>
      <p className={s.epigraph}>{p.epigraph}</p>
      <div className={s.chips}>
        <span className={`${s.tag} ${p.pro ? s.pro : ""}`}>{p.tag}</span>
        {p.meta.map(([k, v]) => (
          <span className={s.chip} key={k}>
            <b>{k}</b> {v}
          </span>
        ))}
      </div>
    </header>
  );
}
