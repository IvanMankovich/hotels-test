import React from 'react';

import './style.scss';

interface CounterProps {
  fieldName: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ fieldName, value, setValue }) => {
  const incrBtnClick = () => {
    setValue((prev) => prev + 1);
  };

  const decrBtnClick = () => {
    setValue((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  };

  return (
    <div className='counter'>
      {fieldName}:
      <button
        type='button'
        className='counter__button counter__button-left'
        value={'+'}
        onClick={incrBtnClick}
      >
        +
      </button>
      <span>{value}</span>
      <button
        disabled={!value}
        type='button'
        className='counter__button counter__button-right'
        value={'-'}
        onClick={decrBtnClick}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
