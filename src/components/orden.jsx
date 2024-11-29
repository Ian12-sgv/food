import React, { useState } from "react";
import { CustomScroll } from "react-custom-scroll";
import plato1 from "../assets//img/plato1.png";
import plato2 from "../assets//img/plato2.png";
import plato3 from "../assets//img/plato3.png";
import plato4 from "../assets//img/plato4.png";
import borrar from "../assets//img/borrar.png";
import Components_orden from "./components_orden";
import continua from "../assets//svg/continua.svg";
import "../styles/orden.css";

import PortalExample from "./modalPortal";
import { Link } from "react-router-dom";
function Orden() {
  const [color, setColor] = useState([true, false, false]);

  const handClick = (index) => {
    const updatedColor = color.map((_, i) => i === index);
    setColor(updatedColor);
  };
  return (
    <div className="contenedor-orden">
      <div className="header">
        {/* acomodar */}
        <div className="selector">
          <div>
            <Link
              to=""
              className="dinein"
              onClick={() => handClick(0)}
              style={{
                color: color[0] ? "white" : "#ea7c69",
                backgroundColor: color[0] ? "#ea7c69" : "#1f1d2b",
              }}
            >
              Dine in
            </Link>
          </div>

          <div>
            {" "}
            <Link
              to=""
              className="aparte"
              onClick={() => handClick(1)}
              style={{
                color: color[1] ? "white" : "#ea7c69",
                backgroundColor: color[1] ? "#ea7c69" : "#1f1d2b",
              }}
            >
              To Go
            </Link>
          </div>

          <div>
            <Link
              to=""
              className="aparte"
              onClick={() => handClick(2)}
              style={{
                color: color[2] ? "white" : "#ea7c69",
                backgroundColor: color[2] ? "#ea7c69" : "#1f1d2b",
              }}
            >
              Delivery
            </Link>
          </div>
        </div>

        <div className="titel">
          <h2 className="item">Item</h2>
          <h2 className="qty">Qty</h2>
          <h2 className="price">Price</h2>
        </div>
      </div>
      <div className="contenedor">
        <div className="content">
          <div className="content-component-orden">
            <div className="primer_componente">
              <Components_orden
                url={plato1}
                borrar={borrar}
                titulo="Spicy seasoned sea..."
                placeholder="Please, just a little bit specy only"
                precio={2.29}
                cantidad={2}
              />
            </div>

            <div className="segundo_componente">
              <Components_orden
                url={plato2}
                borrar={borrar}
                titulo="Salted pasta with mu..."
                placeholder="Please, just a little bit specy only"
                precio={2.69}
                cantidad={2}
              />
            </div>
            <div className="tercer_componente">
              <Components_orden
                url={plato3}
                borrar={borrar}
                titulo="Spicy instead noodle..."
                placeholder="Please, just a little bit specy only"
                precio={3.49}
                cantidad={2}
              />
            </div>
            <div className="cuarto_componente">
              <Components_orden
                url={plato4}
                borrar={borrar}
                titulo="Healthy noodle with..."
                placeholder="Please, just a little bit specy only"
                precio={3.29}
                cantidad={2}
              />
            </div>
            <div className="cuarto_componente">
              <Components_orden
                url={plato4}
                borrar={borrar}
                titulo="Healthy noodle with..."
                placeholder="Please, just a little bit specy only"
                precio={3.29}
                cantidad={2}
              />
            </div>
            <div className="cuarto_componente">
              <Components_orden
                url={plato4}
                borrar={borrar}
                titulo="Healthy noodle with..."
                placeholder="Please, just a little bit specy only"
                precio={3.29}
                cantidad={2}
              />
            </div>

            <div className="cuarto_componente">
              <Components_orden
                url={plato4}
                borrar={borrar}
                titulo="Healthy noodle with..."
                placeholder="Please, just a little bit specy only"
                precio={3.29}
                cantidad={2}
              />
            </div>
            <div className="cuarto_componente">
              <Components_orden
                url={plato4}
                borrar={borrar}
                titulo="Healthy noodle with..."
                placeholder="Please, just a little bit specy only"
                precio={3.29}
                cantidad={2}
              />
            </div>
            <div className="cuarto_componente">
              <Components_orden
                url={plato4}
                borrar={borrar}
                titulo="Healthy noodle with..."
                placeholder="Please, just a little bit specy only"
                precio={3.29}
                cantidad={2}
              />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container-footer-payment">
            <div className="container-footer-data">
              {" "}
              <div>
                <div className="discount1">Discount</div>

                <div className="sub-total">Sub total</div>
              </div>
              <div>
                <div className="discount-price">$0</div>
                <div className="sub-total-price">$21,03</div>
              </div>
            </div>

            <button className="payment-button-2">
              <PortalExample botonElBueno={continua} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orden;
