import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import IMeal from "../../helpers/meal";
import './Meal.css'

export default function Meal() {
  const param = useParams();
  const mealId = param.mealId;
  console.log(mealId)

  const [meal, setMeal] = useState<IMeal | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const newMeal = res.data.meals[0];

      setMeal(newMeal);
    };

    fetchMeal();
  }, [mealId]);

  return (
    <section id="unique-meal-section">
      {meal && (
        <div className="meal-unique" key={meal.idMeal}>
          <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="meal-content">
            <div className="meal-info">
              <p><b>Categoria:</b> {meal.strCategory}</p>
              <p><b>Area:</b> {meal.strArea}</p>
              <p><b>Tags:</b> {meal.strTags}</p>
            </div>
            <p>{meal.strInstructions}</p>
            <div className="meal-link">
              <a target='blank' href={meal.strYoutube}><button>Youtube</button></a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}