import React from 'react';
import "./Food.css"

const Food = ({food ,handlerAddToCart}) => {


    // console.log(food);
    

    return (
        <div>
            
            <div  className="food-card">
                <p>{food.strMeal}</p>
                <img src={food.strMealThumb} alt="" />
                <button onClick={() => {handlerAddToCart(food.strMeal)}}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Food;