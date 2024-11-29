import { Componetes_de_navegacion } from "./Icons";
import "../styles/navegacion.css";
function Datos_de_navegacion() {
  const Items = Componetes_de_navegacion.map((Componetes_de_navegacion) => (
    <li key={Componetes_de_navegacion.name}>{Componetes_de_navegacion.icon}</li>
  ));
  return <ul className="componentes_de_navegacion">{Items}</ul>;
}
export default Datos_de_navegacion;
