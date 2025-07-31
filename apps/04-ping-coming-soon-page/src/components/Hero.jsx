import logo from '../assets/images/logo.svg';

export const Hero = () => {
  return (
    <header className="text-center mt-20 mb-8 sm:mb-10">
      <img className="m-auto w-14 mb-8 sm:w-[90px] sm:mb-[52px]" src={logo} alt="Logo" />
      <h1 className="mb-4 text-[1.375rem] font-light text-Gray-400 sm:text-5xl">
        We are launching <span className="font-bold text-Blue-950">soon!</span>
      </h1>
      <p className="text-Blue-950 text-xs sm:text-xl">
        Subscribe and get notified
      </p>
    </header>
  );
};
