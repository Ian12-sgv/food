import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import casa from "../assets/svg/casa.svg";
import home7 from "../assets/svg/home7.svg";
import restautante from "../assets/svg/restautante.svg";
import discount from "../assets/svg/discount.svg";
import dashboard from "../assets/svg/dashboard.svg";
import dashboard2 from "../assets/svg/dashboard2.svg";
import mensaje from "../assets/svg/mensaje.svg";
import setting from "../assets/svg/setting.svg";
import settings2 from "../assets/svg/settings2.svg";
import logout from "../assets/svg/logout.svg";
import notification from "../assets/svg/notification.svg";

import "../styles/navegacion.css";

const Componetes_de_navegacion = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <ul className="menu-navegacion">
          <li>
            <NavLink className="menu-link" to="/home">
              <img src={restautante} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              {activeLink === "/" ? (
                <img src={home7} alt="Imagen Activa" className="home" />
              ) : (
                <img src={casa} alt="Imagen Inactiva" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) => (isActive ? "activo2" : "noActivo")}
              to="/discount"
            >
              <img src={discount} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              {activeLink === "/dashboard" ? (
                <img src={dashboard2} alt="Imagen Activa" />
              ) : (
                <img src={dashboard} alt="Imagen Inactiva" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) => (isActive ? "activo4" : "noActivo")}
              to="/message"
            >
              <img src={mensaje} />
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) => (isActive ? "activo5" : "noActivo")}
              to="/notification"
            >
              <img src={notification} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              {activeLink === "/settings" ? (
                <img src={settings2} alt="Imagen Activa" />
              ) : (
                <img src={setting} alt="Imagen Inactiva" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) => (isActive ? "activo7" : "noActivo")}
              to="/logout"
            >
              <img src={logout} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Componetes_de_navegacion;
