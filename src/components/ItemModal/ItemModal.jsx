import "./ItemModal.css";

import closeButtonImage from "../../images/modal-close-button-transparent.png";

const ItemModal = ({ selectedCard, onClose, handleCardDelete }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content-item">
        <button
          className="modal__close_button modal__close_button-item"
          type="button"
          onClick={onClose}
        >
          <img
            className="modal__close_button-image"
            src={closeButtonImage}
            alt="Close"
          />
        </button>
        <img className="item__modal_image" src={selectedCard.imageUrl} />
        <div className="item__modal_text_container">
          <div className="item__modal_name">{selectedCard.name}</div>
          <div>
            Weather:{" "}
            {selectedCard.weather.charAt(0).toUpperCase() +
              selectedCard.weather.slice(1)}
          </div>
          <button
            type="submit"
            className="item__modal_delete_button"
            onClick={() => handleCardDelete(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
