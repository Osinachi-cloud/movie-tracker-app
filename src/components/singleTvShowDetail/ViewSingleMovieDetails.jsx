import React, { useState, useEffect } from "react";
import { yellow, pink, grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Featured,
  FeaturedVertical,
  FeaturedHorizontal,
  FeaturedName,
  FeaturedInfo,
  FeaturedPoints,
  FeaturedYear,
  FeaturedSeasons,
  FeaturedDescription,
  FeaturedButtons,
  FeaturedWatchButton,
  FeaturedMyListButton,
  FeaturedGenres,
  FeaturedAddNote,
  FeaturedAddToWatchList,
  FeaturedMarkFavorites,
  CloseModal,
  AddCommentButton,
  CommentBox,
  Form,
} from "./styles";
import Modal from "react-modal";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  SearchInputWrapper,
  SearchInput,
  SearchIconWrapper,
} from "../movieList/styles";
import API from "../../utils/API";

const ViewSingleMovieDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const [mediaId, setMediaId] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  const { id } = useParams();
  const [error, setError] = useState("");

  function toggleModal() {
    console.log("opened");
    setIsOpen(!isOpen);
  }

  let firstDate = new Date();

  const getSingleTvDetails = async () => {
    try {
      const GET_SINGLE_TV_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=20cd3dc0dd8dbf0f80e53b30fb48b367&append_to_response=videos`;
      const data = await fetch(GET_SINGLE_TV_URL);
      const response = await data.json();

      setMovieDetails(response);

    } catch (e) {
      console.log(e, error);
    }
  };

  const handleAddFavorites = async () => {
    setError(false);
    setMediaId(id);
    setMediaType("tv");
    setAddedToFavorite(true);
    try {
      const result = await API.markAsFavorites(
        "tv",
        id,
        true
      );

    } catch (error) {
      setError(true);
    }
  };

  const handleAddWatchList = async () => {
    setError(false);
    setMediaId(id);
    setMediaType("tv");
    setAddedToWatchList(true);
    try {
      const result = await API.addToWatchList(
        "tv",
        id,
        true
      );
  

    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getSingleTvDetails();
  }, []);

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
            <FeaturedPoints>
              {movieDetails.original_title} {movieDetails.first_air_date}
            </FeaturedPoints>
            <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>
              {movieDetails.number_of_seasons}
              {movieDetails.number_of_seasons > 1 ? "seasons" : ""}
            </FeaturedSeasons>
          </FeaturedInfo>
          <FeaturedDescription>{movieDetails.overview}</FeaturedDescription>
          <FeaturedButtons>
            <FeaturedWatchButton onClick={handleAddFavorites} to="">
              {" "}
              <FavoriteIcon color="success" size={13} />
              <FeaturedMarkFavorites>mark as favorites</FeaturedMarkFavorites>
            </FeaturedWatchButton>
            <FeaturedMyListButton onClick={handleAddWatchList} to="">
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
          I am a React Developer
          </FeaturedGenres>
        </FeaturedHorizontal>
      </FeaturedVertical>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <CloseModal onClick={toggleModal}>
          <HighlightOffRoundedIcon sx={{ color: grey[500] }} />
        </CloseModal>
        <div>
          <Form action="">
            <CommentBox placeholder="make comments"></CommentBox>
            <AddCommentButton>submit</AddCommentButton>
          </Form>
        </div>
      </Modal>
    </Featured>
  );
};
export default ViewSingleMovieDetails;
