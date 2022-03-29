import React, {useState, useEffect} from 'react'
import { useStateValue } from '../../stateContext/StateProvider';
import { pink, grey, yellow} from "@mui/material/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import API from '../../utils/API';
import {  
    MovieCard,
    MovieImage,
    Title,
    Figure,
    ActionWrapper,
    IconWrapButton,
    IconWrapper,
    ImgLink
  
  } from "./styles";
import { AddCommentButton, CloseModal, Form, CommentBox } from '../featuredMovie/styles';
// import { yellow, pink, grey } from "@mui/material/colors";


const FavoritesCard = ({id ,name, backdrop_path }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [mediaId, setMediaId] = useState(null)
    const [mediaType, setMediaType]= useState("");
    const [addedToFavorite, setAddedToFavorite] = useState(false)
    const [error, setError] = useState('')

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
      console.log("opened")
      setIsOpen(!isOpen);
    }

 

    const handleAddFavorites = async () => {
      setError(false);
      setMediaId(id)
      setMediaType("tv")
      setAddedToFavorite(true)
      try {
        const result = await API.markAsFavorites(
          mediaType,
          mediaId,
          addedToFavorite
        );
        console.log(result);
        console.log("submited")
        // setUser({ sessionId: sessionId.session_id, username });
        // navigate('/');
      } catch (error) {
        setError(true);
      }
  
  
    };
  



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

<MovieCard >
           
           <Figure>
             <ImgLink to = {`/favorites/${id}`}>
             <MovieImage
               src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
               alt={name}
             />
             
             </ImgLink>
          
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

export default FavoritesCard

