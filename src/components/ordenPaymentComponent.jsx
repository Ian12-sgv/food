import React from "react";
import "../styles/modal2.css";

function OrdenPaymentComponent(props) {
  return (
    <div className=" title-component">
      {" "}
      <h2 className="title-pay">{props.titulo}</h2>
      <p className="sub-pay">{props.subtitulo}</p>
    </div>
  );
}

export default OrdenPaymentComponent;
