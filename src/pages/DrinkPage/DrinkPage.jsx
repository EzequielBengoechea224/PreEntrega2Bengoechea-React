import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DrinkCard from '../../Components/DrinkCard/DrinkCard'
import { useParams } from 'react-router-dom'
import "./DrinkPage.css"
import Spinner from '../../Components/Spinner/Spinner'

const DrinkPage = () => {
    const [drink,setDrink] = useState({});
    const [loading,setLoading] = useState(false);
    let {id} = useParams();
    console.log(id)
    console.log(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    useEffect(() =>{
        setLoading(true);
        axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((inf) => {
            setDrink(inf.data.drinks[0]);
            setLoading(false);    
            });
    },[id]);

    console.log(drink);
    

    return (
        <div>
            {loading ? (
                <div style={{display:"flex", alignItems:"center", justifyContent:"center",marginBottom:"2vh", marginTop:"2vh"}}>
                    <Spinner /> 
                </div>
                ) :(
            <div className='cont'>
                <div>
                    {id ? (<DrinkCard drink={drink}/>) : (<p>No se pudo</p>) }
                </div>
            </div>
            )};
        </div>
    )


}

export default DrinkPage;