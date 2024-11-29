import "./App.css";
import Barradenavegacion from "./components/barraDeNavegacion";
import Card from "./components/card";
import Orden from "./components/orden";

function Layout() {
  return (
    <div className="Layout">
      <div className="container">
        <div className="content-left">
          <Card />
        </div>
        <div className="content-right">
          <Orden />
        </div>
      </div>
    </div>
  );
}

export default Layout;
