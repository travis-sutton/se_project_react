import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card_container">
      <div className="card_content">
        <img
          src={item.link}
          className="card_image"
          alt={item.name}
          onClick={() => onSelectCard(item)}
        />
        <div className="card_name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
