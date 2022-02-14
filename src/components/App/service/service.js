import currentUser from './currentUser.mock.json';

export const service = {
  fetchCurrentUser: () => {
    return new Promise(function(resolve) {
      setTimeout(() => {
        resolve(currentUser);
      }, 450);
    });
  },
};
