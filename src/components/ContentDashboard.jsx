import React from "react";
import "../styles/contentDashboard.css";
import Titulo_content_dashboard from "./titulo_content_dashboard";
import Content_dashboard_mediu from "./content_dashboard_mediu";
import filter from "../assets/svg/filter.svg";
import luffy from "../assets/svg/luffy.svg";
import zoro from "../assets/svg/zoro.svg";
import sanji from "../assets/svg/sanji.svg";
import jymbe from "../assets/svg/jymbe.svg";
import nami from "../assets/svg/nami.svg";
import robin from "../assets/svg/robin.svg";
import completed from "../assets/svg/completed.svg";
import preparing from "../assets/svg/preparing.svg";
import pending from "../assets/svg/pending.svg";

function ContentDashboard() {
  return (
    <>
      <div className="ContentDashboard-container">
        <div className="ContentDashboard">
          <div className="titulo-dashboard-content">
            <Titulo_content_dashboard
              titulo="Order Report"
              filter={filter}
              filterOrden="Filter Order"
              customer="Customer"
              menu="Menu"
              totalPyment="Total Payment"
              Status="Status"
            />
          </div>
          <div className="titulo-dashboard-content-2">
            <div className="content-container-dashboard">
              <div className="contendero-contenido">
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={luffy}
                    name="Mokey D' Lufy"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={zoro}
                    name="Ronoroa Zoro"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={preparing}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={sanji}
                    name="Vinsmoke Sanji"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={pending}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={jymbe}
                    name="Triton jymbe"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={nami}
                    name="mandarina nami"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={luffy}
                    name="Mokey D' Lufy"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={zoro}
                    name="Ronoroa Zoro"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={preparing}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={sanji}
                    name="Vinsmoke Sanji"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={pending}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={jymbe}
                    name="Triton jymbe"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>
                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={nami}
                    name="mandarina nami"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>

                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={nami}
                    name="mandarina nami"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>

                <div className="Content_dashboard_mediu-1">
                  <Content_dashboard_mediu
                    cliente={nami}
                    name="mandarina nami"
                    menu="Spicy seasoned seafood noodles "
                    TotalPayment="$125"
                    status={completed}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentDashboard;
