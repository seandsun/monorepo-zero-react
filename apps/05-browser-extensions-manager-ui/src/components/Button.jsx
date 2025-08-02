export const Button = ({ children, textSmall, active, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`border-2 border-Neutral-300 px-5 py-2 rounded-full cursor-pointer ${
        textSmall
          ? 'text-base hover:bg-Red-400 dark:hover:bg-Red-400 hover:text-white dark:hover:text-Neutral-900 focus:outline-none focus:ring-2 focus:ring-Red-500 focus:bg-Neutral-100 focus:text-Neutral-900 dark:focus:bg-Neutral-600 dark:focus:text-Neutral-0 dark:focus:border-Neutral-900'
          : 'text-[1.25rem]'
      }  ${
        active
          ? 'bg-Red-700 text-Neutral-0 hover:bg-Red-500 hover:text-Neutral-0 dark:bg-Red-400 dark:text-Neutral-900 dark:hover:text-Neutral-900 focus:outline-none focus:ring-2 focus:ring-Red-500  dark:focus:border-Neutral-900  dark:focus:ring-Red-500 '
          : 'bg-Neutral-0 hover:text-Neutral-600 dark:text-Neutral-100 dark:hover:text-Neutral-0 dark:bg-Neutral-800 dark:hover:bg-Neutral-600 focus:outline-none focus:ring-2 focus:ring-Red-500'
      }    dark:border-Neutral-600  dark:hover:border-Neutral-600    transition-all duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};
