import React from "react";
import arrowDown from "../assets/svg/arrowDown.svg";
import circlecirculosider from "../assets/svg/circlecirculosider.svg";
import decoration1 from "../assets/svg/decoration1.svg";
import decoration2 from "../assets/svg/decoration2.svg";
import decoration3 from "../assets/svg/decoration3.svg";
import DoughnutChart from "./dashboard/Dona";

import "../styles/saderBarDown.css";
function SiderBarDasboardDown() {
  return (
    <div className="siderbar-down">
      <div className="siderbar-down-content">
        <div className="siderbar-down-header">
          <div className="siderbar-Most-down">
            <h2 className="siderbar-MostOrden">Most Type of Order</h2>

            <div className="dine">
              <select className="dine-select">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Tomorrow</option>
              </select>
            </div>
          </div>
          <div className="circulo">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiderBarDasboardDown;
