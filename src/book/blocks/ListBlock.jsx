import s from "./ListBlock.module.scss";

export function ListBlock({ title, items }) {
  return (
    <section>
      <h3>{title}</h3>
      <ul className={s.ticks}>
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
