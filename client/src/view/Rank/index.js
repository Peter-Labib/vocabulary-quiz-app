import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ScoreContext } from '../../context/ScoreContext';
import useFetchRank from '../../hooks/useFetchRank';
import LoadingAndError from '../../components/LoadingAndError';

const Rank = () => {
  const { score } = useContext(ScoreContext);
  const { rank, isLoading, error, calculateRankMessage } = useFetchRank({ score });
  const navigate = useNavigate('/');

  //   const rankMessage = calculateRankMessage(rank);
  const navigationHandler = () => {
    navigate('/');
  };
  return (
    <LoadingAndError
      isLoading={isLoading}
      error={error}
      renderContent={() => (
        <section className='space-y-4'>
          <article className='text-center mt-12 leading-7'>
            <h3 className='font-bold'>{calculateRankMessage()}</h3>
            <p>
              Your rank among your peers is: <strong>{rank}%</strong>
            </p>
          </article>

          <button
            className='p-2 bg-[#026BB0] shadow rounded text-white block m-auto hover:shadow-lg hover:opacity-100 transition-all opacity-90'
            onClick={navigationHandler}
          >
            Try Again
          </button>
        </section>
      )}
    />
  );
};

export default Rank;
