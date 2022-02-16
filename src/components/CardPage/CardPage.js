import React from 'react';

import SearchBar from './SearchBar/SearchBar';
import Card from './Card/Card';
import { service } from './service/cardsService';
import { useState, useEffect } from 'react';

import './CardPage.less';

// const MAX_PAGES = 4;

function CardPage() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    if (!searchInputValue) {
      setDisplayedCards(cards);
      return;
    }

    const filteredCards =
      searchInputValue[0] === '#' ? filterByTag() : filterByDesc();

    setDisplayedCards(filteredCards);
  }, [searchInputValue]);

  useEffect(() => {
    getCards(currentPage, true);
    console.log(currentPage);
  }, [currentPage]);

  async function getCards(page = 0, isPaginationNeeded = false) {
    const fetchedCards = await service.fetchCards(page);
    if (isPaginationNeeded) {
      const newCardsArr = displayedCards.concat(fetchedCards);
      setDisplayedCards(newCardsArr);
      setCards(newCardsArr);

      return;
    }

    setDisplayedCards(fetchedCards);
    setCards(fetchedCards);
  }

  function handleScroll() {
    const userScrollHeight = window.innerHeight + window.scrollY;
    const windowBottomHeight = document.documentElement.offsetHeight;

    if (userScrollHeight >= windowBottomHeight) {
      setCurrentPage((prevCurrentPage) => ++prevCurrentPage);
    }
  }

  function filterByTag() {
    const searchedValue = searchInputValue.slice(1).toLowerCase();
    const filtered = cards.filter((elem) => {
      return elem.tags.some((tag) => {
        return tag.toLowerCase().includes(searchedValue);
      });
    });

    return filtered;
  }

  function filterByDesc() {
    const searchInput = searchInputValue.toLowerCase();
    const filtered = cards.filter((elem) => {
      return elem.description.toLowerCase().includes(searchInput);
    });

    return filtered;
  }

  return (
    <div className="card-page">
      <SearchBar
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      {displayedCards.map((elem) => {
        return <Card data={elem} key={elem.id} />;
      })}
    </div>
  );
}

export default CardPage;
