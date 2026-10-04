import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { BookCtx } from "../ctx.js";
import Doodle from "../../components/Doodle.jsx";
import { Divider } from "./Divider.jsx";
import s from "./Hobbies.module.scss";

export function Hobbies() {
  const { t } = useTranslation();
  const { goTo, indexIdx } = useContext(BookCtx);
  return (
    <section>
      <p className={`mono ${s.prompt}`}>
        <span>$</span> {t("hobbies.cmd")}
      </p>
      <ul className={s.hobbies}>
        <li>
          <Doodle name="book" />
          <span>
            <b>{t("hobbies.read")}</b>
            <em>{t("hobbies.readNow")}</em>
          </span>
        </li>
        <li>
          <Doodle name="pot" />
          <span>
            <b>{t("hobbies.cook")}</b>
            <em>{t("hobbies.cookNow")}</em>
          </span>
        </li>
        <li>
          <Doodle name="yarn" />
          <span>
            <b>{t("hobbies.knit")}</b>
            <em>{t("hobbies.knitNow")}</em>
          </span>
        </li>
      </ul>
      <Divider />
      <button className="btn" onClick={() => goTo(indexIdx)}>
        {t("hobbies.goIndex")}
      </button>
    </section>
  );
}
