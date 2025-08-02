import { useState } from 'react';

import { Header, Filters, CardsContainer } from '@/components';

function App() {
  const [filter, setFilter] = useState('All'); //All - Active - Inactive

  return (
    <main className="light-gradient dark:dark-gradient min-h-screen font-Noto-Sans flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header />
        <Filters filter={filter} setFilter={setFilter} />
        <CardsContainer filter={filter} />
      </section>
    </main>
  );
}

export default App;
