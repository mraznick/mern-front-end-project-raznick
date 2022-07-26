import { useState, useEffect } from "react";
import {getPizzas} from "../services/pizzas.js"
import Nutrition from "../components/Nutrition.jsx";

const Pizzas = () => {
  const [apiContent, setApiContent] = useState([]);
  

  useEffect(() => {
    const apiCall = async () => {
      const data = await getPizzas();
      setApiContent(data);
    };
    apiCall();
  }, []);

  return (
    <div>
      {apiContent.map((nutrientObject) => (
       
          <Nutrition key={nutrientObject._id} nutrientObject={nutrientObject} />
        
      ))}
    </div>
  );
};

export default Pizzas;
