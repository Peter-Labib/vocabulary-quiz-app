import React from 'react'
import QuestionCard from './QuestionCard';

const QuestionPage = ({ words, questionCounter, selectedAnswer, feedbackStyle, btnDisabled, chooseAnswerHandler }) => {
    return (
      <section className='px-8'>
        <p className='max-w-fit font-bold pt-8'>
          Question: What is the part of speech of the following word?
        </p>
        <QuestionCard
          word={words[questionCounter]?.word}
          selectedAnswer={selectedAnswer}
          feedbackStyle={feedbackStyle}
          btnDisabled={btnDisabled}
          chooseAnswerHandler={chooseAnswerHandler}
        />
      </section>
    );
  };
  

export default QuestionPage