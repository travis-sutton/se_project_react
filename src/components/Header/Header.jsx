import "./Header.css";
import headerLogoImage from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import { Link } from "react-router-dom";

const Header = ({ onCreateModal, locationName }) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img
              className="header__logo_img"
              src={headerLogoImage}
              alt="logo"
            ></img>
          </Link>
        </div>
        <div>
          {getCurrentDate()}, {locationName}
        </div>
      </div>

      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__add-clothes-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>

        <Link className="header__link" to="/profile">
          <p className="header__user_profile">Terrence Tegegne</p>
        </Link>

        <div>
          <img src={avatarImage} alt="avatar" className="avatar__pic"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
