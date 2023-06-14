import React from 'react';
import { Carousel } from '~/components/Carousel/Carousel';
import { StarRate } from '~/components/StarRate/StarRate';
import { IHotel } from '~/interfaces/interfaces';

import './style.scss';

type HotelCardHeaderProps = Pick<
  IHotel,
  'name' | 'address1' | 'address2' | 'starRating' | 'images'
>;

export const HotelCardHeader: React.FC<HotelCardHeaderProps> = ({
  name,
  address1,
  address2,
  starRating,
  images,
}) => {
  return (
    <header className='hotelCard__header'>
      <div className='header__carousel'>
        <Carousel images={images} />
      </div>
      <div className='header__mainInfo'>
        <h2>{name}</h2>
        <address>{address1}</address>
        <address>{address2}</address>
      </div>
      <div className='header__starRating'>
        <StarRate readonly={true} value={+starRating} />
      </div>
    </header>
  );
};
