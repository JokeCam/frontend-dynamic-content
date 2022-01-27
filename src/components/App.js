import StoriesBlock from "./StoriesBlock/StoriesBlock";
import CardPage from "./CardPage/CardPage"
import "./App.less";

function App() {
  return (
    <div className="app">
      <h1>Dynamic Content Project</h1>
      <StoriesBlock />
      <CardPage />
    </div>
  );
};

export default App;
