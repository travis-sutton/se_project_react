import "./Header.css";
import headerLogoImage from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            className="header__logo_img"
            src={headerLogoImage}
            alt="logo"
          ></img>
        </div>
        <div>{getCurrentDate()}, Nashville, TN</div>
      </div>

      <div className="header__avatar-logo">
        <div>
          <button
            className="header__add-clothes-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={avatarImage} alt="avatar" className="avatar-pic"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
