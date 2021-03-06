import React, { useState, useEffect} from "react";
import FavoritesCard from "../../components/card/FavoritesCard";
import {
  Container,
  MovieList,
} from "./styles";
 import API from "../../utils/API";

const Favorites = () => {
  const [favoriteTvShows, setFavoriteTvShows] = useState([])

  const fetchFavoritesTvShows = async ()=>{
    const response = await  API.getFavoriteTvShows();
    setFavoriteTvShows(response.results)
  }


useEffect(()=>{
  fetchFavoritesTvShows()
 
}, [])

  return (

    <Container>
      

      {favoriteTvShows && favoriteTvShows.length > 0 ? (
        <MovieList>
          {favoriteTvShows.map((item) => (
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
