import React from "react";

function Components_card(props) {
  return (
    <div className="card-content">
      <img src={props.url} className="plato" />

      <div className="card-body">
        <p>
          <strong>{props.titulo}</strong>
        </p>
        <p>${props.precio}</p>
        <p>
          {props.cantidad}
          {props.plato}
        </p>
      </div>
    </div>
  );
}

export default Components_card;
