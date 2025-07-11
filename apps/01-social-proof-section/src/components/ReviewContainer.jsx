import { ReviewCard } from './ReviewCard';

import ColtonImg from '../assets/images/image-colton.jpg';
import IreneImg from '../assets/images/image-irene.jpg';
import AnneImg from '../assets/images/image-anne.jpg';

const reviews = [
  {
    id: 1,
    name: 'Colton Smith',
    imgUrl: ColtonImg,
    buyerType: 'Verified Buyer',
    review:
      '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
  },
  {
    id: 2,
    name: 'Irene Roberts',
    imgUrl: IreneImg,
    buyerType: 'Verified Buyer',
    review:
      '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    id: 3,
    name: 'Anne Wallace',
    imgUrl: AnneImg,
    buyerType: 'Verified Buyer',
    review:
      '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
];

export const ReviewContainer = () => {
  const positionClases = [
    'xl:translate-y-0',
    'xl:translate-y-6',
    'xl:translate-y-12',
  ];

  return (
    <div className="flex flex-col gap-4 md:px-8 xl:px-0 xl:flex-row xl:gap-[30px] xl:justify-between xl:pb-12">
      {reviews.map(({ id, name, imgUrl, buyerType, review }, index) => (
        <ReviewCard
          key={id}
          name={name}
          imgUrl={imgUrl}
          buyerType={buyerType}
          review={review}
          className={positionClases[index]}
        />
      ))}
    </div>
  );
};
