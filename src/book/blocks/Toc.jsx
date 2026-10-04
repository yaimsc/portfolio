import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { BookCtx } from "../ctx.js";
import { useContent } from "../../hooks/useContent.js";
import s from "./Toc.module.scss";

export function Toc() {
  const { t } = useTranslation();
  const { projects } = useContent();
  const { goTo, spreads } = useContext(BookCtx);
  const row = (id, title, tag, pro) => {
    const idx = spreads.findIndex((s) => s.id === id);
    if (idx < 0) return null;
    return (
      <li key={id}>
        <button className={s.row} onClick={() => goTo(idx)}>
          <span className={s.name}>
            {title}
            {tag && <span className={`${s.tag} ${pro ? s.pro : ""}`}>{tag}</span>}
          </span>
          <i className={s.leader} />
          <span className={s.pg}>{t("page", { n: idx * 2 + 2 })}</span>
        </button>
      </li>
    );
  };
  return (
    <section>
      <h2>{t("index.title")}</h2>
      <p className="soft">{t("index.desc")}</p>
      <ul className={s.toc}>
        {row("prologue", t("index.prologue"))}
        {projects.map((p) => row(`${p.slug}-0`, t("chapterFull", { n: p.num, title: p.title }), p.tag, p.pro))}
        {row("contact", t("index.colophon"))}
      </ul>
    </section>
  );
}
