import classnames from "classnames";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Header.less";

function Header() {
    const [isHomeButtonActive, setIsHomeButtonActive] = useState(false);
    const [isProfileButtonActive, setIsProfileButtonActive] = useState(false);
    const userContext = useContext(CurrentUserContext);

    const homeButtonClass = classnames(
        "header__menu-button",
        "header__menu-button_home",
        {
            "header__menu-button_home-active": isHomeButtonActive
        }
    );

    const profileButtonClass = classnames(
        "header__menu-button",
        "header__menu-button_profile",
        {
            "header__menu-button_profile-active": isProfileButtonActive
        }
    );

    function handleHomeClick() {
        if (isHomeButtonActive) {
            setIsHomeButtonActive(false);
        } else {
            setIsProfileButtonActive(false);
            setIsHomeButtonActive(true);
        };
    };

    function handleProfileClick() {
        if (isProfileButtonActive) {
            setIsProfileButtonActive(false);
        } else {
            setIsHomeButtonActive(false);
            setIsProfileButtonActive(true);
        };
    };

    return (
        <header className="header">
            <h1 className="header__title">NotTheInstagram</h1>
            <div className="header__menu">
                <button onClick={handleHomeClick} className={homeButtonClass}></button>
                <button onClick={handleProfileClick} className={profileButtonClass}>
                    <img className="header__menu-button-image" src={userContext.avatar} />
                </button>
            </div>
        </header>
    );
};

export default Header;
