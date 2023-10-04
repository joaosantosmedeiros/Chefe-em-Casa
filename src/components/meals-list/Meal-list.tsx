import { Link } from "react-router-dom";
import IMeal from "../../helpers/meal";
import './Meal-list.css'

export default function MealsList(props: { mealList: IMeal[] }) {
  return (
    <div className='meals-list'>
      {props.mealList.map((meal: IMeal) => (
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
  )
}