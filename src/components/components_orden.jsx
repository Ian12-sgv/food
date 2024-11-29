import React from "react";

function Components_orden(props) {
  let total = props.cantidad * props.precio;
  return (
    <div className="content-uno">
      <div className="name">
        <img src={props.url} className="plato-content" />

        <div className="name-content">
          <p className="titulo">{props.titulo}</p>
          <p className="money">${props.precio}</p>
        </div>

        <div className="qty-content">
          <div className="qty-2">{props.cantidad}</div>
          <div className="price-content">${total}</div>
        </div>
      </div>
      <div className="placeholder">
        <input type="text" placeholder={props.placeholder} className="input" />
        <img src={props.borrar} className="delete" />
      </div>
    </div>
  );
}

export default Components_orden;
