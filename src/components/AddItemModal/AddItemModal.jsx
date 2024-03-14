import "./AddItemModal.css";
import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { useForm } from "../hooks/useForm";
import { useState } from "react";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const { values, handleChange } = useForm({
    name: "",
    weather: "",
    imageUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      name: values.name,
      weather: values.weather,
      imageUrl: values.imageUrl,
    });
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
            value={values.name}
            onChange={handleChange}
          />
        </label>

        <label className="add__item__modal-input_label">
          Image
          <input
            type="url"
            name="imageUrl"
            className="add__item__modal-input"
            placeholder="Image URL"
            value={values.imageUrl}
            onChange={handleChange}
          />
        </label>

        <p className="add__item__modal-weather_text">
          Select the weather type:
        </p>

        <div className="add__item__modal-radio">
          <label className="add__item__modal-radio_label">
            <input
              name="temp"
              type="radio"
              className="add__item__modal-radio_input"
              id="hot"
              value="hot"
              onChange={handleChange}
            />
            Hot
          </label>

          <label className="add__item__modal-radio_label">
            <input
              name="temp"
              type="radio"
              className="add__item__modal-radio_input"
              id="warm"
              value="warm"
              onChange={handleChange}
            />
            Warm
          </label>

          <label className="add__item__modal-radio_label">
            <input
              name="temp"
              type="radio"
              className="add__item__modal-radio_input"
              id="cold"
              value="cold"
              onChange={handleChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
