import Doodle from "../../components/Doodle.jsx";
import s from "./Divider.module.scss";

export function Divider() {
  return (
    <div className={s.divider} aria-hidden="true">
      <span />
      <Doodle name="sparkle" size={16} />
      <span />
    </div>
  );
}
