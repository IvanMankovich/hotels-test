import axios from 'axios';
import { ALL_HOTELS_ROUTE } from '~/const';
import { IHotel } from '~/interfaces/interfaces';

export const HotelsService = {
  async getAllHotels() {
    const { data } = await axios.get<IHotel[]>(ALL_HOTELS_ROUTE);

    return data ?? [];
  },
};
