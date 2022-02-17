import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { service } from './service/service';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
// import StoriesBlock from '../StoriesBlock/StoriesBlock';
import CardPage from '../CardPage/CardPage';

import './App.less';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const fetchedCurrentUser = await service.fetchCurrentUser();
    setCurrentUser(fetchedCurrentUser);
  }

  // authorization

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/main"
            element={
              <>
                {/* <StoriesBlock /> */}
                <CardPage />
              </>
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
