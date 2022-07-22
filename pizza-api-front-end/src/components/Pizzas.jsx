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
  });

  return (
    <div>
      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[0].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[1].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[2].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[3].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[4].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[5].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[6].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[7].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[8].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">{apiContent.length !== 0 ? apiContent[9].label : ""}</h3>
        </div>
        <div className="nutrition-div">
          <h6>
            <Nutrition />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Pizzas;
