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

function TopicMenu({ topics, onSelect }) {
  return (
    <div className="menu">
      <h1>Place Detective</h1>
      <h2>Choose a Topic:</h2>
      <div className="topics">
        {Object.keys(topics).map((topic) => (
          <div className="topic-choose btn" key={topic} onClick={() => onSelect(topic)}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

function Quiz({ topic, onBackToMenu, data, imgpath }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="play">
 
        <div>
          <div className="header">
            <h1>{topic} quiz</h1>
            <p className="question-number">Question {currentQuestion + 1}/{questions.length}</p>
          </div>
          {currentQuestionData && (
            <div>
             {console.log(`./data/quizzes/${imgpath}/img/${currentQuestionData.image}`)}
              <img className="pic" src={`./data/quizzes/${imgpath}/${currentQuestionData.image}`} alt={`Question ${currentQuestion + 1}`} />
            
            
              <div className="options">
                {currentQuestionData.answers.map((answer, ansIndex) => (
                  <button
                    className={`btn ${selectedAnswer === ansIndex ? 'selected' : ''}`}
                    key={ansIndex}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleAnswerClick(ansIndex)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
    </div>
  );
}

export default App;