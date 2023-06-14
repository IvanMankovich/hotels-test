import React from 'react';
import Counter from '../Counter/Counter';
import { StarRate } from '../StarRate/StarRate';

import './style.scss';

interface SearchPanelProps {
  starRating: number;
  setStarRating: React.Dispatch<React.SetStateAction<number>>;
  adultsAmount: number;
  setAdultsAmount: React.Dispatch<React.SetStateAction<number>>;
  childrenAmount: number;
  setChildrenAmount: React.Dispatch<React.SetStateAction<number>>;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({
  starRating,
  setStarRating,
  adultsAmount,
  setAdultsAmount,
  childrenAmount,
  setChildrenAmount,
}) => {
  return (
    <form className='searchPanel'>
      <StarRate value={starRating} setStarRating={setStarRating} />
      <Counter value={adultsAmount} setValue={setAdultsAmount} fieldName={'Adults'} />
      <Counter value={childrenAmount} setValue={setChildrenAmount} fieldName={'Children'} />
    </form>
  );
};
