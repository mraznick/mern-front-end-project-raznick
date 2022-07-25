import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="/pizzas">All Pizzas</NavLink>
        <br></br>
        <NavLink to="/add-pizzas">Add Pizza</NavLink>
      </div>
    </nav>
  );
}

export default Nav;