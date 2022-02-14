import { useEffect, useState } from "react/cjs/react.development";
import classnames from "classnames";
import "./SearchBar.less"

function SearchBar(props) {
    const [ isCancelButtonDisplayed, setIsCancelButtonDisplayed ] = useState(false);

    const cancelButtonClass = classnames(
        "search-bar__button",
        {
            "search-bar__button_displayed": isCancelButtonDisplayed,
        }
    );

    useEffect(() => {
        if(!props.searchInputValue) {
            setIsCancelButtonDisplayed(false);
        } else {
            setIsCancelButtonDisplayed(true);
        };
    }, [props.searchInputValue]);

    function handleInputChange(event) {
        event.preventDefault();
        props.setSearchInputValue(event.target.value);
    };

    function handleButtonClick(event) {
        event.preventDefault();
        props.setSearchInputValue("");
    };

    return (
        <form className="search-bar">
            <div className="search-bar__search-icon"/>
            <input className="search-bar__input" value={props.searchInputValue} onChange={handleInputChange} placeholder="Search"/>
            <button className={cancelButtonClass} onClick={handleButtonClick}></button>
        </form>
    );
};

export default SearchBar;
