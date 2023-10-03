import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="home-btn">
        <Link to={'/'} id='home'>Home</Link>
      </div>
      <div className='navbar'>
        <li>
          <ul>
            <Link to={'/by-name'} id='search-link'>Pesquisar Receitas <img src="/search.svg" id='search-icon' color='white' width={"22.5px"} /></Link>
          </ul>
          <ul>
            <Link to={'/by-letter'} >Receitas por Letra</Link>
          </ul>
          <ul>
            <Link to={'/by-ingredient'}>Receitas por Ingredientes</Link>
          </ul>
        </li>
      </div>
    </header>
  );
}