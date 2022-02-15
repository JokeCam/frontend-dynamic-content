import React from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Header.less";

function Header() {
  const [isHomeButtonActive, setIsHomeButtonActive] = useState(false);
  const [isProfileButtonActive, setIsProfileButtonActive] = useState(false);
  const userContext = useContext(CurrentUserContext);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/profile":
        setIsProfileButtonActive(true);
        break;

      default:
        setIsHomeButtonActive(true);
        break;
    }
  });

  const homeButtonClass = classnames(
    "header__menu-button",
    "header__menu-button_home",
    {
      "header__menu-button_home-active": isHomeButtonActive,
    }
  );

  const profileButtonClass = classnames(
    "header__menu-button",
    "header__menu-button_profile",
    {
      "header__menu-button_profile-active": isProfileButtonActive,
    }
  );

  function handleHomeClick() {
    if (!isHomeButtonActive) {
      setIsProfileButtonActive(false);
      setIsHomeButtonActive(true);
    }
  }

  function handleProfileClick() {
    if (!isProfileButtonActive) {
      setIsHomeButtonActive(false);
      setIsProfileButtonActive(true);
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">NotTheInstagram</h1>
      <div className="header__menu">
        <Link to="/">
          <button
            onClick={handleHomeClick}
            className={homeButtonClass}
          ></button>
        </Link>
        <Link to="/profile">
          <button onClick={handleProfileClick} className={profileButtonClass}>
            <img
              className="header__menu-button-image"
              src={userContext.avatar}
            />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
