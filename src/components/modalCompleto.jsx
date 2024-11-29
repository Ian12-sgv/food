import React from "react";
import Modal from "./modal";
import Button from "./button";
import back from "../assets/svg/back.svg";

function ModalCompleto({ onClose }) {
  return (
    <div className="background-modal">
      <div className="modal-window">
        <div className="modal-window-content">
          <button className="close" onClick={onClose}>
            <span>
              <Button button={back} />
            </span>
          </button>
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default ModalCompleto;
