import { useState } from "react";
import { bakePizza } from "../services/pizzas";
import { useNavigate } from "react-router-dom";

const PizzaBake = () => {
  const [pizza, setPizza] = useState({
    label: "",
    image: "",
    totalNutrients: {},
    healthLabels: []
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await bakePizza(pizza)
    navigate("/pizzas", { replace: true })
  };

  const handleChange = async (e) => {
    let { name, value } = e.target

    if (name === "label") {
      setPizza(prev => ({
        ...prev,
        [name]: value,
      }))

    } else {
      setPizza(prev => ({
        ...prev,
        totalNutrients: {
          ...prev.totalNutrients,
          [name]: value
        }
      }))
    }

  
  };

  return (
    <form onSubmit={handleSubmit} id="bake-form">
      <input
        placeholder="enter label"
        name="label"
        value={pizza.label}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      <input
        placeholder="enter # of calories"
        name="Calories"
        value={pizza.totalNutrients.Calories}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      <input
        placeholder="enter # of carbs (in grams)"
        name="Carbs"
        value={pizza.totalNutrients.Carbs}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      <input
        placeholder="enter # of protein (in grams)"
        name="Protein"
        value={pizza.totalNutrients.Protein}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      <input
        placeholder="enter # of sugar (in grams)"
        name="Sugar"
        value={pizza.totalNutrients.Sugar}
        onChange={handleChange}
        className="form-input"
      /><br></br>
      
      <button type="submit" id="submit-button">Bake a new pizza</button>

    </form>
  );
};

export default PizzaBake