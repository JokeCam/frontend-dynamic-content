import storiesData from "./stories.mock.json";

export const service = {
    fetchStories: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(storiesData);
            }, 225);
        });
    }
}