import React, { useState } from "react";
import { pink, grey, yellow } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import API from "../../utils/API";
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

const FavoritesCard = ({ id, name, backdrop_path }) => {
  const [mediaId, setMediaId] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const [error, setError] = useState("");
  const [addedToWatchList, setAddedToWatchList] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    console.log("opened");
    setIsOpen(!isOpen);
  }

  const handleAddWatchList = async () => {
    console.log("added to watchlist");
    setError(false);
    setMediaId(id);
    console.log(id);
    setMediaType("tv");
    console.log(mediaType);
    setAddedToWatchList(true);
    console.log(addedToWatchList);
    try {
      const result = await API.addToWatchList(
        "tv",
        id,
        true
      );
      console.log(result);
      console.log("submited");
    } catch (e) {
      console.log(error, e);
      setError(true);
    }
    console.log("added to watchlist");
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
            <IconWrapper onClick={handleAddWatchList}>
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


export default FavoritesCard;
