import { useState, useEffect } from 'react';

const useFetchRank = ({ score }) => {
  const [rank, setRank] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const postRank = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rank`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ score : +score }),
          signal,
        });
        const { rank,message } = await response.json();
        setError(message)
        setRank(rank);
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    };

    postRank();

    return () => {
      // Clean up function to abort the request when the component unmounts
      abortController.abort();
    };
  }, [score]);

  const calculateRankMessage = () => {
    let rankMessage = '';

    if (rank >= 80) {
      rankMessage = 'You are in the top tier!';
    } else if (rank >= 70) {
      rankMessage = 'You are doing well!';
    } else if (rank >= 50) {
      rankMessage = 'You are making progress!';
    } else {
      rankMessage = 'Keep practicing!';
    }
  
    return rankMessage;
  };

  return { rank, isLoading, error, calculateRankMessage };
};

export default useFetchRank;
