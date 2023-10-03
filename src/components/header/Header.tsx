import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="home-btn">
        <label id='home'>Home</label>
      </div>
      <div className='nav-bar'>
        <label id='search-label'>Pesquisar Receitas <img src="/search.svg" id='search-icon' color='white' width={"22.5px"} /></label>
        <label>Receitas por Letra</label>
        <label>Receitas por Ingredientes</label>
      </div>
    </header>
  );
}