import s from "./FigureBlock.module.scss";

export function FigureBlock({ src, alt, caption }) {
  return (
    <figure className={s.fig}>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
