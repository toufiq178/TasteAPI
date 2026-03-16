import React from 'react';
import "./Food.css"

const Food = ({food}) => {


    console.log(food);
    

    return (
        <div>
            
            <div  className="food-card">
                <p>{food.strMeal}</p>
                <img src={food.strMealThumb} alt="" />
            </div>
        </div>
    );
};

export default Food;