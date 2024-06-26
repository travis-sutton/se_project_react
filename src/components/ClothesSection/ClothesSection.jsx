import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onSelectCard, clothingItems, onCreateModal }) {
  return (
    <div className="clothes__section">
      <div className="clothes__section_text-container">
        <p className="clothes__section-title">Your Items</p>
        <button
          className="clothes__section-add_button"
          type="text"
          onClick={onCreateModal}
        >
          + Add New Item
        </button>
      </div>
      <div>
        <ul className="clothes__section-card_items">
          {clothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
