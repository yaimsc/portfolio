import { useTranslation } from "react-i18next";

export function Prologue() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("prologue.title")}</h2>
      <p>{t("prologue.p1")}</p>
      <p>{t("prologue.p2")}</p>
      <p>{t("prologue.p3")}</p>
    </section>
  );
}
