import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Chapter from "./pages/Chapter.jsx";

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capitulo/:slug" element={<Chapter />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="footer"><div className="wrap">© 2026 Yaiza Muñoz</div></footer>
    </>
  );
}
