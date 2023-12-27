
import { useState, useEffect } from 'react'
import axios from 'axios'
import DrinkCard from '../DrinkCard/DrinkCard';
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
    const [drinks,setDrinks] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
        .then((inf) => {
            setDrinks(inf.data.drinks);
            setLoading(false)    
        });
        
    },[]);

    
    return(
        <div>
    {(loading === false) ? (
        <div className='grid' style={{columnGap: "2vh", rowGap:"2vh"}}>
            {drinks.map((drink) =>{
                return(
                
                    <Link to={`/drink/${drink.idDrink}`}>
                        <div key={drink.idDrink}>
                            <DrinkCard drink={drink} />
                        </div>
                    </Link>
                )
            })}
            {console.log(drinks)}
        </div>
    ) : ( <div style={{display:"flex", alignItems:"center", justifyContent:"center",marginBottom:"2vh"}}>
            <Spinner /> 
         </div>)}
    </div>
    )
}

export default ItemListContainer