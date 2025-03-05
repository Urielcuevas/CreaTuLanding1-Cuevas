
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        {/* logo y nombre */}
        <div className="title-container">
        <img src="./src/assets/tienda.jpg" alt="" className="logo" />
        <span className="title">ImportadosARG</span>
        </div>
        
        {/* Categorías */}
        <div className="categories">
          <a href="#">Perfumes</a>
          <a href="#">Celulares</a>
          <a href="#">Bazar</a> 
        </div>
        
        {/* Carrito */}
        <div className="carrito">
          <span className="carrito-icon">🛒</span>
          <span className="carrito-badge">3</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
