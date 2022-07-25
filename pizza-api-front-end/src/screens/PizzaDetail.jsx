import { useState, useEffect } from "react";
import { getPizza, deletePizza } from "../services/pizzas";
import { Link, useParams, useNavigate } from "react-router-dom";

export const PizzaDetail = () => {
  const [pizza, setPizza] = useState({})

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPizza = async () => {
      let onePizza = await getPizza(id);
      setPizza(onePizza)
    };

    fetchPizza();
  }, [id]);

  return (
    <div>
      <h1>Pizza Details</h1>
      <h2>{pizza.label}</h2>
      <p>{pizza.totalNutrients}</p>
    <div>
      <button>
        <Link to={`/pizzas/${pizza._id}/edit`}>Edit Pizza</Link>
        </button>

        <button
          onClick={() => {
            deletePizza(pizza._id);
            navigate("/pizzas", { replace: true }); 
        }}
        >
          Delete Pizza
        </button>
        </div>
    </div>
  )
};