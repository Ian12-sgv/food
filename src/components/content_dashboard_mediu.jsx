import React from "react";
import "../styles/mediun.css";

function Content_dashboard_mediu(props) {
  return (
    <div className="content-dashboard-mediu-container">
      <div className="order-report-dashboard">
        <div className="icon-name-dashboard">
          <div className="icon-dashboard-mediun">
            <img src={props.cliente} />
          </div>
          <div className="name-dashboard-mediu">{props.name}</div>
        </div>

        <div className="menu">{props.menu}</div>
        <div className="TotalPayment">{props.TotalPayment}</div>
        <div className="status-dashboard-mediun">
          <img src={props.status} />
        </div>
      </div>
    </div>
  );
}

export default Content_dashboard_mediu;
