import cardData from './cards.mock.json';

export const service = {
  fetchCards: (page) => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        resolve(cardData[page]);
      }, 500);
    });
  },
};
