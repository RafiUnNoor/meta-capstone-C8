import { Link } from 'react-router-dom';
import handiImage from './assets/handi-beef.jpg';
import kebabImage from './assets/kebab.jpg';
import biriyaniImage from './assets/biriyani.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Sheek Kebab',
    image: kebabImage,
    price: '$12.99',
    description: `Seekh kebab is a type of kebab, native to the Indian subcontinent,
    made with Indian spices, spiced minced or ground meat, usually lamb, beef, or chicken, 
    formed into cylinders on skewers and grilled.`,
  },
  {
    name: 'Biriyani',
    image: biriyaniImage,
    price: '$35.99',
    description: `Kacchi Mutton Biryani is a delicious rice dish where tender goat or lamb meat pieces are 
    marinated with lots of fried onions, whole spices, fresh herbs and yoghurt. `,
  },
  {
    name: 'Handi Beef Curry',
    image: handiImage,
    price: '$25.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
