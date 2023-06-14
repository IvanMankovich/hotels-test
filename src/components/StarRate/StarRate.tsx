import React, { ReactNode } from 'react';

import './style.scss';

interface StarRateProps {
  value: number;
  readonly?: boolean;
  setStarRating?: React.Dispatch<React.SetStateAction<number>>;
}

export const StarRate: React.FC<StarRateProps> = ({ value, readonly, setStarRating }) => {
  const STARS_AMOUNT = 5;
  const stars = getStarsPreset(STARS_AMOUNT);

  function getStarsPreset(amount: number) {
    const result: ReactNode[] = [];

    for (let i = 1; i <= amount; i++) {
      result.push(
        <Star key={i} currentRate={value} readonly={readonly} value={i} onClick={onStarClick} />,
      );
    }

    return result;
  }

  function onStarClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setStarRating?.(+e.currentTarget.value);
  }

  return <div className='starRating'>{stars}</div>;
};

interface StarProps {
  currentRate: number;
  value: number;
  readonly?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Star: React.FC<StarProps> = ({ currentRate, value, readonly, onClick }) => {
  return (
    <button
      className='starRating__button'
      type='button'
      disabled={readonly}
      name={`${value} star rate`}
      value={value}
      onClick={onClick}
    >
      {currentRate >= value ? '★' : '☆'}
    </button>
  );
};
