import { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';
import cardImg from '../assets/images/drawers.jpg';
import { CardFooter } from './CardFooter';
import { ShareTooltip } from './ShareTooltip';

export const Card = () => {
  const { show } = useContext(ShowContext);

  return (
    <div className="max-w-[360px] bg-Light-Grayish-Blue shadow-2xl rounded-[10px] overflow-hidden relative sm:max-w-[500px] lg:flex lg:overflow-visible lg:max-w-[775px]">
      <div className="lg:w-[40%]">
        <img
          className="w-full h-[220px] object-cover object-[0%_24%] sm:h-[250px] sm:object-[0%_50%] lg:h-full lg:object-cover lg:object-[0%_0%] lg:rounded-tl-[10px] lg:rounded-bl-[10px]"
          src={cardImg}
          alt="Image of a drawer"
        />
      </div>
      <div className="px-10 pt-8 pb-[18px] text-Very-Dark-Grayish-Blue lg:w-[60%]">
        <p className="text-[1.0625rem] font-bold mb-6 sm:text-[1.375rem] sm:mb-3">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className="font-medium text-[0.8875rem]">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <CardFooter />
        {show && <ShareTooltip />}
      </div>
    </div>
  );
};
