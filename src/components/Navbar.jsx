import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Task App</span>

      <div>
        <Link className="btn btn-light me-2" to="/products">
          Products
        </Link>
        <Link className="btn btn-light me-2" to="/todos">
          Todos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;