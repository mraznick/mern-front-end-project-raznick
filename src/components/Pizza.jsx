import { Link } from "react-router-dom"

const Pizza = ({ pizza }) => {
  return (
    <div>
      <Link to={`/pizzas/${pizza._id}`}>
        <h2>{pizza.name}</h2>
      </Link>
    </div>
  );
};

export default Pizza;