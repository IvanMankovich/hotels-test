export interface IHotel {
  address1: string;
  address2: string;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  country: string;
  countryCode: string;
  description: string;
  email: string;
  facilities: { code: string }[];
  id: string;
  images: IImage[];
  name: string;
  position: { latitude: number; longitude: number; timezone: string };
  postcode: string;
  starRating: string;
  telephone: string;
  town: string;
  maxAdults?: number;
  maxChildren?: number;
}

export interface IRoom {
  bedConfiguration: string;
  disabledAccess: boolean;
  facilities: { code: string; name: string }[];
  id: string;
  images: IImage[];
  longDescription: string;
  name: string;
  occupancy: { maxAdults: number; maxChildren: number; maxOverall: number };
  shortDescription: string;
}

export interface IImage {
  url: string;
  alt?: string;
}

export interface IRoomsResponse {
  rooms: IRoom[];
}

export interface IApiError {
  message: string;
}
