import React, { useState, useEffect} from "react";
import { useStateValue } from "../../stateContext/StateProvider";
import {NavLink } from 'react-router-dom'
import FavoritesCard from "../../components/card/FavoritesCard";
import {
  Container,
  MovieList,
} from "./styles";
 import API from "../../utils/API";

const Favorites = () => {
  const [{ favorites }, dispatch] = useStateValue();
  const [favotiteTvShows, setFavoriteTvShows] = useState([])

  const fetchFavoritesTvShows = async ()=>{
    const response = await  API.getFavoriteTvShows();
    console.log(response.results)
    console.log(typeof(response.results))
    console.log(typeof(response))
    console.log(response)
    setFavoriteTvShows(response.results)
  }


useEffect(()=>{
  fetchFavoritesTvShows()
 
}, [])

  return (
    
    <Container>
      
      {/* <h2>{favotiteTvShows?.length}</h2> */}

      {favotiteTvShows.length > 0 ? (
        <MovieList>
          {favotiteTvShows.map((item) => (
            <FavoritesCard
              id={item.id}
              name={item.name}
              backdrop_path={item.backdrop_path}
            />
          ))}
        </MovieList>
      ) : (
        <div>
          <h2>No Favorite List</h2>
        </div>
      )}
    </Container>
  );
};

export default Favorites;
