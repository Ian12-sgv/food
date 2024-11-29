import React from "react";
import DashboardTitulo from "./components/dashboardTitulo";
import MediunDashboard from "./components/mediunDashboard";
import ContentDashboard from "./components/ContentDashboard";
import SiderBarDasboardTop from "./components/SiderBarDasboardTop";
import SiderBarDasboardDown from "./components/SiderBarDasboardDown";

import "./styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="contenedor-dashboard">
        {/* contenedor ajustable */}
        <div className="dashboard-content">
          <div className="titulo-dashboard">
            <DashboardTitulo />
          </div>
          <div className="mediun-dashboard">
            <MediunDashboard />
          </div>
          <div className="content-dashboard">
            <ContentDashboard />
          </div>
        </div>
        <div className="siderbar">
          <div className="siderbar-top">
            <SiderBarDasboardTop />
          </div>
          <div className="siderbar-down">
            {" "}
            <SiderBarDasboardDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
