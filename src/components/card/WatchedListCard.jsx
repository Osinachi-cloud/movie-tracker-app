import React, { useState } from "react";
import { yellow, grey } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Modal from "react-modal";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import API from "../../utils/API";

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

const WatchedListCard = ({ id, name, backdrop_path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mediaId, setMediaId] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [error, setError] = useState("");

  function toggleModal() {
    console.log("opened");
    setIsOpen(!isOpen);
  }

  const handleAddFavorites = async () => {
    console.log("added to favorite 1");
    setError(false);
    setMediaId(id);
    console.log(id);
    setMediaType("tv");
    console.log(mediaType);
    setAddedToFavorite(true);
    console.log(addedToFavorite);
    try {
      const result = await API.markAsFavorites(
        mediaType,
        mediaId,
        addedToFavorite
      );
      console.log(result);
      console.log("submited");
    } catch (e) {
      console.log(e, error);
      setError(true);
    }
    console.log("added to favorite 2");
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
            >
              {" "}
              add to favorites
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

export default WatchedListCard;
