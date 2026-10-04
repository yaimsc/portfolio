import { Page } from "../pages/Page.jsx";
import { CoverPage } from "../pages/CoverPage.jsx";
import page from "../pages/Page.module.scss";
import bookView from "../BookView.module.scss";
import s from "./Leaf.module.scss";

// La página fantasma (la del hueco que deja el giro) la declara BookView, que es quien
// controla el contenedor .pages y el modo fundido.
const Ghost = () => <div className={`${page.page} ${bookView.ghost}`} />;

export function Leaf({ flipState, currentPageIndex, spreads, goToPage }) {
  if (!flipState) return null;
  const pageAt = (pageIndex, side, live = false) => {
    if (pageIndex < 0) {
      return side === "right" ? <CoverPage onOpen={live ? () => goToPage(0) : undefined} /> : <Ghost />;
    }
    return <Page blocks={spreads[pageIndex][side]} side={side} n={side === "left" ? pageIndex * 2 + 2 : pageIndex * 2 + 3} />;
  };
  return (
    <div className={`${s.leaf} ${s[flipState.dir]}`}>
      <div className={s.face}>
        {flipState.dir === "next" ? pageAt(currentPageIndex, "right") : pageAt(currentPageIndex, "left")}
      </div>
      <div className={`${s.face} ${s.back}`}>
        {flipState.dir === "next" ? pageAt(flipState.to, "left") : pageAt(flipState.to, "right")}
      </div>
    </div>
  );
}
