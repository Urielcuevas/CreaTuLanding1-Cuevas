import { useState } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-dark text-white fixed-top w-100 p-3 shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 fw-bold">
          <Link to="/" className="text-white text-decoration-none">ImportadosARG</Link>
        </h1>

        <div className="position-relative">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-secondary d-flex align-items-center"
          >
            Categorías <ChevronDown size={16} className="ms-2" />
          </button>
          {open && (
            <ul className="position-absolute mt-2 list-group shadow bg-white text-dark rounded">
              <li className="list-group-item list-group-item-action">
                <Link to="/categoria/electronica" className="text-dark text-decoration-none">Monitores</Link>
              </li>
              <li className="list-group-item list-group-item-action">
                <Link to="/categoria/ropa" className="text-dark text-decoration-none">Ropa</Link>
              </li>
              <li className="list-group-item list-group-item-action">
                <Link to="/categoria/hogar" className="text-dark text-decoration-none">Memorias</Link>
              </li>
              <li className="list-group-item list-group-item-action">
                <Link to="/categoria/juguetes" className="text-dark text-decoration-none">Joyeria</Link>
              </li>
            </ul>
          )}
        </div>

        <Link to="/carrito" className="btn position-relative">
          <ShoppingCart size={24} className="text-white" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
            0
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
