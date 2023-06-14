import React, { useCallback } from 'react';
import { IHotel } from '~/interfaces/interfaces';
import { HotelCard } from '../HotelCard/HotelCard';

import './style.scss';

interface IHotelsList {
  hotelsData?: IHotel[];
  starRating: number;
  adultsAmount: number;
  childrenAmount: number;
}

export const HotelsList: React.FC<IHotelsList> = ({
  hotelsData = [],
  starRating,
  adultsAmount,
  childrenAmount,
}) => {
  const filteredHotels = useCallback(
    () => hotelsData.filter((hotel: IHotel) => +hotel.starRating >= starRating),
    [starRating, hotelsData],
  );

  const hotelsList = filteredHotels();

  return (
    <div className='hotelsList'>
      {hotelsList.length ? (
        hotelsList.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotelData={hotel}
            adultsAmount={adultsAmount}
            childrenAmount={childrenAmount}
          />
        ))
      ) : (
        <p>Not found data on such criteria</p>
      )}
    </div>
  );
};
