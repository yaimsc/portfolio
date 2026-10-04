import s from "./SwatchesBlock.module.scss";

export function SwatchesBlock({ title, items }) {
  return (
    <section>
      <h3>{title}</h3>
      <div className={s.swatches}>
        {items.map(([c, n]) => (
          <div className={s.swatch} key={c}>
            <b style={{ background: c }} />
            {c.toUpperCase()}
            <br />
            {n}
          </div>
        ))}
      </div>
    </section>
  );
}
