import { asset } from "../asset.js";

// Separador con malla de punto
export default function Divider() {
  return <div className="divider" aria-hidden="true" style={{ backgroundImage: `url(${asset("punto.svg")})` }} />;
}
