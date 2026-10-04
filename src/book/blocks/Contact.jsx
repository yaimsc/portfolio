import { useTranslation } from "react-i18next";
import { useContent } from "../../hooks/useContent.js";
import s from "./Contact.module.scss";

export function Contact() {
  const { t } = useTranslation();
  const { person } = useContent();
  return (
    <section>
      <h2>{t("colophon.title")}</h2>
      <p>{t("colophon.p1")}</p>
      <p>
        <a className={s.mail} href={`mailto:${person.email}`}>
          {person.email}
        </a>
      </p>
      <ul className={`mono ${s.links}`}>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Behance</a>
        </li>
      </ul>
      <p className="mono soft">{t("colophon.p2")}</p>
    </section>
  );
}
