import { service } from "./service/service";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import StoriesBlock from "../StoriesBlock/StoriesBlock";
import CardPage from "../CardPage/CardPage";
import Header from "../Header/Header";

import "./App.less";


function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const fetchedCurrentUser = await service.fetchCurrentUser();
    setCurrentUser(fetchedCurrentUser);
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <StoriesBlock />
        <CardPage />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
