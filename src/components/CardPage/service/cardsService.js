import cardData from "./cards.mock.json"

export const service = () => {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(cardData)
        }, 500);
    });
}