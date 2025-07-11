export const ReviewCard = ({ name, imgUrl, buyerType, review, className }) => {
  return (
    <div className={`bg-Very-Dark-Magenta rounded-lg text-Light-Grayish-Magenta w-full px-8 pt-10 pb-8 xl:w-[350px] ${className}`}>
      <div className="flex gap-6 mb-6">
        <img className="size-10 rounded-full" src={imgUrl} alt="" />
        <div className="text-[1.0625rem]/[1.2rem]">
          <p className="font-bold">{name}</p>
          <p className="text-Soft-Pink">{buyerType}</p>
        </div>
      </div>
      <p className="font-medium xl:text-[16.3px] ">{review}</p>
    </div>
  );
};

//add w-full break-words
// delete xl:h[234px] 
/*
export const ReviewCard = ({ name, imgUrl, buyerType, review, className }) => {
  return (
    <div className={`bg-Very-Dark-Magenta rounded-lg text-Light-Grayish-Magenta px-8 pt-10 pb-8 xl:w-[350px] xl:h-[234px] ${className}`}>
      <div className="flex gap-6 mb-6">
        <img className="size-10 rounded-full" src={imgUrl} alt="" />
        <div className="text-[1.0625rem]/[1.2rem]">
          <p className="font-bold">{name}</p>
          <p className="text-Soft-Pink">{buyerType}</p>
        </div>
      </div>
      <p className="font-medium xl:text-[16.3px]">{review}</p>
    </div>
  );
};
*/
 