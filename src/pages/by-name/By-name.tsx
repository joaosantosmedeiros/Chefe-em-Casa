import { useState, useEffect } from 'react';
import axios from 'axios';
import IMeal from '../../helpers/meal';
import './By-name.css'
import MealsList from '../../components/meals-list/Meal-list';

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
      <MealsList mealList={mealList}/>
    </section>
  );
}
