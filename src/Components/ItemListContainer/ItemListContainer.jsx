
import { useState, useEffect } from 'react'
import axios from 'axios'
import DrinkCard from '../DrinkCard/DrinkCard';
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    const [drinks,setDrinks] = useState([]);

    useEffect(() => {
        axios("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
        .then((inf) => setDrinks(inf.data.drinks));
    },[]);


  return (
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
  )
}

export default ItemListContainer