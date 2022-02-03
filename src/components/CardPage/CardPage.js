import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import { service } from "./service/cardsService";
import { useState, useEffect } from "react";

import "./CardPage.less";

function CardPage() {
    const [ cards, setCards ] = useState([]);
    const [ displayedCards, setDisplayedCards ] = useState([]);
    const [ searchInputValue, setSearchInputValue ] = useState("");

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        if(!searchInputValue) {
            getCards();
        };

        const filteredCards = cards.filter((elem) => {
            if(searchInputValue[0] === "#") {
                const tagsArr = elem.tags.filter((tag) => {

                    return tag.includes(searchInputValue.slice(1));
                });

                return tagsArr.length > 0;
            } else {

                return elem.description.includes(searchInputValue);
            };
        });

        setDisplayedCards(filteredCards);

    }, [searchInputValue]);

    async function getCards() {
        const fetchedCards = await service.fetchCards();
        setDisplayedCards(fetchedCards);
        setCards(fetchedCards);
    };

    function handleCardsDisplay() {
        return displayedCards.map((elem) => {
            return <Card data={elem} key={elem.id}/>
        });
    };
    
    return (
        <div className="card-page">
            <SearchBar searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue}/>
            {
                handleCardsDisplay()
            }
        </div>
    );
};

export default CardPage;
