import { useState } from "react";
import { bakePizza } from "../services/pizzas";
import { useNavigate } from "react-router-dom";

export const BakePizza = () => {
  const [pizza, setPizza] = useState({
    label: "",
    totalNutrients: {},
  });

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    let { label, value } = e.target

    setPizza(prev => ({
      ...prev,
      [label]: value,
    }))
  };

  const handleChange = async (e) => {
    e.preventDefault()
    await bakePizza(pizza)
    navigate("/pizzas", { replace: true })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="enter label"
        name="label"
        value={pizza.label}
        onChange={handleChange}
      /><br></br>
      <input
        placeholder="enter # of calories"
        name="calories"
        value={pizza.totalNutrients.Calories}
        onChange={handleChange}
      /><br></br>
      <input
        placeholder="enter # of carbs (in grams)"
        name="calories"
        value={pizza.totalNutrients.Carbs}
        onChange={handleChange}
      /><br></br>
      <input
        placeholder="enter # of protein (in grams)"
        name="calories"
        value={pizza.totalNutrients.Protein}
        onChange={handleChange}
      /><br></br>
      <input
        placeholder="enter # of sugar (in grams)"
        name="calories"
        value={pizza.totalNutrients.Sugar}
        onChange={handleChange}
      /><br></br>
      
      <button type="submit">Bake a new pizza</button>

    </form>
  );
};