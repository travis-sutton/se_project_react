import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card_container">
      <div className="card_content">
        <img
          src={item.imageUrl}
          className="card_image"
          alt={item.name}
          onClick={() => onSelectCard(item)}
        />
        <p className="card_name">{item.name}</p>
      </div>
    </div>
  );
};

export default ItemCard;
