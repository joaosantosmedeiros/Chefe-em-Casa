import axios from 'axios';
import { useState, useEffect } from 'react';
import IMeal from '../../helpers/meal';
import './By-letter.css'
import MealsList from '../../components/meals-list/Meal-list';

export default function ByLetter() {
  const [search, setSearch] = useState('');
  const [mealList, setMealList] = useState<IMeal[]>([]);

  useEffect(() => {
    if (search.trim() === '') {
      setMealList([]);
      return;
    }

    const fetchMeal = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
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
      <h1>Receitas por letra</h1>
      <p id='letters'>
        <label onClick={() => { setSearch('A'); }}>A</label>
        <label onClick={() => { setSearch('B'); }}>B</label>
        <label onClick={() => { setSearch('C'); }}>C</label>
        <label onClick={() => { setSearch('D'); }}>D</label>
        <label onClick={() => { setSearch('E'); }}>E</label>
        <label onClick={() => { setSearch('F'); }}>F</label>
        <label onClick={() => { setSearch('G'); }}>G</label>
        <label onClick={() => { setSearch('H'); }}>H</label>
        <label onClick={() => { setSearch('I'); }}>I</label>
        <label onClick={() => { setSearch('J'); }}>J</label>
        <label onClick={() => { setSearch('K'); }}>K</label>
        <label onClick={() => { setSearch('L'); }}>L</label>
        <label onClick={() => { setSearch('M'); }}>M</label>
        <label onClick={() => { setSearch('N'); }}>N</label>
        <label onClick={() => { setSearch('O'); }}>O</label>
        <label onClick={() => { setSearch('P'); }}>P</label>
        <label onClick={() => { setSearch('Q'); }}>Q</label>
        <label onClick={() => { setSearch('R'); }}>R</label>
        <label onClick={() => { setSearch('S'); }}>S</label>
        <label onClick={() => { setSearch('T'); }}>T</label>
        <label onClick={() => { setSearch('U'); }}>U</label>
        <label onClick={() => { setSearch('V'); }}>V</label>
        <label onClick={() => { setSearch('W'); }}>W</label>
        <label onClick={() => { setSearch('X'); }}>X</label>
        <label onClick={() => { setSearch('Y'); }}>Y</label>
        <label onClick={() => { setSearch('Z'); }}>Z</label>
      </p>
      <MealsList mealList={mealList} />
    </section>
  )
}