import React from "react";

function Components_payment(props) {
  return (
    <div className="payment_Components">
      <div className="payment-label">
        <label>{props.dato}</label>
      </div>

      <div className="payment-input">
        <input
          className="input-payment"
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Components_payment;
