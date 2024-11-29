import { useState } from "react";
import { createPortal } from "react-dom";
import ModalCompleto from "./modalCompleto";

export default function PortalExample(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="buttonElBueno" onClick={() => setShowModal(true)}>
        <img className="img-ElBueno" src={props.botonElBueno} />
      </button>
      {showModal &&
        createPortal(
          <ModalCompleto onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
