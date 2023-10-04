import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import IMeal from '../../helpers/meal';
import { Link } from 'react-router-dom';


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
      <div className='meals-list'>
        {mealList.map((meal: IMeal) => (
          <div className='meal' key={meal.idMeal}>
            <div className='meal-image'>
              <Link to={`meal/${meal.idMeal}`} ><img src={meal.strMealThumb} alt={meal.strMeal} /></Link>
            </div>
            <div className="meal-content">
              <h4>{meal.strMeal}</h4>
              <p>{meal.strInstructions.substring(0, 70)}</p>
              <div className="meal-link">
                <Link id='youtube-link' target='blank' to={meal.strYoutube}><button>Youtube</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;