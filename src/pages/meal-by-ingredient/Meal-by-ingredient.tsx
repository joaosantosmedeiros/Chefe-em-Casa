import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import IMeal from '../../helpers/meal';
import './Meal-by-ingredient.css'

type RouteParams = {
  ingredient: string;
}

function MealByIngredient() {
  const param = useParams<RouteParams>();
  const ingredient = param.ingredient;
  let prettyIngredient = ingredient?.replace("_", " ").split(" ");
  if (prettyIngredient) {
    const final = [];
    for (let i = 0; i < prettyIngredient?.length; i++) {
      const element = `${prettyIngredient[i][0].toUpperCase()}${prettyIngredient[i].slice(1)}`;
      final.push(element)
    }
    prettyIngredient = final
  } 

  const [mealList, setMealList] = useState<IMeal[]>([]);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        setMealList(res.data.meals || []);
      } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        setMealList([]);
      }
    };

    fetchMeal();
  }, [ingredient]);

  return (
    <section>
      <h1>Receitas com {prettyIngredient?.join(" ")}</h1>
      <div className='meals-list'>
        {mealList.map((meal: IMeal) => (
          <div className='meal-ing' key={meal.idMeal}>
            <div className='meal-image-ing'>
              <Link to={`/meal/${meal.idMeal}`} ><img src={meal.strMealThumb} alt={meal.strMeal} /></Link>
            </div>
            <h4>{meal.strMeal}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MealByIngredient;
