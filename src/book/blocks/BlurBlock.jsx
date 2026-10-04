import { useTranslation } from "react-i18next";
import s from "./BlurBlock.module.scss";

export function BlurBlock({ caption }) {
  const { t } = useTranslation();
  return (
    <figure className={s.fig}>
      <div className={s.blurbox}>
        <span className={`${s.blurred} ${s.mock}`} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={s.lock}>{t("blur.masked")}</span>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
