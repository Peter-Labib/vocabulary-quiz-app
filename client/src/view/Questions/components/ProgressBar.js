import React from 'react';

const ProgressBar = ({ value = 0 }) => {
  return (
    <div className='w-full bg-neutral-200 dark:bg-neutral-600'>
      <div
        className={`bg-[#026BB0] p-0.5 text-center text-xs font-medium leading-none text-primary-100`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
