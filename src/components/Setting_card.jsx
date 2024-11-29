import React from "react";
import "../styles/settings_rigth.css";

import edit from "../assets/svg/edit.svg";
function Setting_card(props) {
  return (
    <>
      <div className="setting-card-content">
        <div className="setting-card-colums">
          <div className="card-setting-2">
            <div className="card-setting-content">
              <img src={props.icon} className="icon-setting" />
              <h3> {props.title}</h3>
              <div className="price-setting">
                <div>{props.price}</div>
                <div>{props.cantidad}</div>
              </div>
              <img src={edit} className="edit-setting" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting_card;
