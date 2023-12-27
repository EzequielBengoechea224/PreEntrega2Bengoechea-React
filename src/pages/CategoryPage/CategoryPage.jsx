import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DrinkCard from '../../Components/DrinkCard/DrinkCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CategoryPage.css";

const CategoryPage = () => {
    const [drinks,setDrinks] = useState([]);
    const [loading,setLoading] = useState(false);
    let {categoryId} = useParams();
    console.log(categoryId);
    useEffect(() =>{
        setLoading(true);
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryId}`)
        .then((inf) => {
            setDrinks(inf.data.drinks)
            setLoading(false);
        });
    },[categoryId])
    console.log(drinks)
  return (
    <div>
        {(loading === false) ? (
            <div className='grid'>
                {drinks.map((drink) =>{
                        {console.log(drink)}
                        return(
                            <Link to={`/drink/${drink.idDrink}`}>
                                <div key={drink.idDrink}>
                                    <DrinkCard  drink={drink}/>
                                </div>
                            </Link>
                        )
                        })
                }
            </div>
        ) : (
        <p>Hola</p>
        )}
    </div>
  )
}

export default CategoryPage