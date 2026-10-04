import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useContent } from "./useContent.js";
import { useMedia } from "./useMedia.js";

const DUR = 600;

export function buildSpreads(t, projects) {
  const spreads = [
    { id: "index", title: t("index.label"), left: [{ type: "index" }], right: [{ type: "guide" }] },
    { id: "prologue", title: t("index.prologue"), left: [{ type: "prologue" }], right: [{ type: "hobbies" }] },
  ];
  projects.forEach((p) => {
    p.spreads.forEach((s, k) => {
      const lead =
        k === 0
          ? { type: "chapterHead", p }
          : { type: "label", text: t("chapterSpread", { n: p.num, title: s.title }) };
      spreads.push({ id: `${p.slug}-${k}`, title: `${p.title}. ${s.title}`, left: [lead, ...s.left], right: s.right });
    });
  });
  spreads.push({ id: "contact", title: t("index.colophon"), left: [{ type: "contact" }], right: [{ type: "end" }] });
  return spreads;
}

export function useBook() {
  const { t } = useTranslation();
  const { projects } = useContent();
  const spreads = useMemo(() => buildSpreads(t, projects), [t, projects]);
  const indexIdx = useMemo(() => spreads.findIndex((s) => s.id === "index"), [spreads]);
  const wide = useMedia("(min-width: 900px)");
  const reduce = useMedia("(prefers-reduced-motion: reduce)");
  const canFlip = wide && !reduce;

  const [currentPageIndex, setCurrentPageIndex] = useState(-1); // -1 closed
  const [flipState, setFlipState] = useState(null);
  const timer = useRef(null);
  const bookRef = useRef(null);
  const busy = !!flipState;

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (currentPageIndex < 0 || window.scrollY === 0) return;
    bookRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [currentPageIndex]);

  const goToPage = useCallback(
    (to) => {
      if (busy || to < -1 || to >= spreads.length || to === currentPageIndex) return;
      if (!canFlip) {
        setCurrentPageIndex(to);
        return;
      }
      setFlipState({ dir: to > currentPageIndex ? "next" : "prev", to });
      timer.current = setTimeout(() => {
        setCurrentPageIndex(to);
        setFlipState(null);
      }, DUR);
    },
    [busy, spreads.length, currentPageIndex, canFlip]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goToPage(currentPageIndex + 1);
      if (e.key === "ArrowLeft") goToPage(currentPageIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goToPage, currentPageIndex]);

  const targetPageIndex = flipState ? flipState.to : currentPageIndex;
  const closed = targetPageIndex === -1;
  const leftPageIndex = flipState?.dir === "prev" ? flipState.to : currentPageIndex;
  const rightPageIndex = flipState?.dir === "next" ? flipState.to : currentPageIndex;

  return { spreads, indexIdx, canFlip, currentPageIndex, flipState, busy, goToPage, targetPageIndex, closed, leftPageIndex, rightPageIndex, bookRef };
}
