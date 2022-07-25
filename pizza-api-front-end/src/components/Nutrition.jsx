import axios from "axios";
import { useState, useEffect } from "react";

const Nutrition = ({nutrientObject}) => {
  console.log(nutrientObject)
  return (
    <>
      <div className="pizza-container">
        <div className="pizza-title">
          <h3 className="pizza-title-text">
            {nutrientObject.label}
          </h3>
        </div>
        <div className="nutrition-div">
          
          <h6>Calories: {nutrientObject.totalNutrients.Calories}</h6>
          <h6>Carbs: {nutrientObject.totalNutrients.Carbs}</h6>
          <h6>Protein: {nutrientObject.totalNutrients.Protein}</h6>
          <h6>Sugar: {nutrientObject.totalNutrients.Sugar}</h6>
         
        </div>
      </div>
      
    </>
  );
};

export default Nutrition;
