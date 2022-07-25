import axios from "axios";
import { useState } from "react";

const Nutrition = ({nutrientObject}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
setActive(prev => !prev)
  }

  return (
    <>
      <div className="pizza-container">
        <div className="pizza-title" onClick={handleClick}>
          <h3 className="pizza-title-text">
            {nutrientObject.label} 
          </h3>
          <p>+</p>
        </div>
        {active ?
          <div id="A" className="nutrition-div">
          
            <h4>Calories: {nutrientObject.totalNutrients.Calories}</h4>
            <h4>Carbs: {nutrientObject.totalNutrients.Carbs}</h4>
            <h4>Protein: {nutrientObject.totalNutrients.Protein}</h4>
            <h4>Sugar: {nutrientObject.totalNutrients.Sugar}</h4>
         
          </div>:null
        }
      </div>
      
    </>
  );
};

export default Nutrition;
