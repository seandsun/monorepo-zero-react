import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';

import { Button } from '@/components';

export const Card = ({
  logo,
  name,
  description,
  isActive,
  extensions,
  setExtensions,
}) => {
  const onToggle = () => {
    const currentExtension = extensions.filter((extension) => {
      return extension.name === name;
    })[0];

    currentExtension.isActive = !currentExtension.isActive;

    const newExtensions = extensions.map((extension) => {
      if (extension.name === name) {
        extension.isActive = currentExtension.isActive;
      }
      return extension;
    });

    setExtensions(newExtensions);
  };

  const onRemove = () => {
    const filteredExtensions = extensions.filter((extension) => {
      return extension.name !== name;
    });

    setExtensions(filteredExtensions);
  };

  return (
    <div className="bg-Neutral-0 rounded-[18px] p-4 shadow-sm dark:bg-Neutral-800 dark:border dark:border-Neutral-600">
      <div className="flex gap-[14px] items-start mb-6">
        <img src={logo} alt="Logo" />
        <div>
          <h2 className="text-[1.25rem] text-Neutral-900 font-bold mb-0.5 dark:text-Neutral-0">
            {name}
          </h2>
          <p className="text-Neutral-600 text-base dark:text-Neutral-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button handleClick={onRemove} textSmall>
          Remove
        </Button>
        <Toggle onClick={onToggle} checked={isActive} color="red" />
      </div>
    </div>
  );
};
