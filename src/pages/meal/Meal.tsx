import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import IMeal from "../../helpers/meal";
import './Meal.css'

export default function Meal() {
  const param = useParams();
  const mealId = param.mealId;

  const [meal, setMeal] = useState<IMeal | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const newMeal = res.data.meals[0];

      setMeal(newMeal);
    };

    fetchMeal();
  }, [mealId]);


  const ingredients = [];
  const measures = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const valor = meal[`strIngredient${i}`];

      if (valor !== null && valor.trim() !== "") {
        ingredients.push(valor);
      }
    }

    for (let i = 0; i < ingredients.length; i++) {
      measures.push(meal[`strMeasure${i + 1}`])
    }

    console.log(ingredients, measures)
  }

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
            <div className="meal-recipe">
              <div className="ingredients">
                <h3>Ingredientes</h3>
                <ol>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ol>
              </div>
              <div className="measures">
                <h3>Medidas</h3>
                <ol>
                  {measures.map((measure, index) => (
                    <li key={index}>{measure}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="meal-links">
              <a target='blank' href={meal.strYoutube}><button>Youtube</button></a>
              <a target='blank' href={meal.strSource}>Fonte Original</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}