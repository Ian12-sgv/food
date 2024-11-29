import React, { useState } from "react";
import plato1 from "../assets//img/plato1.png";
import plato2 from "../assets//img/plato2.png";
import plato3 from "../assets//img/plato3.png";
import plato4 from "../assets//img/plato4.png";
import add from "../assets//svg/add.svg";
import borrar from "../assets//img/borrar.png";
import Components_orden from "./components_orden";
import OrdenPaymentComponent from "./ordenPaymentComponent";
import Components_payment from "./Components_payment";
import Card_data from "./card_data";
import Button from "./button";
import credit from "../assets/svg/credit.svg";
import paypal from "../assets/svg/paypal.svg";
import cash from "../assets/svg/cash.svg";
import cancel from "../assets/svg/cancel.svg";
import confirmPay from "../assets/svg/confirmPay.svg";
import "../styles/modal2.css";

function Modal() {
  const [activeButton, setActiveButton] = useState("credit");

  return (
    <div className="modal-2">
      <div className="contenedor-modal2">
        <div className="izquierda">
          <div className="header-left">
            <div className="container-header">
              <div className="title-left">
                <OrdenPaymentComponent
                  titulo="Confirmation"
                  subtitulo="Orden #34562"
                />
              </div>

              <div className="button-add-modal">
                <Button button={add} />
              </div>
            </div>
          </div>

          <div className="content-component-modal">
            <div className="componentes-modal">
              <div className="primer_componente_modal">
                <Components_orden
                  url={plato1}
                  borrar={borrar}
                  titulo="Spicy seasoned sea..."
                  placeholder="Please, just a little bit specy only"
                  precio={2.29}
                  cantidad={2}
                />
              </div>
              <div className="segundo_componente_modal">
                <Components_orden
                  url={plato2}
                  borrar={borrar}
                  titulo="Salted pasta with mu..."
                  placeholder="Please, just a little bit specy only"
                  precio={2.69}
                  cantidad={2}
                />
              </div>
              <div className="tercer_componente_modal">
                <Components_orden
                  url={plato3}
                  borrar={borrar}
                  titulo="Spicy instead noodle..."
                  placeholder="Please, just a little bit specy only"
                  precio={3.49}
                  cantidad={2}
                />
              </div>
              <div className="component-cuarto">
                <Components_orden
                  url={plato4}
                  borrar={borrar}
                  titulo="Healthy noodle with..."
                  placeholder="Please, just a little bit specy only"
                  precio={3.29}
                  cantidad={2}
                />
              </div>
            </div>
          </div>

          <div className="footer-left-modal">
            <div className="container-footer">
              <div className="discount-left">Discount</div>
              <div className="discount-price-left">$0</div>
              <div className="sub-total-left">Sub total</div>
              <div className="sub-total-price-left">$21,03</div>
            </div>
          </div>
        </div>
        <div className="derecha">
          <div className="header-right">
            <div className="container-header-right">
              <div className="title-right-modal">
                <OrdenPaymentComponent
                  titulo="Payment"
                  subtitulo="3 payment methods available"
                />
              </div>
            </div>
          </div>

          <div className="content-payment">
            <div className="payment">
              <div className=" title-right">
                <h4 className="sub-title">Payment Method </h4>
              </div>
              <div className="payment-method">
                <div className="container-payment-method">
                  <div className="payment-method">
                    <button
                      className={`credit ${
                        activeButton === "credit" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveButton("credit");
                      }}
                    >
                      <Button button={credit} />
                    </button>

                    <button
                      className={`paypal ${
                        activeButton === "paypal" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveButton("paypal");
                      }}
                    >
                      <Button button={paypal} />
                    </button>

                    <button
                      className={`cash ${
                        activeButton === "cash" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveButton("cash");
                      }}
                    >
                      <Button button={cash} />
                    </button>
                  </div>

                  {activeButton === "credit" && (
                    <div style={{ color: "white" }}>
                      <div className="data-payment-credit-card">
                        <div className="container-data">
                          <Components_payment
                            dato="Cardholder Name"
                            placeholder="Monkey D. Luffy"
                          />
                          <Components_payment
                            dato="Card Number"
                            placeholder="1234 5678 9012 3456"
                          />
                          <div className="container-data-card">
                            <Card_data
                              dato="Expiration Date"
                              placeholder="MM/YY"
                            />
                            <Card_data dato="CVC" placeholder="CVC" />
                          </div>
                          <div className="container-data-card-footer">
                            <div className="dine-modal">
                              <p className="dine-p">Order Type</p>
                              <select className="dine-select-modal">
                                <option>Dine In</option>
                                <option>Take Away</option>
                                <option>Delivery</option>
                              </select>
                            </div>
                            <div className="table-modal">
                              <Components_payment
                                dato="table no."
                                placeholder="140"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeButton === "paypal" && (
                    <div style={{ color: "white" }}>
                      <div className="data-payment-paypal">
                        <div className="container-data-paypal">
                          <Components_payment
                            dato="Email"
                            placeholder="Monkey@example.com"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeButton === "cash" && (
                    <div style={{ color: "white" }} className="cash-payment">
                      <div className="data-payment-cash">
                        <div className="container-data-cash">
                          <Components_payment
                            dato="Money Amount"
                            placeholder="$10.00"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="footer-payment">
                <div className="button-payment-footer">
                  <div>
                    <button className="cancel">
                      <Button button={cancel} />
                    </button>
                  </div>
                  <div>
                    <button className="confirm-payment">
                      <Button button={confirmPay} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
