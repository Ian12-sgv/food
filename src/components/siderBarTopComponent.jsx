import React from "react";
import "../styles/siderBarTop.css";
function SiderBarTopComponent(props) {
  return (
    <div>
      <div className="siderBarTopContent">
        <div className="siderBarTop-order">
          <img src={props.platillo} className="siderBarTop-platillo" />
          <div className="siderBarTop-nameEat">
            <div>{props.nameEat}</div>

            <div>{props.numbreOrden}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiderBarTopComponent;
