import React from "react";
import { useStateValue } from "../../hooks/StateProvider";
import {NavLink } from 'react-router-dom'
import FavoritesCard from "../../components/card/FavoritesCard";
import {
  Container,
  MovieList,
} from "./styles";

const Favorites = () => {
  const [{ favorites }, dispatch] = useStateValue();
  return (
    <Container>
      <h2>{favorites.length}</h2>

      {favorites.length > 0 ? (
        <MovieList>
          {favorites.map((item) => (
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
