import s from "./PointsBlock.module.scss";

export function PointsBlock({ title, items }) {
  return (
    <section>
      <h3>{title}</h3>
      <dl className={s.points}>
        {items.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
