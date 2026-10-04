import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./LanguageToggle.module.scss";

const LANGS = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

// Selector de idioma. El menú lo dibujamos nosotros porque el de un <select> nativo lo
// pinta el sistema y no se puede estilar. Al abrirse, el foco va al idioma actual.
export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage?.startsWith("en") ? "en" : "es";

  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const choose = (code) => {
    i18n.changeLanguage(code);
    close();
  };

  // Clic fuera = cerrar
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  // Al abrir, enfocar el idioma que se está leyendo
  useEffect(() => {
    if (open) menuRef.current?.querySelector('[aria-checked="true"]')?.focus();
  }, [open]);

  const onTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  };

  // Las opciones son botones de verdad, así que solo hay que mover el foco entre ellos
  const onMenuKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "Tab") {
      setOpen(false);
      return;
    }
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = [...e.currentTarget.querySelectorAll("button")];
    const i = items.indexOf(document.activeElement);
    const next = e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
    items[next].focus();
  };

  return (
    <div className={s.langToggle} ref={wrapRef}>
      <button
        ref={triggerRef}
        type="button"
        className={s.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKeyDown}
      >
        {LANGS.find((l) => l.code === current).label}
        <svg className={s.chevron} width="8" height="5" viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className={s.menu} role="menu" aria-label="Idioma / Language" ref={menuRef} onKeyDown={onMenuKeyDown}>
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitemradio"
              aria-checked={l.code === current}
              className={`${s.opt} ${l.code === current ? s.current : ""}`}
              onClick={() => choose(l.code)}
            >
              {l.label}
              {l.code === current && (
                <svg width="9" height="7" viewBox="0 0 10 8" aria-hidden="true">
                  <path d="M1 4l2.5 2.5L9 1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;
