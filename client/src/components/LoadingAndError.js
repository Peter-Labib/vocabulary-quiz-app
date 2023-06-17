import React from 'react';
import errorImg from '../assets/img/error.jpg';

const LoadingAndError = ({ isLoading, error, renderContent }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className='h-[80vh] text-center p-8'>
        <p className='font-semibold'>{error}</p>
        <img className='h-full w-full object-contain' src={errorImg} alt={error} />
      </div>
    );
  }

  return renderContent();
};

export default LoadingAndError;
