import storiesData from "./stories.mock.json";

export const service = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(storiesData);
        }, 225);
    });
};