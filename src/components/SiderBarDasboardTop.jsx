import React from "react";
import SiderBarTopComponent from "./siderBarTopComponent";
import arrowDown from "../assets/svg/arrowDown.svg";
import plato1 from "../assets//img/plato1.png";
import plato2 from "../assets//img/plato2.png";
import plato3 from "../assets//img/plato3.png";
import Button from "./button";
import view from "../assets/svg/view.svg";
import "../styles/siderBarTop.css";
function SiderBarDasboardTop() {
  return (
    <>
      <div className="siderbar-top">
        <div className="siderbar-top-content">
          <div className="siderbar-top-header">
            <div className="siderbar-Most">
              <h2>Most popular</h2>
              <div className="siderbar-Today-arrow">
                <div className="dine">
                  <select className="dine-select">
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>Tomorrow</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="siderbar-body">
            <div className="siderbar-platillo">
              <SiderBarTopComponent
                platillo={plato1}
                nameEat="Spicy seasoned seafood noodles"
                numbreOrden="200 dishes ordered"
              />
              <SiderBarTopComponent
                platillo={plato2}
                nameEat="Salted pasta with mushroom sauce"
                numbreOrden="120 dishes ordered"
              />
              <SiderBarTopComponent
                platillo={plato3}
                nameEat="Beef dumpling in hot and sour soup"
                numbreOrden="80 dishes ordered"
              />
            </div>
            <div className="siderbar-button">
              <Button button={view} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiderBarDasboardTop;
