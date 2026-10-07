import { BookView } from "./BookView.jsx";

// El estado del libro lo gestiona App y llega aquí como prop "state".
// Este componente solo vuelca ese estado en la vista.
export default function Book({ state }) {
  return (
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
  );
}