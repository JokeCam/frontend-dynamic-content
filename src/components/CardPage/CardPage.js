import Card from "./Card/Card";
import Cards from "../../api/Cards"

import "./CardPage.less";

function CardPage() {
    return (
        <div className="card-page">
            {
                Cards.map((elem) => {
                    return <Card data={elem} key={elem.id}/>
                })
            }
        </div>
    );
};

export default CardPage;
