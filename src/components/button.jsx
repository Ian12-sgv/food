import React from "react";

function Button(props) {
  return (
    <div className="button-general">
      <img src={props.button} className="img-button" />
    </div>
  );
}

export default Button;
