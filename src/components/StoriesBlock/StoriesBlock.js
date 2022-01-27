import { useEffect } from "react";
import Stories from "../../api/Stories"
import Story from "./Story/Story";

import "./StoriesBlock.less";

function StoriesBlock() {

    useEffect(() => {

    })

    return (
        <div className="stories-block">
                {
                    Stories.map((elem) => {
                        return <Story data={elem} key={elem.id} />
                    })
                }
        </div>
    );
};

export default StoriesBlock;
