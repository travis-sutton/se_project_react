import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onSelectCard, clothingItems, onCreateModal }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-section">
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingItems={clothingItems}
          onCreateModal={onCreateModal}
        />
      </section>
    </div>
  );
}

export default Profile;
