import axios from 'axios';
import { ROOMS_ROUTE } from '~/const';
import { IRoomsResponse } from '~/interfaces/interfaces';

export const RoomsService = {
  async getRoomsByHotelId(id: string) {
    const { data } = await axios.get<IRoomsResponse>(`${ROOMS_ROUTE}${id}`);

    return data?.rooms ?? [];
  },
};
