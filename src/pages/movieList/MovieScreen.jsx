import React, { useState, useEffect } from "react";
import axios from "axios";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  MovieList,
  SearchInput,
  SearchInputWrapper,
  SearchIconWrapper,
} from "./styles";
import { NavLink } from "react-router-dom";

import PorpularMovieCard from '../../components/card/PorpularMovieCard';
import SearchedMovieCard from "../../components/card/SearchedMovieCard";
import Navbar from "../../components/navbar/Navbar";
import FeaturedMovie from '../../components/featuredMovie/FeaturedMovie';

const MovieScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [porpularMovies, setPorpularMovies] = useState([]);
  const movieURL = `https://api.themoviedb.org/3/tv/popular?api_key=20cd3dc0dd8dbf0f80e53b30fb48b367&language=en-US&page=1`;
  const myMovieURL = `https://api.themoviedb.org/3/search/movie?api_key=20cd3dc0dd8dbf0f80e53b30fb48b367&query`;

  const FetchDataFromApi = async () => {
    const BaseUrl = `https://api.themoviedb.org/3/movie/550?api_key=20cd3dc0dd8dbf0f80e53b30fb48b367`;
    try {
      let response = await axios.get(movieURL);
      console.log(response.data.results);
      setPorpularMovies(response.data.results);
      console.table(response.data.results);
      console.log(typeof( response.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovies = async (title) => {
    const response = await axios.get(`${myMovieURL}=${title}`);
    console.log(response.data.results);
    console.table(response)
    setMovies(response.data.results);
    setPorpularMovies([])
  };

  useEffect(() => {
    FetchDataFromApi();
    searchMovies("");
  }, []);



  return (
    <>    
    
    
    <Container>
      <Navbar/>
      {/* <FeaturedMovie/> */}
      <SearchInputWrapper>
        <SearchInput
          placeholder="Search Movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIconWrapper onClick={() => searchMovies(searchTerm)}>
          <SearchIcon sx={{ color: grey[500] }} />
        </SearchIconWrapper>
      </SearchInputWrapper>


      {movies?.length > 0 ? (
        <MovieList>
          {movies.map((searchMovie) => (
          <SearchedMovieCard
              key={searchMovie.id}
              id={searchMovie.id}
              name={searchMovie.original_title}
              backdrop_path={searchMovie.backdrop_path}

          />
          ))}
        </MovieList>
        
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}

      <MovieList>
        {porpularMovies.length > 0 &&
          porpularMovies?.map((movie) => (
              <PorpularMovieCard
              key={movie.id}
              id={movie.id}
              name={movie.name}
              backdrop_path={movie.backdrop_path}

              />
          ))}
      </MovieList>
    </Container>
    </>

  );
};

export default MovieScreen;
