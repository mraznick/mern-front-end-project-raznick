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
};