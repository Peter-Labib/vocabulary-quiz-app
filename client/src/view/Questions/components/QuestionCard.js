import React from 'react';

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
        {options.map((word, i) => (
          <button
            disabled={btnDisabled}
            key={i}
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
