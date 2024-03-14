import "./SideBar.css";
import avatarImage from "../../images/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar_avatar_img" src={avatarImage} alt="avatar"></img>
      <div>
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
