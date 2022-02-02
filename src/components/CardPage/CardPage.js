import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import { service } from "./service/cardsService";
import { useState, useEffect } from "react";

import "./CardPage.less";

function CardPage() {
    const [ cards, setCards ] = useState([]);
    const [ searchInputValue, setSearchInputValue ] = useState("");

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        if(!searchInputValue) {
            getCards();
        };

        const tagRegex = new RegExp(searchInputValue.slice(1), "ig");
        const descriptionRegex = new RegExp(searchInputValue, "ig");

        const filteredCards = cards.filter((elem) => {
            if(searchInputValue[0] === "#") {
                const tagsArr = elem.tags.filter((tag) => {
                    return tag.search(tagRegex) > -1;
                })
                return tagsArr.length > 0;
            } else {
                return elem.description.search(descriptionRegex) > -1;
            };
        });

        setCards(filteredCards);

    }, [searchInputValue]);

    async function getCards() {
        const fetchedCards = await service.fetchCards();
        setCards(fetchedCards);
    };

    function handleCardsDisplay() {
        return cards.map((elem) => {
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
