import axios from "axios";
import { useState, useEffect } from "react";
import Nutrition from "./Nutrition.jsx";

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
        <Nutrition nutrientObject={nutrientObject} />
      ))}
    </div>
  );
};

export default Pizzas;
