import { useState, useEffect } from "react";
import { updatePizza, getPizza } from "../services/pizzas";
import { useNavigate, useParams } from "react-router-dom";

export const PizzaEdit = () => {
  const [pizza, setPizza] = useState({
    label: "",
    totalNutrients: {},
  })

  let navigate = useNavigate();
  const { id } = useParams()

  useEffect(() => {
    const fetchPizza = async () => {
      let onePizza = await getPizza(id)
      setPizza(onePizza)
    }

    fetchPizza()
  }, [id])

  const handleChange = (e) => {
    let {name, value} = e.target

    setPizza(prev => ({
        ...prev,
        [name]: value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePizza(id, pizza)
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
