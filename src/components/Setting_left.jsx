import React, { useState } from "react";
import Setting_left_component from "./setting_left_component";
import heard from "../assets/svg/heard.svg";
import restauranteIcon from "../assets/svg/restauranteIcon.svg";
import managment from "../assets/svg/managment.svg";
import noti from "../assets/svg/noti.svg";
import security from "../assets/svg/security.svg";
import about from "../assets/svg/about.svg";
import reactangulo from "../assets/svg/reactangulo.svg";
import { Link } from "react-router-dom";

import "../styles/settings_left.css";

function Setting_left() {
  const [color, setColor] = useState([
    false,
    false,
    true,
    false,
    false,
    false,
    false,
  ]);

  const handClick = (index) => {
    const updatedColor = color.map((_, i) => i === index);
    setColor(updatedColor);
  };
  return (
    <div className="Setting_left">
      <div className="Setting_left_content">
        <div className="apariencia">
          <Link
            to=""
            onClick={() => handClick(0)}
            style={{
              color: color[0] ? "#ea7c69" : "white",
              backgroundColor: color[0] ? "#EA7C6942" : "#1f1d2b",
              border: color[0] ? "none" : "none",
              borderRadius: color[0] ? "0px" : "0px",
              textDecoration: color[0] ? "none" : "none",
            }}
          >
            <Setting_left_component
              img={heard}
              title="Appereance"
              subtitle={
                <span
                  style={{
                    color: color[0] ? "white" : "white",
                  }}
                >
                  Dark and Light mode, Font size
                </span>
              }
              barra={color[0] ? reactangulo : null}
            />
          </Link>
        </div>

        <div className="restaurante">
          {" "}
          <Link
            to=""
            onClick={() => handClick(1)}
            style={{
              color: color[1] ? "#ea7c69" : "white",
              backgroundColor: color[1] ? "#EA7C6942" : "#1f1d2b",
              border: color[1] ? "none" : "none",
              borderRight: color[1] ? "3px solid #ea7c69" : "none",
              borderRadius: color[1] ? "0px" : "0px",
              textDecoration: color[1] ? "none" : "none",
            }}
          >
            <Setting_left_component
              img={restauranteIcon}
              title="Your Restaurant"
              subtitle={
                <span style={{ color: color[0] ? "white" : "white" }}>
                  Dark and Light mode, Font size
                </span>
              }
              barra={color[1] ? reactangulo : null}
            />
          </Link>
        </div>

        <div className="managment">
          <Link
            to=""
            onClick={() => handClick(2)}
            style={{
              color: color[2] ? "#ea7c69" : "white",
              backgroundColor: color[2] ? "#EA7C6942" : "#1f1d2b",
              border: color[2] ? "none" : "none",
              borderRight: color[2] ? "3px solid #ea7c69" : "none",
              borderRadius: color[2] ? "0px" : "0px",
              textDecoration: color[2] ? "none" : "none",
            }}
          >
            <Setting_left_component
              img={managment}
              title="Products Management"
              subtitle={
                <span style={{ color: color[2] ? "white" : "white" }}>
                  Manage your product, pricing
                </span>
              }
              barra={color[2] ? reactangulo : null}
            />
          </Link>
        </div>
        <div className="noti">
          <Link
            to=""
            onClick={() => handClick(3)}
            style={{
              color: color[3] ? "#ea7c69" : "white",
              backgroundColor: color[3] ? "#EA7C6942" : "#1f1d2b",
              border: color[3] ? "none" : "none",
              borderRight: color[3] ? "3px solid #ea7c69" : "none",
              borderRadius: color[3] ? "0px" : "0px",
              textDecoration: color[3] ? "none" : "none",
            }}
          >
            <Setting_left_component
              img={noti}
              title="Notifications"
              subtitle={
                <span style={{ color: color[0] ? "white" : "white" }}>
                  Customize your notifications
                </span>
              }
              barra={color[3] ? reactangulo : null}
            />
          </Link>
        </div>
        <div className="security">
          <Link
            to=""
            onClick={() => handClick(4)}
            style={{
              color: color[4] ? "#ea7c69" : "white",
              backgroundColor: color[4] ? "#EA7C6942" : "#1f1d2b",
              border: color[4] ? "none" : "none",
              borderRight: color[4] ? "3px solid #ea7c69" : "none",
              borderRadius: color[4] ? "0px" : "0px",
              textDecoration: color[4] ? "none" : "none",
            }}
          >
            <Setting_left_component
              img={security}
              title="Security"
              subtitle={
                <span style={{ color: color[0] ? "white" : "white" }}>
                  Configure Password, PIN, etc
                </span>
              }
              barra={color[4] ? reactangulo : null}
            />
          </Link>
        </div>
        <div className="security">
          <Link
            to=""
            onClick={() => handClick(5)}
            style={{
              color: color[5] ? "#ea7c69" : "white",
              backgroundColor: color[5] ? "#EA7C6942" : "#1f1d2b",
              border: color[5] ? "none" : "none",
              borderRight: color[5] ? "3px solid #ea7c69" : "none",
              borderRadius: color[5] ? "0px" : "0px",
              textDecoration: color[5] ? "none" : "none",
            }}
          >
            <Setting_left_component
              img={security}
              title="Security"
              subtitle={
                <span style={{ color: color[0] ? "white" : "white" }}>
                  Configure Password, PIN, etc
                </span>
              }
              barra={color[5] ? reactangulo : null}
            />
          </Link>
        </div>
        <div className="about">
          <Link
            to=""
            onClick={() => handClick(6)}
            style={{
              color: color[6] ? "#ea7c69" : "white",
              backgroundColor: color[6] ? "#EA7C6942" : "#1f1d2b",
              border: color[6] ? "none" : "none",
              borderRight: color[6] ? "3px solid #ea7c69" : "none",
              borderRadius: color[6] ? "0px" : "0px",
              textDecoration: color[6] ? "none" : "none",
            }}
          >
            <Setting_left_component
              img={about}
              title="About Us"
              subtitle={
                <span style={{ color: color[0] ? "white" : "white" }}>
                  Find out more about Posly
                </span>
              }
              barra={color[6] ? reactangulo : null}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Setting_left;
