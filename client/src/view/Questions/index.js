import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ProgressBar from './components/ProgressBar';
import QuestionPage from './components/QuestionPage';
import useFetchWords from '../../hooks/useFetchWords';
import { ScoreContext } from '../../context/ScoreContext';
import LoadingAndError from '../../components/LoadingAndError';

const Questions = () => {
  const [questionCounter, setQustionCounter] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [feedbackStyle, setFeedbackStyle] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [progressBarVal, setProgressBar] = useState(0);
  const { updateScore } = useContext(ScoreContext);
  const { words, isLoading, error } = useFetchWords();
  const navigate = useNavigate();

  const chooseAnswerHandler = (answer) => {
    setBtnDisabled(true);
    const currentWord = words[questionCounter];
    const isCorrect = currentWord.pos === answer;
    if (isCorrect) {
      setFeedbackStyle('bg-green-500 text-white');
      setCorrectAnsCount((val) => val + 1);
    } else {
      setFeedbackStyle('bg-red-600 text-white');
    }
    setSelectedAnswer(answer);
    setTimeout(() => {
      if (questionCounter + 1 === words.length) {
        navigate('/rank');
        updateScore((correctAnsCount / (questionCounter + 1)) * 100);
      }
      setProgressBar(((questionCounter + 1) / words.length) * 100);
      setBtnDisabled(false);
      setSelectedAnswer('');
      setQustionCounter((val) => val + 1);
      setFeedbackStyle('');
    }, 200);
  };

  return (
    <LoadingAndError
      isLoading={isLoading}
      error={error}
      renderContent={() => (
        <>
          <ProgressBar value={progressBarVal} />
          <QuestionPage
            words={words}
            questionCounter={questionCounter}
            selectedAnswer={selectedAnswer}
            feedbackStyle={feedbackStyle}
            btnDisabled={btnDisabled}
            chooseAnswerHandler={chooseAnswerHandler}
          />
        </>
      )}
    />
  );
};

export default Questions;
