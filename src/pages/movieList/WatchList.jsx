import React, { useState, useEffect} from "react";
import {
  Container,
  MovieList,
} from "./styles";
 import API from "../../utils/API";
import WatchedListCard from "../../components/card/WatchedListCard";

const WatchList = () => {
  const [watchList, setWatchList] = useState([])


  const watchListTvShows = async ()=>{
    const response = await  API.getWatchList();
    setWatchList(response.results)
  }

useEffect(()=>{
  watchListTvShows()
 
}, [])

  return (
    <Container>
      
      <h2>{watchList?.length}</h2>

      {watchList.length > 0 ? (
        <MovieList>
          {watchList.map((item) => (
            <WatchedListCard
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

export default WatchList;
