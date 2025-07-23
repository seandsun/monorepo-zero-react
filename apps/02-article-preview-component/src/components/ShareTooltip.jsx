import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import { ShareButton } from './ShareButton';

export const ShareTooltip = () => {
  return (
    <div className="flex items-center justify-between bg-Very-Dark-Grayish-Blue shadow-2xl absolute bottom-0 left-0 w-full h-[76px] px-8 lg:h-12 lg:p-0 lg:w-[230px] lg:justify-center lg:rounded-[10px] lg:bottom-[100px] lg:left-auto lg:right-[-55px] lg:before:content-[''] lg:before:absolute lg:before:bottom-[-20px] lg:before:left-[108px] lg:before:border-10 lg:before:border-transparent lg:before:border-t-Very-Dark-Grayish-Blue">
      <div className="flex">
        <p className="text-Light-Grayish-Blue/60 uppercase tracking-[0.3em] mr-6 lg:text-sm lg:mr-5">
          Share
        </p>
        <div className="flex gap-4">
          <img src={facebookIcon} alt="Icon facebook" />
          <img src={twitterIcon} alt="Icon twitter" />
          <img src={pinterestIcon} alt="Icon pinterest" />
        </div>
      </div>
      <ShareButton
        colorText={'text-Light-Grayish-Blue'}
        colorBg={'bg-Grayish-Blue/30'}
        style={'lg:hidden'}
      />
    </div>
  );
};
