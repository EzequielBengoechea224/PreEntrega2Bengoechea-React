import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DrinkCard from '../../Components/DrinkCard/DrinkCard'
import { useParams } from 'react-router-dom'
import "./DrinkPage.css"

const DrinkPage = () => {
    const [drink,setDrink] = useState({});
    let {id} = useParams();
    console.log(id)
    console.log(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    useEffect(() =>{
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((inf) => setDrink(inf.data.drinks[0]));
    },[id]);

    console.log(drink);
    

    return (
        <div className='cont'>
            <div>
                {id ? (<DrinkCard drink={drink}/>) : (<p>No se pudo</p>) }
            </div>
        </div>
    )


}

export default DrinkPage;