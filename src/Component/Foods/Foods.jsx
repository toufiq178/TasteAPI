import React, { use } from 'react';
import Food from '../Food.jsx/Food';
import "./Foods.css"

const Foods = ({ foodsPromise }) => {

    const foodsData = use(foodsPromise);
    const foods = foodsData.meals

    // console.log(foods.meals);


    return (
        <div>

            <h1>Test Api</h1>

            <div className='foods-container'>
                {
                    foods.map(food => <Food key={food.idMeal} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;