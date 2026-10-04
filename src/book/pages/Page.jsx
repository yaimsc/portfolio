import { Block } from "../blocks/Block.jsx";
import s from "./Page.module.scss";

export function Page({ blocks, side, n }) {
  return (
    <div className={`${s.page} ${s[side]}`}>
      {blocks.map((block, blockIndex) => (
        <Block b={block} key={blockIndex} />
      ))}
      <p className={s.folio}>— {n} —</p>
    </div>
  );
}
