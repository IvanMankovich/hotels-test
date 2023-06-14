import React, { useState } from 'react';
import { IImage } from '~/interfaces/interfaces';

import './style.scss';

interface CarouselProps {
  images: IImage[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [imgInd, setImgInd] = useState<number>(0);

  const getImgSrc = (images: IImage[], currInd: number, modifier: 1 | -1) => {
    const lastInd: number = images.length - 1;
    const nextInd: number = currInd + modifier;

    if (nextInd > lastInd) {
      setImgInd(0);
    } else if (nextInd < 0) {
      setImgInd(lastInd);
    } else {
      setImgInd(nextInd);
    }
  };

  return (
    <div className='carousel'>
      {images.length ? (
        <>
          <button
            className='carousel__button carousel__button-right'
            onClick={() => getImgSrc(images, imgInd, -1)}
          >
            {'>'}
          </button>
          <button
            className='carousel__button carousel__button-left'
            onClick={() => getImgSrc(images, imgInd, 1)}
          >
            {'<'}
          </button>
        </>
      ) : null}
      <img
        className='carousel__img'
        src={images[imgInd].url}
        alt={images[imgInd].alt ?? `Hotel image`}
      ></img>
    </div>
  );
};
