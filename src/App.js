import React, { useState } from 'react';

export default function App() {

  function refreshPage(){
    window.location.reload();
}
  const questions = [
    {
      questionText: 'What is the capital of Liberia?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Monrovia', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the president of liberia?',
      answerOptions: [
        { answerText: 'Samuel k Doe', isCorrect: false },
        { answerText: 'George Weah', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'who is the senetor of nimba county?',
      answerOptions: [
        { answerText: 'Prince Y Johnson', isCorrect: true },
        { answerText: 'Ellen Johnson', isCorrect: false },
        { answerText: 'Carlos Nah', isCorrect: false },
        { answerText: 'Chris Deabeh', isCorrect: false },
      ],
    },
    {
      questionText: 'How many counties are there in liberia ?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '15', isCorrect: true },
      ],
    },
    {
      questionText: 'which country is the oldest in africa ?',
      answerOptions: [
        { answerText: 'Nigeria', isCorrect: false },
        { answerText: 'Togo', isCorrect: false },
        { answerText: 'Ghana', isCorrect: false },
        { answerText: 'Liberia', isCorrect: true },
      ],
    },
    {
      questionText: 'A triangle with sides 3 cm, 4 cm and 5 cm is rotated about the side of length 4 cm. Find the volume of the solid generated.',
      answerOptions: [
        { answerText: '8cm3', isCorrect: false },
        { answerText: '4cm2', isCorrect: false },
        { answerText: '6cm', isCorrect: false },
        { answerText: '12 cm3', isCorrect: true },
      ],
    },
    {
      questionText: 'Let A  =  {0, 1} and B  =  {1, 3} be two sets. Let f: A→B be a function given by f(x) = 2x + 1. Represent this function as a set of ordered pairs.',
      answerOptions: [
        { answerText: '{(0, 1) (1, 3)}', isCorrect: true },
        { answerText: '(1, 0) (2, 4)', isCorrect: false },
        { answerText: '{(0, 1) (1, 2)}', isCorrect: false },
        { answerText: '(3, 8) (1, 3)', isCorrect: false },

      ],
    },
    {
      questionText: 'What does HTML stands for?',
      answerOptions: [
        { answerText: 'Honor Top Markup Language', isCorrect: false },
        { answerText: 'Markup Language', isCorrect: false },
        { answerText: 'HyperText Markup Language', isCorrect: true },
        { answerText: 'Javscript React Language', isCorrect: false },
      ],
    },

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      
      {showScore ? (
        <>
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
          <div className='buttons'>
            
          <button type="submit" onClick={refreshPage}>Start Over</button>
          
            
          </div>
        </>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>

        </>
      )}
    </div>
  );
}