import React from "react";

function Card_data(props) {
  return (
    <div className="payment_Components-card">
      <div className="payment-label">
        <label>{props.dato}</label>
      </div>

      <div className="payment-input-card">
        <input
          className="input-data-card-2"
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Card_data;
