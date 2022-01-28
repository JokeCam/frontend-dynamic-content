import cardData from "./cards.mock.json";

export const service = {
    fetchCards: () => {
        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve(cardData)
            }, 500);
        });
    },
};