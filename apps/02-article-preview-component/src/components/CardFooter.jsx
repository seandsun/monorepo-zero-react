import profileImg from '../assets/images/avatar-michelle.jpg';
import { ShareButton } from './ShareButton';

export const CardFooter = () => {
  return (
    <div className="flex justify-between items-center mt-8 lg:mt-4 lg:mb-4">
      <div className="flex items-center gap-4">
        <img
          className="size-10 rounded-full"
          src={profileImg}
          alt="Michelle's profile picture"
        />
        <div>
          <p className="font-bold">Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
      </div>
      <ShareButton
        colorText={'text-Desaturated-Dark-Blue'}
        colorBg={'bg-Grayish-Blue/30'}
      />
    </div>
  );
};
