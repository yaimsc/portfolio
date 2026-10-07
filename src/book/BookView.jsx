import { useTranslation } from "react-i18next";
import { CoverPage } from "./pages/CoverPage.jsx";
import { Page } from "./pages/Page.jsx";
import { Leaf } from "./leaf/Leaf.jsx";
import page from "./pages/Page.module.scss";
import s from "./BookView.module.scss";

export function BookView({
  canFlip,
  closed,
  leftPageIndex,
  rightPageIndex,
  flipState,
  currentPageIndex,
  spreads,
  goToPage,
  bookRef,
  targetPageIndex,
  indexIdx,
  busy,
}) {
  const { t } = useTranslation();
  const ghost = () => <div className={`${page.page} ${s.ghost}`} />;
  const pageAt = (pageIndex, side, live = false) => {
    if (pageIndex < 0) {
      return side === "right" ? <CoverPage onOpen={live ? () => goToPage(0) : undefined} /> : ghost();
    }
    return <Page blocks={spreads[pageIndex][side]} side={side} n={side === "left" ? pageIndex * 2 + 2 : pageIndex * 2 + 3} />;
  };

  return (
    <div className={s.book3d} ref={bookRef}>
      {targetPageIndex > 0 && (
        <button
          className={s.bookmark}
          aria-label={t("backToIndex")}
          title={t("backToIndex")}
          onClick={() => goToPage(indexIdx)}
        />
      )}

      <div
        className={`${s.pages} ${canFlip ? s.flipmode : s.fade} ${closed ? s.closed : ""}`}
        key={canFlip ? "flip" : currentPageIndex}
      >
        {pageAt(leftPageIndex, "left")}
        {pageAt(rightPageIndex, "right", !flipState)}
        <Leaf flipState={flipState} currentPageIndex={currentPageIndex} spreads={spreads} goToPage={goToPage} />
        {/* Zonas de paso en los cantos (móvil ocultas, la barra fija manda allí) */}
        {currentPageIndex > -1 && (
          <button
            type="button"
            className={`${s.edge} ${s.edgeLeft}`}
            data-tip={currentPageIndex === 0 ? t("close") : t("previous")}
            onClick={() => goToPage(currentPageIndex - 1)}
            disabled={busy}
            aria-label={currentPageIndex === 0 ? t("close") : t("previous")}
          />
        )}
        {currentPageIndex < spreads.length - 1 && (
          <button
            type="button"
            className={`${s.edge} ${s.edgeRight}`}
            data-tip={currentPageIndex === -1 ? t("open") : t("next")}
            onClick={() => goToPage(currentPageIndex + 1)}
            disabled={busy}
            aria-label={currentPageIndex === -1 ? t("open") : t("next")}
          />
        )}
      </div>

      <div className={s.controls}>
        <button
          className="btn btnSecondary"
          onClick={() => goToPage(currentPageIndex - 1)}
          disabled={currentPageIndex === -1 || busy}
          aria-label={currentPageIndex === 0 ? t("close") : t("previous")}
          title={currentPageIndex === 0 ? t("close") : t("previous")}
        >
          {currentPageIndex === 0 ? t("close") : t("previous")}
        </button>
        <button
          className={`btn btnSecondary ${currentPageIndex > indexIdx ? "" : s.hidden}`}
          onClick={() => goToPage(indexIdx)}
          disabled={busy}
          aria-label={t("backToIndex")}
          title={t("backToIndex")}
        >
          {t("index.label")}
        </button>
        <button
          className={`btn btnSecondary ${s.next}`}
          onClick={() => goToPage(currentPageIndex + 1)}
          disabled={currentPageIndex === spreads.length - 1 || busy}
          aria-label={currentPageIndex === -1 ? t("open") : t("next")}
          title={currentPageIndex === -1 ? t("open") : t("next")}
        >
          {currentPageIndex === -1 ? t("open") : t("next")}
        </button>
      </div>
      <p className={`mono ${s.hint}`}>
        {currentPageIndex < 0
          ? t("hintOpen")
          : t("hintPage", { title: spreads[currentPageIndex].title })}
      </p>
    </div>
  );
}
