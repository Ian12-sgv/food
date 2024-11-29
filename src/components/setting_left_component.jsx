import React from "react";
import "../styles/settings_left.css";

function Setting_left_component(props) {
  return (
    <div className="setting-left-component-content">
      <div className="setting-left-content-content">
        <img src={props.img} className="setting-left-img" />
        <div className="setting-left-body">
          {" "}
          <div className="setting-left-title">
            <h2>{props.title}</h2>
          </div>
          <div className="setting-left-subtitle">
            <p>{props.subtitle}</p>
          </div>
        </div>

        <img src={props.barra} className="setting-left-img-barra" />
      </div>
    </div>
  );
}

export default Setting_left_component;
