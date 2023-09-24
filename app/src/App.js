import React, { useState, useEffect } from "react";
import "./App.css";

//import the different topics for the quiz
import hudata from "./data/quizzes/magyarorszag_nevezetessegei/data.json";
import buddata from "./data/quizzes/budapest_nevezetessegei/data.json";
import worlddata from "./data/quizzes/vilag_nevezetessegei/data.json";
import europedata from "./data/quizzes/europa_nevezetessegei/data.json";

function App() {
// Define a state variable for the selected topic
  const [selectedTopic, setSelectedTopic] = useState(null);

// Function to handle topic selection
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

// Define topics and corresponding data sources
  const topics = {
    "Magyarország": hudata,
    "Budapest": buddata,
    "Világ": worlddata,
    "Europa": europedata
  };

// Define image sources for each topic
  const imgsrc = {
    "Magyarország": "magyarorszag_nevezetessegei",
    "Budapest": "budapest_nevezetessegei",
    "Világ": "vilag_nevezetessegei",
    "Europa": "europa_nevezetessegei"
  };

  return (
    <div className="App">
      {!selectedTopic ? (
// Display the topic menu if no topic is selected
        <TopicMenu topics={topics} onSelect={handleTopicSelect} />
      ) : (
// Display the quiz component when a topic is selected
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

	// Display topic buttons for selection
          <div className="topic-choose btn" key={topic} onClick={() => onSelect(topic)}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

function Quiz({ topic, onBackToMenu, data, imgpath }) {

// Define state variables for the quiz
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
<<<<<<< HEAD
    // Load questions from the data variable
=======

    // Load questions from the data variable and shuffle them
>>>>>>> f96de1214dc43110280e7ceb8fd1dc07d753e9dd
    const loadedQuestions = data.questions.map((question) => ({
      ...question,
      answers: shuffleArray(question.answers),
    }));

    setQuestions(shuffleArray(loadedQuestions));
  }, [data]);

  const handleAnswerClick = (answerIndex) => {
<<<<<<< HEAD
=======

// Check if the selected answer is correct and update the score
>>>>>>> f96de1214dc43110280e7ceb8fd1dc07d753e9dd
    if (questions[currentQuestion].correct === answerIndex) {
      setScore(score + 1);
    }

<<<<<<< HEAD
=======
    // Set the selected answer and move to the next question or finish the quiz
>>>>>>> f96de1214dc43110280e7ceb8fd1dc07d753e9dd
    setSelectedAnswer(answerIndex);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
<<<<<<< HEAD
    } else {
      setQuizFinished(true);
    }
  };

  const currentQuestionData = questions[currentQuestion];

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setScore(0);
    // Shuffle the questions and answer choices again
    const loadedQuestions = data.questions.map((question) => ({
      ...question,
      answers: shuffleArray(question.answers),
    }));
    setQuestions(shuffleArray(loadedQuestions));
  };

=======

    } else {
      setQuizFinished(true);

    }
  };

>>>>>>> f96de1214dc43110280e7ceb8fd1dc07d753e9dd
  return (
    <div className="play">
      {quizFinished ? (
        <div className="result">
          <h1>Quiz Finished!</h1>
          <p>Your Score: {score}/{questions.length}</p>
          <div className="result-buttons">
            <button className="btn" onClick={resetQuiz}>Retry</button>
            <button className="btn" onClick={() => onBackToMenu()}>Main Menu</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="header">
            <h1>{topic} quiz</h1>
            <p className="question-number">Question {currentQuestion + 1}/{questions.length}</p>
          </div>
          {currentQuestionData && (
            <div>
             {console.log(./data/quizzes/${imgpath}/img/${currentQuestionData.image})}
              <img className="pic" src={./data/quizzes/${imgpath}/${currentQuestionData.image}} alt={Question ${currentQuestion + 1}} />


              <div className="options">
                {currentQuestionData.answers.map((answer, ansIndex) => (
// Display answer options as buttons
                  <button
                    className={btn ${selectedAnswer === ansIndex ? 'selected' : ''}}
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
      )}
    </div>
  );
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default App;