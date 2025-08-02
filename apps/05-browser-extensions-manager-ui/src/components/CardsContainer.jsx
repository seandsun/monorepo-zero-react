import { useState } from 'react';
import data from '../data/data.json';
import { Card } from '@/components';

export const CardsContainer = ({ filter }) => {
  const [extensions, setExtensions] = useState(data);

  let filteredExtensions = [];

  if (filter === 'Inactive') {
    filteredExtensions = extensions.filter((extension) => {
      return extension.isActive === false;
    });
  } else if (filter === 'Active') {
    filteredExtensions = extensions.filter((extension) => {
      return extension.isActive === true;
    });
  } else {
    filteredExtensions = extensions;
  }

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {filteredExtensions.map((extension) => (
        <Card
          key={extension.name}
          {...extension}
          extensions={extensions}
          setExtensions={setExtensions}
        />
      ))}
    </div>
  );
};
