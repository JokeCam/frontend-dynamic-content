import "./SearchBar.less"

function SearchBar(props) {
    function handleInputChange(evt) {
        evt.preventDefault();
        props.setSearchInputValue(evt.target.value);
    };

    return (
        <form className="search-bar">
            <input className="search-bar__input" value={props.searchInputValue} onChange={handleInputChange} placeholder="Search"/>
        </form>
    );
};

export default SearchBar;
