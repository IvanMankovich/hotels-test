import React, { useCallback } from 'react';
import { IRoom } from '~/interfaces/interfaces';
import { Room } from './Room';

import './style.scss';

interface RoomsListProps {
  roomsData: IRoom[];
  adultsAmount: number;
  childrenAmount: number;
}

export const RoomsList: React.FC<RoomsListProps> = ({
  roomsData = [],
  adultsAmount,
  childrenAmount,
}) => {
  const rooms = useCallback(
    () =>
      roomsData.filter(
        (room) =>
          +room.occupancy.maxAdults >= adultsAmount &&
          +room.occupancy.maxChildren >= childrenAmount,
      ),
    [adultsAmount, childrenAmount, roomsData],
  );

  const filteredRooms = rooms();

  return (
    <div className='roomsList'>
      {filteredRooms.map((r) => (
        <Room key={r.id} roomData={r} />
      ))}
    </div>
  );
};
