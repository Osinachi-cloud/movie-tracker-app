import React from 'react'
import { useStateValue } from '../../hooks/StateProvider';
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

const FavoritesCard = ({id, name,backdrop_path }) => {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket =()=>(
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    )
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
               <IconWrapper onClick={removeFromBasket}>
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

export default FavoritesCard

