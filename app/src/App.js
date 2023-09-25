import React, { useState, useEffect } from "react";
import "./App.css";
import hudata from "./data/quizzes/magyarorszag_nevezetessegei/data.json";
import buddata from "./data/quizzes/budapest_nevezetessegei/data.json";
import worlddata from "./data/quizzes/vilag_nevezetessegei/data.json";
import europedata from "./data/quizzes/europa_nevezetessegei/data.json";

//the main function of the app
function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  //here is handled the topic selection
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  //this contains the topics of the quiz
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

  //the statement resolve the logic of the main menu, the choosing between the manu and the quiz
  return (
    <div className="App">
      {!selectedTopic ? (
        <TopicMenu topics={topics} 
          onSelect={handleTopicSelect} />
      ) : (
        <Quiz topic={selectedTopic} 
        onBackToMenu={() => 
          setSelectedTopic(null)} 
        data={topics[selectedTopic]} 
        imgpath={imgsrc[selectedTopic]} />
      )}
    </div>
  );
}

//the main menu of the app, the topic selector
function TopicMenu({ topics, onSelect }) {
  return (
    <div className="menu">
      <h1>Place Detective</h1>
      <h2>Choose a Topic:</h2>
      <div className="topics">
        {Object.keys(topics).map((topic) => (
          <div className="topic-choose btn" 
            key={topic} 
            onClick={() => 
              onSelect(topic)}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}


//here is the quiz screen resolved
function Quiz({ topic, onBackToMenu, data, imgpath }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctanswers, setCorrectAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  //this resolves the loading of the quiz data
  useEffect(() => {
    // Load questions from the data variable
    let loadedQuestions = data.questions.
    map((question) => ({
      ...question,
      answers: question.answers,
    }));

    loadedQuestions = shuffleArray(loadedQuestions);
    const correct = loadedQuestions.map((question) => 
      question.answers[question.correct - 1]);
    setCorrectAnswers(correct);
    
    loadedQuestions = loadedQuestions.map((question) => ({...question, answes: shuffleArray(question.answers)}));
    
    setQuestions(loadedQuestions);
  }, [data]);
    

  //handle of the answer selection and after that check if the answer is correct
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correctanswers[currentQuestion]) {
      setScore(score + 1);
    }
  
    setSelectedAnswer(selectedAnswer);
  
    //here is checked if the quiz is finished or not
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };
  

  const currentQuestionData = questions[currentQuestion];


  //this resets the quiz to the basic state
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setScore(0);

    // Shuffle the questions and answer choices again
    let loadedQuestions = data.questions.
    map((question) => ({
      ...question,
      answers: question.answers,
    }));
    
    
    
    loadedQuestions = shuffleArray(loadedQuestions);
    const correct = loadedQuestions.map((question) => 
      question.answers[question.correct - 1]);
    setCorrectAnswers(correct);
    loadedQuestions = loadedQuestions.map((question) => ({...question, answes: shuffleArray(question.answers)}));
  
    setQuestions(loadedQuestions);
  };


  useEffect(() => {
    // Load questions from the data variable
    let loadedQuestions = data.questions.
    map((question) => ({
      ...question,
      answers: question.answers,
    }));

const correct = loadedQuestions.map((question) => 
      question.answers[question.correct - 1]);
    setCorrectAnswers(correct);
  
    setQuestions(loadedQuestions);
  }, [data]);









  //here is the structure of the quiz
  return (
    <div className="play">
      {
      //if the quiz is finished, the result screen is shown
      quizFinished ? (
        <div className="result">
          <h1>Quiz Finished!</h1>
          <p>Your Score: {score}/{questions.length}</p>
          <div className="result-buttons">
            <button className="btn" 
                onClick={resetQuiz}>Retry</button>
            <button className="btn" 
                onClick={() => 
                  onBackToMenu()}>Main Menu</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="header">
            <h1>{topic} quiz</h1>     
          <h2 style={{ paddingTop: '1rem', margin: '0' }}>{currentQuestionData.question}</h2> 
          <p className="question-number">Question {currentQuestion + 1}/{questions.length}</p>
          </div>
          {currentQuestionData && (
            <div>
              {/*We have to load for each question a different picture */}
              <img className="pic" 
                src={`./data/quizzes/${imgpath}/${currentQuestionData.image}`} 
                alt={`Question ${currentQuestion + 1}`} />
            
              <div className="options">
                {currentQuestionData.answers.map((answer, ansIndex) => (
                  <button
                    className={`btn ${selectedAnswer === ansIndex ? 'selected' : ''}`}
                    key={ansIndex}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleAnswerClick(answer, ansIndex)}
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

// this shuffles the array 
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = 
    [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default App;
