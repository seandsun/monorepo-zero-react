import { CardsContainer } from './components/CardsContainer';
import { Hero } from './components/Hero';

function App() {
  return (
    <main className="font-Poppins bg-White text-Grey-500 text-[0.9375rem] flex justify-center xl:text-base">
      <section className="max-w-[296px] py-20 xl:max-w-[1100px]">
        <Hero />
        <CardsContainer />
      </section>
    </main>
  );
}

export default App;
