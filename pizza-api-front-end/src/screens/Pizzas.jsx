import axios from "axios";
import { useState, useEffect } from "react";
import {getPizzas} from "../services/pizzas.js"
import Nutrition from "../components/Nutrition.jsx";

const Pizzas = () => {
  const [apiContent, setApiContent] = useState([]);
  

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios("https://pizza-api-christine.herokuapp.com/all");
      setApiContent(data.data);
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
