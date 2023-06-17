import { useState, useEffect } from 'react';

const useFetchWords = () => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchWords = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/words`, {
          signal,
        });
        const data = await response.json();
        setWords(data);
        setError('')
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchWords();

    return () => {
      // Clean up function to abort the request when the component unmounts
      abortController.abort();
    };
  }, []);

  return { words, isLoading, error };
};

export default useFetchWords;
