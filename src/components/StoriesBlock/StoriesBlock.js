import React from "react";

import { useState, useEffect } from "react";
import { service } from "./service/storiesService";
import Story from "./Story/Story";

import "./StoriesBlock.less";

function StoriesBlock() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories();
  }, []);

  async function getStories() {
    const fetchedStories = await service.fetchStories();
    setStories(fetchedStories);
  }

  function handleStoriesDisplay() {
    return stories.map((elem) => {
      return <Story data={elem} key={elem.avatar} />;
    });
  }

  return <div className="stories-block">{handleStoriesDisplay()}</div>;
}

export default StoriesBlock;
