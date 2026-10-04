import { Divider } from "./Divider.jsx";
import s from "./StepsBlock.module.scss";

export function StepsBlock({ title, steps }) {
  return (
    <section>
      <h3>{title}</h3>
      <ol className={s.steps}>
        {steps.map((step, k) => (
          <li key={step.title}>
            {k > 0 && <Divider />}
            <div className={s.step}>
              <span className={s.n}>{String(k + 1).padStart(2, "0")}</span>
              <div>
                <strong>{step.title}</strong>
                {step.meta && <span className={s.when}>{step.meta}</span>}
                <p>{step.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
