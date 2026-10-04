import { useTranslation } from "react-i18next";
import s from "./Guide.module.scss";

export function Guide() {
  const { t } = useTranslation();
  return (
    <section>
      <h3>{t("guide.title")}</h3>
      <p>{t("guide.p1")}</p>
      <ul className={s.ticks}>
        <li>{t("guide.l1")}</li>
        <li>{t("guide.l2")}</li>
      </ul>
      <p className="soft">{t("guide.p2")}</p>
      <p className={`mono ${s.prompt}`}>
        <span>$</span> {t("guide.cmd")}
      </p>
      <p className="mono soft">{t("guide.p3")}</p>
    </section>
  );
}
