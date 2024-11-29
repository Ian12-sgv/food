import React, { useState } from "react";
import plato1 from "../assets//img/plato1.png";
import plato2 from "../assets//img/plato2.png";
import plato3 from "../assets//img/plato3.png";
import plato4 from "../assets//img/plato4.png";
import plato6 from "../assets//img/plato6.png";
import flecha from "../assets//img/flecha.png";
import Components_card from "./components_card";
import Search from "./search";
import Page from "./page";
import { Link } from "react-router-dom";
import dowflecha from "../assets/svg/dowflecha.svg";
import "../styles/Card.css";

function Card() {
  const [color, setColor] = useState([true, false, false, false, false, false]);

  const handClick = (index) => {
    const updatedColor = color.map((_, i) => i === index);
    setColor(updatedColor);
  };
  return (
    <div className="cards">
      <div className="header-card">
        <div className="User">
          <div className="User-info">
            <div className="name-user">
              <h1>Jaegar Resto</h1>
            </div>
            <div className="fecha">
              <p>Tuesday, 2 Feb 2021</p>
              {/*creo que se puede hacer con una funcion */}
            </div>
          </div>

          <Search />
        </div>
        <div className="page">
          <Link
            to=""
            className="hot"
            onClick={() => handClick(0)}
            style={{
              color: color[0] ? "#ea7c69" : "white",
              borderBottom: color[0] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Hot Dishes" />
          </Link>
          <Link
            to="#"
            className="Cold"
            onClick={() => handClick(1)}
            style={{
              color: color[1] ? "#ea7c69" : "white",
              borderBottom: color[1] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Cold Dishes" />
          </Link>
          <Link
            to=""
            className="Soup"
            onClick={() => handClick(2)}
            style={{
              color: color[2] ? "#ea7c69" : "white",
              borderBottom: color[2] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Soup" />
          </Link>
          <Link
            to=""
            className="Grill"
            onClick={() => handClick(3)}
            style={{
              color: color[3] ? "#ea7c69" : "white",
              borderBottom: color[3] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Grill" />
          </Link>
          <Link
            to=""
            className="Appetizer"
            onClick={() => handClick(4)}
            style={{
              color: color[4] ? "#ea7c69" : "white",
              borderBottom: color[4] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Appetizer" />
          </Link>
          <Link
            to=""
            className="Dessert"
            onClick={() => handClick(5)}
            style={{
              color: color[5] ? "#ea7c69" : "white",
              borderBottom: color[5] ? "3px solid #ea7c69" : "none",
            }}
          >
            <Page titulo="Dessert" />
          </Link>
        </div>
      </div>
      <div className="body-card">
        <div className="encabezado-card">
          <div className="encabezado-card-content">
            {" "}
            <div className="title">Choose Dishes</div>
            <div className="dine">
              <select className="dine-select">
                <option>Dine In</option>
                <option>Take Away</option>
                <option>Delivery</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <div className="card-content">
              <Components_card
                url={plato1}
                titulo="Spicy seasoned seafood noodles"
                precio={10.99}
                cantidad={20}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato2}
                titulo="Salted Pasta with mushroom sauce"
                precio={2.69}
                cantidad={11}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato3}
                titulo="Beef dumpling in hot and sour soup"
                precio={2.99}
                cantidad={16}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato1}
                titulo="Spicy seasoned seafood noodles"
                precio={10.99}
                cantidad={20}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato2}
                titulo="Salted Pasta with mushroom sauce"
                precio={2.69}
                cantidad={11}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato3}
                titulo="Beef dumpling in hot and sour soup"
                precio={2.99}
                cantidad={16}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato6}
                titulo="Spicy instant noodle with special omelette"
                precio={3.59}
                cantidad={17}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato6}
                titulo="Spicy instant noodle with special omelette"
                precio={3.59}
                cantidad={17}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato4}
                titulo="Healthy noodle with spinach leaf"
                precio={3.29}
                cantidad={22}
                plato="Bowls Available"
              />
            </div>
            <div className="card-content">
              <Components_card
                url={plato6}
                titulo="Spicy instant noodle with special omelette"
                precio={3.59}
                cantidad={17}
                plato="Bowls Available"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
