import Card from "./Card/Card";
import { service } from "./service/cardsService";
import { useState, useEffect } from "react";

import "./CardPage.less";

function CardPage() {
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        getCards();
    }, []);

    async function getCards() {
        const mockCards = await service();
        setCards(mockCards);
    };

    function handleCardsDisplay() {
        return cards.map((elem) => {
            return <Card data={elem} key={elem.id}/>
        })
    }

    return (
        <div className="card-page">
            {
                handleCardsDisplay()
            }
        </div>
    );
};

export default CardPage;
