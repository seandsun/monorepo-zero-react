import { Card } from './Card';
import supervisorImg from '../assets/images/icon-supervisor.svg';
import teamBuilderImg from '../assets/images/icon-team-builder.svg';
import karmaImg from '../assets/images/icon-karma.svg';
import calculatorImg from '../assets/images/icon-calculator.svg';

const services = [
  {
    id: 1,
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    img: supervisorImg,
    alt: 'Icon supervisor',
    color: 'bg-Cyan',
  },
  {
    id: 2,
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    img: teamBuilderImg,
    alt: 'Icon team builder',
    color: 'bg-Red',
  },
  {
    id: 3,
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    img: karmaImg,
    alt: 'Icon karma',
    color: 'bg-Orange',
  },
  {
    id: 4,
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    img: calculatorImg,
    alt: 'Icon calculator',
    color: 'bg-Blue',
  },
];

export const CardsContainer = () => {
  return (
    <section className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-[30px]">
      <Card {...services[0]} />
      <div className="flex flex-col gap-6 xl:gap-[30px]">
        <Card {...services[1]} />
        <Card {...services[2]} />
      </div>
      <Card {...services[3]} />
    </section>
  );
};
