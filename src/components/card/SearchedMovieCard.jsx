import React from 'react'
import { pink} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactTooltip from "react-tooltip";
  import {  
    MovieCard,
    MovieImage,
    Title,
    Figure,
    ActionWrapper,
    IconWrapButton,
    IconWrapper,
  
  } from "./styles";
import { useStateValue } from '../../hooks/StateProvider';

const SearchedMovieCard = ({id, original_title,backdrop_path }) => {
  const[{favorites}, dispatch]= useStateValue();



  const addToFavorites =()=>{
    dispatch({
        type:'ADD_TO_FAVORITES',
        item:{
            id:id,
            original_title:original_title,
            backdrop_path:backdrop_path,

        },
    });    
};



  return (
    <>
         <MovieCard >
           
              <Figure>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
                  alt={original_title}
                />
              </Figure>
              <Title>{original_title}</Title>

              <ActionWrapper>
                <IconWrapButton>
                  <IconWrapper onClick={addToFavorites}>
                    <FavoriteIcon
                      data-tip
                      data-for="mark as watched"
                      color="success"
                    />
                  </IconWrapper>
                  <ReactTooltip
                    id="mark as watched"
                    place="bottom"
                    effect="solid"
                  >
                    mark as watched
                  </ReactTooltip>
                </IconWrapButton>

                <IconWrapButton>
                  <IconWrapper>
                    <CheckCircleIcon
                      data-tip
                      data-for="favorites"
                      sx={{ color: pink[500] }}
                    />
                  </IconWrapper>
                  <ReactTooltip id="favorites" place="bottom" effect="solid">
                    add to favorites
                  </ReactTooltip>
                </IconWrapButton>
              </ActionWrapper>
            </MovieCard>


    </>
  )
}

export default SearchedMovieCard