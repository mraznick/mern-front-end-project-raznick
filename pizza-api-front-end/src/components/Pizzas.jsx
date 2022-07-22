import axios from "axios"
import { useState, useEffect } from "react"
import Nutrition from "./Nutrition.jsx"

const Pizzas = () => {
  const [apiContent, setApiContent] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios("https://pizza-api-christine.herokuapp.com/all");
      setApiContent(data.data);
    };
    apiCall();
  });

  return (
    <div>

      <div className="pizza-title">
       <h3>{apiContent.length !== 0 ? apiContent[0].label : ""}</h3> 
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[1].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[2].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[3].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[4].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[5].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[6].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[7].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[8].label : ""}
        <h6><Nutrition /></h6>
      </div>

      <div className="pizza-title">
        {apiContent.length !== 0 ? apiContent[9].label : ""}
        <h6><Nutrition /></h6>
      </div>
</div>
  )
}

export default Pizzas
