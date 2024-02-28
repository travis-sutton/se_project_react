const AddItemModal = () => {
  return (
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
        />
      </label>

      <label className="add__item__modal-input_label">
        Image
        <input
          type="url"
          name="Link"
          className="add__item__modal-input"
          placeholder="Image URL"
        />
      </label>

      <p>Select the weather type:</p>

      <div>
        <div className="add__item__modal-radio">
          <input
            name="temp"
            type="radio"
            className="add__item__modal-radio_input"
            id="hot"
            value="hot"
          />
          <label className="add__item__modal-radio_label">Hot</label>
        </div>
        <div className="add__item__modal-radio">
          <input
            name="temp"
            type="radio"
            className="add__item__modal-radio_input"
            id="warm"
            value="warm"
          />
          <label className="add__item__modal-radio_label">Warm</label>
        </div>
        <div className="add__item__modal-radio">
          <input
            name="temp"
            type="radio"
            className="add__item__modal-radio_input"
            id="cold"
            value="cold"
          />
          <label className="add__item__modal-radio_label">Cold</label>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
