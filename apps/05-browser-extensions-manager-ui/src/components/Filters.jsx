import { Button } from '@/components';

export const Filters = ({ filter, setFilter }) => {
  const handleClick = (e) => {
    setFilter(e.target.textContent);
  };

  return (
    <div className="mb-6 md:flex md:justify-between md:items-center">
      <h1 className="text-Neutral-800 dark:text-Neutral-0 text-center text-[2.125rem] font-bold mb-6 md:mb-0">
        Extensions List
      </h1>
      <div className="flex justify-between md:gap-4">
        <Button active={filter === 'All'} handleClick={handleClick}>
          All
        </Button>
        <Button active={filter === 'Active'} handleClick={handleClick}>
          Active
        </Button>
        <Button active={filter === 'Inactive'} handleClick={handleClick}>
          Inactive
        </Button>
      </div>
    </div>
  );
};
