import { Link } from 'react-router-dom';
import './Header.css'

function LogoIcon({fill}: {fill: string}){
  return(
    <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={fill} viewBox="0 0 256 256"><path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"></path></svg>
  )
}

function SearchIcon({fill}: {fill:string}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={fill} viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
  )
}

export default function Header() {
  return (
    <header>
      <div className="home-btn">
        <Link className='header-link' to={'/'} id='home'><LogoIcon fill='#ff3535'/> Chefe em Casa</Link>
      </div>
      <div className='navbar'>
        <li>
          <ul>
            <Link className='header-link' to={'/by-name'} id='search-link'>Pesquisar Receitas <SearchIcon fill='#ffffff'/></Link>
          </ul>
          <ul>
            <Link className='header-link' to={'/by-letter'} >Receitas por Letra</Link>
          </ul>
          <ul>
            <Link className='header-link' to={'/by-ingredient'}>Receitas por Ingredientes</Link>
          </ul>
        </li>
      </div>
    </header>
  );
}