import React from "react";

import "../styles/mediunDashboard.css";

function SumaryCard(props) {
  return (
    <>
      <div className="SumaryCard">
        <div className="SumaryCard-content">
          <div className="Status-card">
            <img src={props.icon1} />
            <h3 className="data-revenue">
              <h3>{props.data}</h3>
              <h3 className="down">{props.data2}</h3>
            </h3>
            <img src={props.icon2} />
          </div>
          <div className="content-revenue">
            <div className="revenue">
              <h2>{props.subdata}</h2>
              <h5>{props.subdata2}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SumaryCard;
