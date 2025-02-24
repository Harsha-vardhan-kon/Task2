import { Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === 7);
  };

  return (
    <div className='container'>
      <center>
        <h1>Quiz</h1>
        <h2>1. How many continents are there?</h2>
        
        <p>
          <button 
            onClick={() => handleAnswerClick(5)}
            style={{ backgroundColor: selectedAnswer === 5 ? 'red' : '' }}
          >5</button>
        </p> 
        <p>
          <button 
            onClick={() => handleAnswerClick(4)}
            style={{ backgroundColor: selectedAnswer === 4 ? 'red' : '' }}
          >4</button>
        </p>
        <p>
          <button 
            onClick={() => handleAnswerClick(7)}
            style={{ backgroundColor: selectedAnswer === 7 ? 'green' : '' }}
          >7</button>
        </p> 
        <p>
          <button 
            onClick={() => handleAnswerClick(9)}
            style={{ backgroundColor: selectedAnswer === 9 ? 'red' : '' }}
          >9</button>
        </p> 
 
        {selectedAnswer !== null && (
          <p style={{ color: isCorrect ? 'green' : 'red' }}>
            {isCorrect ? 'Correct!' : 'Wrong!'}
          </p>
        )}

        <NavLink to={"/2nd"}>
          <Button disabled={selectedAnswer === null}>Next</Button>
        </NavLink>
      </center>
    </div>
  );
};

export default Quiz;
