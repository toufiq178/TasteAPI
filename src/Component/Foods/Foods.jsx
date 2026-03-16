import React, { use, useState } from 'react';
import Food from '../Food.jsx/Food';
import "./Foods.css"

const Foods = ({ foodsPromise }) => {

    const foodsData = use(foodsPromise);
    const foods = foodsData.meals

    // console.log(foods.meals);

    const [addCart, setAddCart] = useState([])

    const handlerAddToCart = (food) => {


        const newAddCart = [...addCart, food]

        setAddCart(newAddCart)

    }


    return (
        <div>

            <h1>Test Api</h1>

            <div className='foods-parent-container'>
                <div className='foods-container'>
                    {
                        foods.map(food => <Food key={food.idMeal} handlerAddToCart={handlerAddToCart} food={food}></Food>)
                    }
                </div>

                <div className='cart-container'>

                    <ol>
                        {
                            addCart.map(( a , index) => <li key={index}>{a} <button>X</button></li>)
                        }
                    </ol>
                    <button onClick={() => { setAddCart([]) }}>CLEAR ALL</button>
                </div>
            </div>
        </div>
    );
};

export default Foods;