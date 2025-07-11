import { RatingCard } from './RatingCard';

const ratings = [
  'Rated 5 Stars in Reviews',
  'Rated 5 Stars in Report Guru',
  'Rated 5 Stars in BestTech',
];

export const RatingContainer = () => {
  const positionClases = [
    'xl:place-self-start',
    'xl:place-self-center',
    'xl:place-self-end',
  ];

  return (
    <div className="grid grid-cols-1 gap-4 justify-center md:px-8 xl:px-0 xl:grid-cols-3 xl:w-2/4">
      {ratings.map((rating, index) => {
        return (
          <RatingCard
            key={rating}
            text={rating}
            className={positionClases[index]}
          />
        );
      })}
    </div>
  );
};
