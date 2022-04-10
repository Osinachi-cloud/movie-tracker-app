import React, { useState } from "react";
import { yellow, pink, grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Modal from "react-modal";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import API from "../../utils/API";

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
  ImgLink,
} from "./styles";
import {
  AddCommentButton,
  CloseModal,
  Form,
  CommentBox,
} from "../../pages/header/styles";

const PorpularMovieCard = ({ id, name, backdrop_path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mediaId, setMediaId] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  const [error, setError] = useState("");

  function toggleModal() {
    setIsOpen(!isOpen);
  }

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
 
    } catch (e) {
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

  return (
    <>
      <MovieCard>
        <Figure>
          <ImgLink to={`/favorites/${id}`}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
              alt={name}
            />
          </ImgLink>
        </Figure>
        <Title>{name}</Title>

        <ActionWrapper>
          <IconWrapButton>
            <IconWrapper onClick={handleAddFavorites}>
              {addedToFavorite ? (
                <FavoriteIcon
                  data-tip
                  data-for="add to Favorites"
                  color="success"
                />
              ) : (
                <FavoriteBorderIcon
                  data-tip
                  data-for="addTofavorites"
                  color="success"
                />
              )}
            </IconWrapper>
            <ReactTooltip id="addTofavorites" place="bottom" effect="solid">
              add to favorites
            </ReactTooltip>
          </IconWrapButton>

          <IconWrapButton>
            <IconWrapper onClick={handleAddWatchList}>
              <CheckCircleIcon
                data-tip
                data-for="markedAsWatched"
                sx={{ color: pink[500] }}
              />
            </IconWrapper>
            <ReactTooltip id="markedAsWatched" place="bottom" effect="solid">
              add to watchlist
            </ReactTooltip>
          </IconWrapButton>

          <IconWrapButton onClick={toggleModal}>
            <IconWrapper>
              <DriveFileRenameOutlineIcon
                data-tip
                data-for="makecomment"
                sx={{ color: yellow[500] }}
              />
            </IconWrapper>
            <ReactTooltip id="makecomment" place="bottom" effect="solid">
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
            <HighlightOffRoundedIcon sx={{ color: grey[500] }} />
          </CloseModal>
          <div>
            <Form action="">
              <CommentBox placeholder="make comments"></CommentBox>
              <AddCommentButton>submit</AddCommentButton>
            </Form>
          </div>
        </Modal>
      </MovieCard>
    </>
  );
};

export default PorpularMovieCard;
