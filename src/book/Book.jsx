import { BookCtx } from "./ctx.js";
import { useBook } from "../hooks/useBook.js";
import { BookView } from "./BookView.jsx";

export default function Book() {
  const state = useBook();
  return (
    <BookCtx.Provider value={{ goTo: state.goToPage, spreads: state.spreads, indexIdx: state.indexIdx }}>
      <BookView
        canFlip={state.canFlip}
        closed={state.closed}
        leftPageIndex={state.leftPageIndex}
        rightPageIndex={state.rightPageIndex}
        flipState={state.flipState}
        currentPageIndex={state.currentPageIndex}
        spreads={state.spreads}
        goToPage={state.goToPage}
        bookRef={state.bookRef}
        targetPageIndex={state.targetPageIndex}
        indexIdx={state.indexIdx}
        busy={state.busy}
      />
    </BookCtx.Provider>
  );
}
