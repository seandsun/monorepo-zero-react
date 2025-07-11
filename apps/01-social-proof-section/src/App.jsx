import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { RatingContainer } from './components/RatingContainer';
import { ReviewContainer } from './components/ReviewContainer';

function App() {
  return (
    <main className="font-League-Spartan px-6 py-20 relative w-full max-w-[1440px] mx-auto md:px-44 xl:px-[165px]">
      <Background />
      <div className="mb-12 xl:flex">
        <Hero />
        <RatingContainer />
      </div>
      <ReviewContainer />
    </main>
  );
}

export default App;
