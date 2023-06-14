import React from 'react';
import { IRoom } from '~/interfaces/interfaces';

import './style.scss';

interface RoomProps {
  roomData: IRoom;
}

export const Room: React.FC<RoomProps> = ({ roomData }) => {
  const {
    name,
    longDescription,
    occupancy: { maxAdults, maxChildren },
  } = roomData;

  return (
    <div className='room'>
      <section className='room__mainInfo'>
        <h3>{name}</h3>
        <p>Adults: {maxAdults}</p>
        <p>Children: {maxChildren}</p>
      </section>
      <section className='room__addInfo'>
        <p>{longDescription}</p>
      </section>
    </div>
  );
};
