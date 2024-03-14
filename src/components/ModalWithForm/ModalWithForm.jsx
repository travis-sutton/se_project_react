import "./ModalWithForm.css";

import closeButtonImage from "../../images/modal-close-button.png";

const ModalWithForm = ({
  children,
  submitButtonClassName,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h3>{title}</h3>
          <button
            className="modal__close_button"
            type="button"
            onClick={onClose}
          >
            <img src={closeButtonImage} alt="Close" />
          </button>
        </div>
        <form onSubmit={onSubmit}>
          {children}
          <button className={submitButtonClassName} type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
