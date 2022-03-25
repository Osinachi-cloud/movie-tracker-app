import React from "react";
import { useStateValue } from "../../hooks/StateProvider";
import {NavLink } from 'react-router-dom'
import FavoritesCard from "../card/FavoritesCard";
import {
  Container,
  MovieList,
} from "./styles";

const Favorites = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Container>
      <NavLink to="/"> Back to home</NavLink>
      <h2>{basket.length}</h2>

      {basket.length > 0 ? (
        <MovieList>
          {basket.map((item) => (
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
