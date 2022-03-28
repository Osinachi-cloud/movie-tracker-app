import React, { useState, useEffect} from "react";
import { yellow, pink, grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Featured, FeaturedVertical, FeaturedHorizontal, FeaturedName, FeaturedInfo, FeaturedPoints, FeaturedYear, FeaturedSeasons, FeaturedDescription, FeaturedButtons, FeaturedWatchButton, FeaturedMyListButton, FeaturedGenres, FeaturedAddNote, FeaturedAddToWatchList, FeaturedMarkFavorites, CloseModal, AddCommentButton, CommentBox, Form } from "./styles";
import Modal from "react-modal";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const item = {
  genres: "Action",
  original_name: "Terminator",
  vote_average: 1657,
  number_of_seasons: 24,
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores, esse temporibus pariatur ratione ipsum totam odio porro, ipsam unde eligendi aperiam itaque, ipsa placeat numquam delectus nobis. Delectus, amet!",
  first_air_date: Date.now(),
};

const ViewSingleMovieDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({})
  const { id } = useParams();

  function toggleModal() {
    console.log("opened")
    setIsOpen(!isOpen);
  }


  console.log(item);

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }



  const getSingleTvDetails =async ()=>{
      try{
        const GET_SINGLE_TV_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=20cd3dc0dd8dbf0f80e53b30fb48b367&append_to_response=videos`
        console.log(GET_SINGLE_TV_URL)
        // const response = await ( await fetch(GET_SINGLE_TV_URL)).json()
        const data = await fetch(GET_SINGLE_TV_URL)
        console.table(data)
        const response = await data.json()
        console.log(typeof(response))
        console.table(response)
        setMovieDetails(response)
        console.log(response)
        console.log(id)

      }catch(e){
            console.log(e)
      }

  }

  useEffect(()=>{
    getSingleTvDetails()
  },[])


  return (
    <Featured
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",

        // backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        backgroundImage: `url(https://image.tmdb.org/t/p/w400/${movieDetails.backdrop_path})`,
      }}
    >   
      <FeaturedVertical>
        <FeaturedHorizontal>




          <FeaturedName>{movieDetails.original_title}</FeaturedName>




          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} {movieDetails.original_title} {movieDetails.type}pontos</FeaturedPoints>
            <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>
              {item.number_of_seasons} season
              {item.number_of_seasons !== 1 ? "s" : ""}
            </FeaturedSeasons>
          </FeaturedInfo>
          <FeaturedDescription>{movieDetails.overview}</FeaturedDescription>
          <FeaturedButtons>
            <FeaturedWatchButton to="">
              {" "}
              <FavoriteIcon color="success" size={13} /> 
              <FeaturedMarkFavorites>mark as favorites</FeaturedMarkFavorites>
            
            </FeaturedWatchButton>
            <FeaturedMyListButton to="">
              <CheckCircleIcon sx={{ color: pink[500] }} size={13} />
              <FeaturedAddToWatchList>add to watch list</FeaturedAddToWatchList>

            </FeaturedMyListButton>
            <FeaturedMyListButton to="" onClick={toggleModal}>
              <DriveFileRenameOutlineIcon
                sx={{ color: yellow[500] }}
                size={13}
              />
              <FeaturedAddNote>add to watch list</FeaturedAddNote>

            </FeaturedMyListButton>
          </FeaturedButtons>
          <FeaturedGenres>
            <strong>Gêneros:</strong> {"hello boy my man"}
          </FeaturedGenres>
        </FeaturedHorizontal>
      </FeaturedVertical>
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

    </Featured>
  );
};
export default ViewSingleMovieDetails;
