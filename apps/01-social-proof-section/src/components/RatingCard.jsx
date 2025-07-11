import StarImg from '../assets/images/icon-star.svg';

export const RatingCard = ({ text, className }) => {
  return (
    <div
      className={`bg-Light-Grayish-Magenta rounded-lg p-4 justify-center items-center xl:flex xl:w-[445px] xl:gap-8 ${className}`}
    >
      <div className="flex gap-2 justify-center mb-4 xl:mb-0">
        <img className="size-4" src={StarImg} alt="Icon start" />
        <img className="size-4" src={StarImg} alt="Icon start" />
        <img className="size-4" src={StarImg} alt="Icon start" />
        <img className="size-4" src={StarImg} alt="Icon start" />
        <img className="size-4" src={StarImg} alt="Icon start" />
      </div>
      <p className="text-Very-Dark-Magenta text-[1.0625rem] font-bold text-center">
        {text}
      </p>
    </div>
  );
};
