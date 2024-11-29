import React, { useState } from "react";
import Page from "./page";
import { Link } from "react-router-dom";
import "../styles/settings_rigth.css";
function Setting_header(props) {
  const [color, setColor] = useState([true, false, false, false, false, false]);

  const handClick = (index) => {
    const updatedColor = color.map((_, i) => i === index);
    setColor(updatedColor);
  };
  return (
    <>
      <div className="title-header-setting">
        <div className="title-content-header-setting">
          <h2>{props.titulo}</h2>
        </div>
        <div className="filter-setting">
          <div className="filter-content-setting">
            <img src={props.filter} />
            <p className="filter-orden-setting">{props.filterOrden}</p>
          </div>
        </div>
      </div>
      <div className="page-setting">
        <div className="page-content">
          <Link
            to=""
            className="hot"
            onClick={() => handClick(0)}
            style={{
              color: color[0] ? "#ea7c69" : "white",
              borderBottom: color[0] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Hot Dishes" />
          </Link>
          <Link
            to="#"
            className="Cold"
            onClick={() => handClick(1)}
            style={{
              color: color[1] ? "#ea7c69" : "white",
              borderBottom: color[1] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Cold Dishes" />
          </Link>
          <Link
            to=""
            className="Soup"
            onClick={() => handClick(2)}
            style={{
              color: color[2] ? "#ea7c69" : "white",
              borderBottom: color[2] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Soup" />
          </Link>
          <Link
            to=""
            className="Grill"
            onClick={() => handClick(3)}
            style={{
              color: color[3] ? "#ea7c69" : "white",
              borderBottom: color[3] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Grill" />
          </Link>
          <Link
            to=""
            className="Appetizer"
            onClick={() => handClick(4)}
            style={{
              color: color[4] ? "#ea7c69" : "white",
              borderBottom: color[4] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Appetizer" />
          </Link>
          <Link
            to=""
            className="Dessert"
            onClick={() => handClick(5)}
            style={{
              color: color[5] ? "#ea7c69" : "white",
              borderBottom: color[5] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Dessert" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Setting_header;
