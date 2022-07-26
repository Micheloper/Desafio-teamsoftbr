import { MdAdd, MdRemove } from "react-icons/md";
import { useState } from "react";
import Modal from "../Modal/Modal.js";
import "./FooterIngredients.css";
import AddIngredients from "../AddIngredients/AddIngredients.js";
import QuantitySelector from "../QuantitySelector/QuantitySelector.js";

export function FooterIngredients() {
  const [cutlery, setCutlery] = useState(0);

  const [showModal, setShowModal] = useState(false);

  function handleAddEvent() {
    setShowModal(true);
  }
  return (
    <>
      <div className="form-footer">
        {/* ------------------------- */}
        <div className="ingredientGroupAmount">
          <div>
            <button
              disabled={cutlery === 0 ? true : false}
              onClick={() => setCutlery(cutlery - 1)}
              className="ingredientButton --decrease"
            >
              <MdRemove
                color={cutlery === 0 ? "#AEB6C1" : "#D80000"}
                size={24}
              />
            </button>
            <p>{cutlery}</p>
            <button
              onClick={() => setCutlery(cutlery + 1)}
              className="ingredientButton --add"
            >
              <MdAdd size={24} />
            </button>
          </div>
        </div>
        {/* ------------------------- */}
        <button onClick={handleAddEvent} className="form-footer__add">
          Adicionar
        </button>
      </div>

      {showModal && <Modal cutlery={cutlery} />}
    </>
  );
}
