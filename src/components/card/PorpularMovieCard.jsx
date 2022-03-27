import React ,{useState} from 'react'
import { yellow, pink, grey} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Modal from "react-modal";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';



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
import { useStateValue } from '../../stateContext/StateProvider';
import { AddCommentButton, CloseModal, Form, CommentBox } from '../featuredMovie/styles';


const PorpularMovieCard = ({id, name,backdrop_path }) => {
  const[{favorites}, dispatch]= useStateValue();
  const [isFavorite, setIsFavorite] = useState(false)

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    console.log("opened")
    setIsOpen(!isOpen);
  }

  const removeFromFavorites =()=>{ 
    dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        id: id,
    })
    setIsFavorite(false)
  }

  const addToFavorites =()=>{
    dispatch({
        type:'ADD_TO_FAVORITES',
        item:{
            id:id,
            name:name,
            backdrop_path:backdrop_path,

        },
    });    
    setIsFavorite(true);
};



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
                  <IconWrapper onClick={ !isFavorite? addToFavorites : removeFromFavorites}>
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
                    


                <IconWrapButton onClick={toggleModal}>
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

              <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <CloseModal onClick={toggleModal}>
           <HighlightOffRoundedIcon sx={{ color: grey[500] }}/> 
           </CloseModal>
        <div>
          <Form action="">
            <CommentBox placeholder="make comments"></CommentBox >
            <AddCommentButton>submit</AddCommentButton>
          </Form>
        </div>

      </Modal>


            </MovieCard>


    </>
  )
}

export default PorpularMovieCard