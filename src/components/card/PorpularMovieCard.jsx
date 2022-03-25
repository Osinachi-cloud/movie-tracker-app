import React ,{useState} from 'react'
import { yellow, pink} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


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

const PorpularMovieCard = ({id, name,backdrop_path }) => {
  const[{basket}, dispatch]= useStateValue();
  const [isFavorite, setIsFavorite] = useState(false)

  const removeFromBasket =()=>{ 
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
    setIsFavorite(!isFavorite)
  }

  const addToBasket =()=>{
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            name:name,
            backdrop_path:backdrop_path,

        },
    });    
    setIsFavorite(!isFavorite);
};



  return (
    <>
         <MovieCard key={id}>
           
              <Figure>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
                  alt={name}
                />
              </Figure>
              <Title>{name}</Title>

              <ActionWrapper>
                <IconWrapButton>
                  <IconWrapper onClick={ !isFavorite? addToBasket : removeFromBasket}>
                    {
                      isFavorite?  (
                        <FavoriteIcon
                        data-tip
                        data-for="mark as watched"
                        color="success"
                      />
                      ) 
                     : (
                      <FavoriteBorderIcon
                      data-tip
                      data-for="addTofavorites"
                      color="success"
                    />

                     )
                    }
                
                  </IconWrapper>
                  <ReactTooltip
                    id="addTofavorites"
                    place="bottom"
                    effect="solid"
                  >
                    {isFavorite? ' add to favorites': ' remove from favorites'}
                    
                  </ReactTooltip>
                </IconWrapButton>

                <IconWrapButton>
                  <IconWrapper>
                    <CheckCircleIcon
                      data-tip
                      data-for="markedAsWatched"
                      sx={{ color: pink[500] }}
                    />
                  </IconWrapper>
                  <ReactTooltip id="markedAsWatched" place="bottom" effect="solid">
                  mark as watched
                   
                  </ReactTooltip>
                </IconWrapButton>
                    


                <IconWrapButton>
                  <IconWrapper>
                    <DriveFileRenameOutlineIcon
                      data-tip
                      data-for="markedAsWatched"
                      sx={{ color: yellow[500] }}
                    />
                  </IconWrapper>
                  <ReactTooltip id="markedAsWatched" place="bottom" effect="solid">
                  make comments
                   
                  </ReactTooltip>
                </IconWrapButton>


              </ActionWrapper>
            </MovieCard>


    </>
  )
}

export default PorpularMovieCard