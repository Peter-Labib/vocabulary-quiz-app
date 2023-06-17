import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const options = ['noun', 'adverb', 'adjective', 'verb'];
const QuestionCard = ({
  word,
  selectedAnswer,
  feedbackStyle,
  btnDisabled,
  chooseAnswerHandler,
}) => {
  return (
    <div>
      <p className='max-w-fit pt-6 pb-3'>{word}</p>
      <div className='flex space-x-3'>
        {options.map((word) => (
          <button
            disabled={btnDisabled}
            key={uuidv4()}
            className={` p-2 rounded opacity-90 shadow hover:opacity-100 hover:shadow-lg transition-all ${
              selectedAnswer === word ? feedbackStyle : 'bg-slate-100'
            }`}
            onClick={() => chooseAnswerHandler(word)}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
