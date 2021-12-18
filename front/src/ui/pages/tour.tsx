import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useTour } from '../hooks/use-tours';
import { TourHeader } from '../components/tour-header';
import { TourDescription } from '../components/tour-description';
import { TourImages } from '../components/tour-images';
import { Cta } from '../components/cta';
import { Reviews } from '../components/reviews';
import { Loader } from '../elements/loader';

// import { Map } from '../components/tour-map';

export function Tour(): ReactElement {
  const { pathname } = useLocation();
  const tourId = pathname.split('/').reverse()[0]!;
  const { isLoading, data } = useTour(tourId);

  if (!data || isLoading) return <Loader />;

  return (
    <>
      <TourHeader
        name={data.name}
        startLocation={data.startLocation}
        duration={data.duration}
        imageCover={data.imageCover}
      />

      <TourDescription
        description={data.description}
        name={data.name}
        difficulty={data.difficulty}
        startDates={data.startDates}
        maxGroupSize={data.maxGroupSize}
        ratingsAverage={data.ratingsAverage}
        guides={data.guides}
      />

      <TourImages images={data.images} name={data.name} />

      <Reviews reviews={data.reviews} />

      <Cta id={data.id} images={data.images} duration={data.duration} />
    </>
  );
}
