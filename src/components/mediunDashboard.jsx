import React from "react";
import SumaryCard from "./SumaryCard";
import dollar2 from "../assets/svg/dollar2.svg";
import flechatop2 from "../assets/svg/flechatop2.svg";
import custom from "../assets/svg/custom.svg";
import dowflecha from "../assets/svg/dowflecha.svg";
import torden from "../assets/svg/torden.svg";
import "../styles/mediunDashboard.css";

function MediunDashboard() {
  const estilo = {
    color: "red",
  };
  return (
    <div>
      <div className="mediun">
        <div className="mediun-card">
          <div className="SumaryCard1">
            <SumaryCard
              icon1={dollar2}
              data="+34.40%"
              icon2={flechatop2}
              subdata="$10,243.00"
              subdata2="Total Revenue"
            />
          </div>

          <div className="SumaryCard2">
            <SumaryCard
              icon1={torden}
              data2="-12.40%"
              icon2={dowflecha}
              subdata="23,456"
              subdata2="Total Dish Ordered"
            />
          </div>

          <div className="SumaryCard3">
            <SumaryCard
              icon1={custom}
              data="+2.40%"
              icon2={flechatop2}
              subdata="1,234"
              subdata2="Total Customer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediunDashboard;
