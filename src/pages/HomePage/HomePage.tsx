import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { HeroBanner } from '~/components/HeroBanner/HeroBanner';
import { SearchPanel } from '~/components/SearchPanel/SearchPanel';
import { HotelsList } from '~/components/HotelsList/HotelsList';
import { Loader } from '~/components/Loader/Loader';

import { IApiError } from '~/interfaces/interfaces';
import { HotelsService } from '~/services/hotels.service';

const HomePage: React.FC = () => {
  const [starRating, setStarRating] = useState<number>(3);
  const [adultsAmount, setAdultsAmount] = useState<number>(0);
  const [childrenAmount, setChildrenAmount] = useState<number>(0);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['hotels'],
    queryFn: async () => HotelsService.getAllHotels(),
    onError: (err: IApiError) => err,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const heroBannerData = data?.[0]?.images?.[0];

  document.title = 'Hotel Page';

  return (
    <>
      <HeroBanner imgSrc={heroBannerData?.url} alt={heroBannerData?.alt} />
      <SearchPanel
        starRating={starRating}
        setStarRating={setStarRating}
        adultsAmount={adultsAmount}
        setAdultsAmount={setAdultsAmount}
        childrenAmount={childrenAmount}
        setChildrenAmount={setChildrenAmount}
      />
      <HotelsList
        hotelsData={data}
        starRating={starRating}
        adultsAmount={adultsAmount}
        childrenAmount={childrenAmount}
      />
    </>
  );
};

export default HomePage;
