import axios from 'axios';
import { useState, useEffect, ChangeEvent } from 'react';
import './By-ingredient.css'
import { Link } from 'react-router-dom';

interface Ingredient {
  strIngredient: string;
}

export default function ByIngredient() {
  const [allIngredients, setAllIngredients] = useState<string[]>([]);
  const [filteredIngredients, setFilteredIngredients] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const ingredients: Ingredient[] = res.data.meals;

        const ingredientsName = ingredients.map(ingredient => ingredient.strIngredient);

        setAllIngredients(ingredientsName);
        setFilteredIngredients(ingredientsName);
      } catch (error) {
        console.error('Erro ao buscar ingredientes:', error);
      }
    };

    fetchIngredients();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value.toLowerCase();
    setSearchInput(userInput);

    const filtered = allIngredients.filter(ingredient =>
      ingredient.toLowerCase().includes(userInput)
    );

    setFilteredIngredients(filtered);
  };

  return (
    <section>
      <div className="ingredients-search">
        <h1>Lista de Ingredientes</h1>
        <input
          placeholder='Digite o ingrediente...'
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="ingredients-list">
        {filteredIngredients.map(ingredient => (
          <Link to={`/by-ingredient/${ingredient.toLowerCase().replace(" ", "_")}`} key={ingredient}>
            <b>{ingredient}</b>
          </Link>
        ))}
      </div>
    </section>
  )
}
