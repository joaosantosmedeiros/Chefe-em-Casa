import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import IMeal from '../../helpers/meal';
import MealsList from '../../components/meals-list/Meal-list';


function Home() {
  const [mealList, setMealList] = useState<IMeal[]>([]);
  useEffect(() => {
    const fetchRandomMeal = async () => {
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const newMeal = res.data.meals[0];

      setMealList((prevMealList) => [...prevMealList, newMeal]);
    };

    for (let i = 0; i < 5; i++) {
      fetchRandomMeal();
    }
  }, []);

  return (
    <section>
      <h1>Receitas Aleatórias</h1>
      <MealsList mealList={mealList}/>
    </section>
  );
}

export default Home;