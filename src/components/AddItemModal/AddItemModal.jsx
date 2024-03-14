import "./AddItemModal.css";
import React from "react";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, weather, imageUrl: link });
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  return (
    <ModalWithForm
      title="New Garment"
      submitButtonClassName="add__garment_submit_button-disabled"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="add__item__modal-input_label">
          Name
          <input
            type="text"
            name="name"
            className="add__item__modal-input"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className="add__item__modal-input_label">
          Image
          <input
            type="url"
            name="Link"
            className="add__item__modal-input"
            placeholder="Image URL"
            value={link}
            onChange={handleUrlChange}
          />
        </label>

        <p>Select the weather type:</p>

        <div>
          <div className="add__item__modal-radio">
            <label className="add__item__modal-radio_label">
              <input
                name="temp"
                type="radio"
                className="add__item__modal-radio_input"
                id="hot"
                value="hot"
                onChange={handleWeatherChange}
              />
              Hot
            </label>
          </div>
          <div className="add__item__modal-radio">
            <label className="add__item__modal-radio_label">
              <input
                name="temp"
                type="radio"
                className="add__item__modal-radio_input"
                id="warm"
                value="warm"
                onChange={handleWeatherChange}
              />
              Warm
            </label>
          </div>
          <div className="add__item__modal-radio">
            <label className="add__item__modal-radio_label">
              <input
                name="temp"
                type="radio"
                className="add__item__modal-radio_input"
                id="cold"
                value="cold"
                onChange={handleWeatherChange}
              />
              Cold
            </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
