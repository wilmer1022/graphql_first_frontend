import React from "react";
import Navbar from "./Navbar.styled";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/exports";

// React icons
import { IconContext } from "react-icons";
import { MdOutlineMoreVert } from "react-icons/md";

// images
import like_icon from "../../assets/images/like_icon.webp";

export const WG_Navbar = () => {
  // redux useSelector
  const user = useSelector((state) => state.user);

  // uneNavigate
  const navigate = useNavigate();

  return (
    <Navbar>
      <div className="navbar__icon">
        <img src={like_icon} alt="like icon" />
      </div>
      {!user.isLogin ? (
        <div className="navbar__login_section">
          <button
            className="navbar__login_section__btn"
            onClick={() => navigate("/login")}
          >
            Sing in
          </button>
          <button
            className="navbar__login_section__btn"
            onClick={() => navigate("/register")}
          >
            Sing up
          </button>
        </div>
      ) : (
        <div className="navbar__user_section">
          <div className="navbar__user_section_icon">
            {user.data.displayName[0].toUpperCase()}
          </div>
          <div className="navbar__user_section_name">
            {user.data.displayName}
          </div>
          <IconContext.Provider
            value={{
              color: "#6B6E70",
              size: "30px",
            }}
          >
            <MdOutlineMoreVert />
          </IconContext.Provider>
        </div>
      )}

      <div className="navbar__user_section"></div>
    </Navbar>
  );
};
