import { useState } from "react";
import { useTranslation } from "react-i18next";
import Doodle from "../../components/Doodle.jsx";
import { useContent } from "../../hooks/useContent.js";
import page from "./Page.module.scss";
import s from "./CoverPage.module.scss";

export function CoverPage({ onOpen }) {
  const { t } = useTranslation();
  const { person } = useContent();
  const [photoOk, setPhotoOk] = useState(true);
  return (
    <div className={`${page.page} ${s.coverPage}`}>
      <div className={s.frame}>
        <p className={`mono ${s.meta}`}>{t("edition")}</p>
        <figure className={s.portrait}>
          {photoOk ? (
            <img src="/assets/yaiza.jpg" alt={t("photoAlt", { name: person.name })} onError={() => setPhotoOk(false)} />
          ) : (
            <div className={s.ph}>
              <Doodle name="sparkle" size={48} />
              <span className="mono">{t("photoMissing")}</span>
            </div>
          )}
          <Doodle name="sparkle" size={30} className={s.s1} />
          <Doodle name="sparkle" size={20} className={s.s2} />
        </figure>
        <h1>{person.name}</h1>
        <p className={`mono ${s.meta}`}>{person.role}</p>
        <p className={s.epigraph}>{t("epigraph")}</p>
        {onOpen && (
          <button className="btn btnPrimary" onClick={onOpen}>
            {t("openBook")}
          </button>
        )}
      </div>
    </div>
  );
}
