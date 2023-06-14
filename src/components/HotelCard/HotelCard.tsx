import React from 'react';
import { useQuery } from 'react-query';
import { IHotel } from '~/interfaces/interfaces';
import { RoomsService } from '~/services/rooms.service';
import { HotelCardHeader } from './HotelCardHeader/HotelCardHeader';
import { RoomsList } from './Rooms/RoomsList';

import './style.scss';

interface HotelCardProps {
  hotelData: IHotel;
  adultsAmount: number;
  childrenAmount: number;
}

export const HotelCard: React.FC<HotelCardProps> = ({
  hotelData,
  adultsAmount,
  childrenAmount,
}) => {
  const { isLoading, data } = useQuery({
    queryKey: ['room'],
    queryFn: async () => RoomsService.getRoomsByHotelId(hotelData.id),
  });

  return (
    <div className='hotelCard'>
      <HotelCardHeader
        name={hotelData.name}
        address1={hotelData.address1}
        address2={hotelData.address2}
        starRating={hotelData.starRating}
        images={hotelData.images}
      />

      {isLoading ? (
        <>...</>
      ) : data?.length ? (
        <RoomsList
          roomsData={data ?? []}
          adultsAmount={adultsAmount}
          childrenAmount={childrenAmount}
        />
      ) : null}
    </div>
  );
};
