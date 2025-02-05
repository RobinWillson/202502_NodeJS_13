import React from 'react';

const ProgressDisplay = () => {
  return (
    <div className='w-full h-2.5 bg-gray-200 rounded-full'>
      <div
        className='h-full bg-blue-500 rounded-full'
        style={ { width: '75%' } }
      ></div>
    </div>
  );
};

export default ProgressDisplay;