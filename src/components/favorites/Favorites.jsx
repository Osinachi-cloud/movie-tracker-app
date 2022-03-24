import React from 'react'
import { useStateValue } from '../../hooks/StateProvider';

import FavoritesCard from '../card/FavoritesCard';

const Favorites = () => {
    const[{basket}, dispatch]=useStateValue();
  return (
    <div>
        useStateValue
        
        
        <div>  {basket.length}  </div>
    
    <div className="checkout">
            <div className="chechout_left">
                <img className="checkout_ad" src="image/amazon-logo.jpeg"/>
           
           <div>
               <h2 className="checkout_title">
                   Your Shopping Basket
               </h2>
               {basket.map(movie=>
               
               <FavoritesCard
                    id={movie.id}
                    title={movie.title}
                    price={movie.price}
                    image={movie.image}
                    rating={movie.rating}
                    description={movie.description}
                    />
                )} 

           </div>
            </div>
            
            
        
            
        </div>
    
    
    </div>
  )
}

export default Favorites