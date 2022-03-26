import React, {useState} from 'react'
import { useStateValue } from '../../hooks/StateProvider';
import { pink} from "@mui/material/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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

const FavoritesCard = ({id,name, backdrop_path }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const [{favorites}, dispatch] = useStateValue();
    const removeFromFavorites =()=>{
        dispatch({
            type: 'REMOVE_FROM_FAVORITES',
            id: id,
        })
        setIsFavorite(!isFavorite)
    }
  return (
    <>

<MovieCard>
           
           <Figure>
             <MovieImage
               src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
               alt={name}
             />
           </Figure>
           <Title>{name}</Title>

           <ActionWrapper>
             <IconWrapButton>
               <IconWrapper onClick={removeFromFavorites}>
                 <FavoriteBorderIcon
                   data-tip
                   data-for="removeFromfavorites"
                   color="success"
                 />
               </IconWrapper>
               <ReactTooltip
                 id="removeFromfavorites"
                 place="bottom"
                 effect="solid"
               >   { isFavorite? 'add to favorites' : "remove from favorites" }
                 
               </ReactTooltip>
             </IconWrapButton>

             <IconWrapButton>
               <IconWrapper>
                 <CheckCircleIcon
                   data-tip
                   data-for="markedWatch"
                   sx={{ color: pink[500] }}
                 />
               </IconWrapper>
               <ReactTooltip id="markedWatch" place="bottom" effect="solid">
                    mark as watched
               </ReactTooltip>
             </IconWrapButton>
           </ActionWrapper>
         </MovieCard>

    </>
  )
}

export default FavoritesCard

