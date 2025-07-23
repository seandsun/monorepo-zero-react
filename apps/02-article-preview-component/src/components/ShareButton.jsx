import { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';
import { ReactComponent as ShareIcon } from '../assets/images/icon-share.svg';

export const ShareButton = ({ colorText, colorBg, style }) => {
  const { show, setShow } = useContext(ShowContext);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <button
      onClick={handleClick}
      className={`${colorText} ${colorBg} ${style} size-8 rounded-full grid place-items-center cursor-pointer`}
    >
      <ShareIcon />
    </button>
  );
};
