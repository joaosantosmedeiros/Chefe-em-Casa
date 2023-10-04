import { useState, useEffect } from 'react';
import axios from 'axios';
import IMeal from '../../helpers/meal';
import { Link } from 'react-router-dom';
import './By-name.css'

export default function ByName() {
  const [search, setSearch] = useState('');
  const [mealList, setMealList] = useState<IMeal[]>([]);

  useEffect(() => {
    if (search.trim() === '') {
      setMealList([]);
      return;
    }

    const fetchMeal = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        setMealList(res.data.meals || []);
      } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        setMealList([]);
      }
    };

    fetchMeal();
  }, [search]);

  return (
    <section>
      <div className="search-recipe">
        <h1>Pesquisar Receita</h1>
        <input placeholder='Fish Stew' onChange={(event) => { setSearch(event.target.value); }} />
      </div>
      <div className="meals-list">
        {mealList.map((meal: IMeal) => (
          <div className="meal" key={meal.idMeal}>
            <div className="meal-image">
              <Link to={`/meal/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </Link>
            </div>
            <div className="meal-content">
              <h4>{meal.strMeal}</h4>
              <p>{meal.strInstructions.substring(0, 70)}</p>
              <div className="meal-link">
                <Link id="youtube-link" target="_blank" to={meal.strYoutube}>
                  <button>Youtube</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
