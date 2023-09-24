import React, { useState, useEffect } from "react";
import "./App.css";
import hudata from "./data/quizzes/magyarorszag_nevezetessegei/data.json";
import buddata from "./data/quizzes/budapest_nevezetessegei/data.json";
import worlddata from "./data/quizzes/vilag_nevezetessegei/data.json";
import europedata from "./data/quizzes/europa_nevezetessegei/data.json";


function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const topics = {
    "Magyarország": hudata,
    "Budapest": buddata,
    "Világ": worlddata,
    "Europa": europedata
  };

  const imgsrc = {
    "Magyarország": "magyarorszag_nevezetessegei",
    "Budapest": "budapest_nevezetessegei",
    "Világ": "vilag_nevezetessegei",
    "Europa": "europa_nevezetessegei"
  };

  return (
    <div className="App">
      {!selectedTopic ? (
        <TopicMenu topics={topics} onSelect={handleTopicSelect} />
      ) : (
        <Quiz topic={selectedTopic} onBackToMenu={() => setSelectedTopic(null)} data={topics[selectedTopic]} imgpath={imgsrc[selectedTopic]}/>
      )}
    </div>
  );
}

export default App;
