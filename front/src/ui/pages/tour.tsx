import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { TourHeader } from '../components/tour-header';
import { TourDescription } from '../components/tour-description';
import { TourImages } from '../components/tour-images';
import { CTA } from '../components/cta';
import { Reviews } from '../components/reviews';
import { useTour } from '../hooks/use-tour';
import { Loader } from '../elements/loader';

// import { Map } from '../components/tour-map';

export function Tour(): ReactElement {
  const { pathname } = useLocation();
  const tourId = pathname.split('/').reverse()[0];
  const {
    isLoading,
    data: { currentTour },
  } = useTour({ tourId: tourId });

  if (!currentTour || isLoading) return <Loader />;

  return (
    <>
      <TourHeader
        name={currentTour.name}
        startLocation={currentTour.startLocation}
        duration={currentTour.duration}
        imageCover={currentTour.imageCover}
      />

      <TourDescription
        description={currentTour.description}
        name={currentTour.name}
        difficulty={currentTour.difficulty}
        startDates={currentTour.startDates}
        maxGroupSize={currentTour.maxGroupSize}
        ratingsAverage={currentTour.ratingsAverage}
        guides={currentTour.guides}
      />

      <TourImages images={currentTour.images} name={currentTour.name} />

      <Reviews reviews={currentTour.reviews} />

      <CTA images={currentTour.images} duration={currentTour.duration} />
    </>
  );
}
