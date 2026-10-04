import s from "./NoticeBlock.module.scss";

export function NoticeBlock({ text }) {
  return <p className={s.notice}>{text}</p>;
}
