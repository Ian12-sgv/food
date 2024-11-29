import React from "react";
import "../styles/filter.css";

function Titulo_content_dashboard(props) {
  return (
    <>
      <div className="title-header">
        <div className="title-content-header">
          <h2>{props.titulo}</h2>
        </div>
        <div className="filter">
          <div className="filter-content">
            <img src={props.filter} />
            <p className="filter-orden">{props.filterOrden}</p>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content-customer">{props.customer}</div>
        <div>{props.menu}</div>
        <div>{props.totalPyment}</div>
        <div>{props.Status}</div>
      </div>
    </>
  );
}

export default Titulo_content_dashboard;
