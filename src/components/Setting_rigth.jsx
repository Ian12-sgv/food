import React from "react";
import Setting_header from "./setting_header";
import filter from "../assets/svg/filter.svg";
import Setting_card from "./Setting_card";
import plato1 from "../assets/img/plato1.png";
import plato2 from "../assets/img/plato2.png";
import plato3 from "../assets/img/plato3.png";
import plato4 from "../assets/img/plato4.png";
import plato5 from "../assets/img/plato5.png";
import plato6 from "../assets/img/plato6.png";
import save from "../assets/svg/save.svg";
import changes from "../assets/svg/changes.svg";
import plus from "../assets/svg/plus.svg";

import { Link } from "react-router-dom";
import "../styles/settings_rigth.css";
function Setting_rigth() {
  return (
    <>
      <div className="Settings-rigth-container">
        <div className="Settings-rigth-content">
          <div className="Settings-rigth-titulo">
            <Setting_header
              titulo="Poducts Management"
              filter={filter}
              filterOrden="Manage Categories"
            />
          </div>
          <div className="Settings-rigth-card">
            <div className="Settings-rigth-card-content">
              <div className="card-setting-1">
                <img src={plus} />
                <h2 className="add"> Add new dish</h2>
              </div>
              <div className="Settings-rigth-card-colums">
                <Setting_card
                  icon={plato1}
                  title="Spicy seasoned seafood noodles"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato2}
                  title="Salted Pasta with mushroom sauce"
                  price="$2.69"
                  cantidad="30 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
              <div className="Settings-rigth-card-colsums">
                <Setting_card
                  icon={plato3}
                  title="Beef dumpling in hot and sour soup"
                  price="$2.29"
                  cantidad="20 Bowls"
                />
              </div>
            </div>
          </div>

          <div className="Settings-rigth-button">
            <div className="Settings-rigth-button-content">
              <div className="settings-rigth-button-final">
                <div>
                  <img src={changes} />
                </div>
                <div className="settings-rigth-button-save-changes">
                  <img src={save} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting_rigth;
