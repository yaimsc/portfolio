import s from "./ExampleBlock.module.scss";

export function ExampleBlock({ text }) {
  return <p className={s.example}>{text}</p>;
}
