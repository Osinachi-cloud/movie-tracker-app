import React, { useState } from "react";
import { yellow, pink, grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
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

const item = {
  genres: "All Genres",
  original_name: "TV shows I’ve watched",
  vote_average: 1657,
  number_of_seasons: 24,
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores, esse temporibus pariatur ratione ipsum totam odio porro, ipsam unde eligendi aperiam itaque, ipsa placeat numquam delectus nobis. Delectus, amet!",
  first_air_date: Date.now(),
};

const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    console.log("opened");
    setIsOpen(!isOpen);
  }

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <Featured
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${"https://images.unsplash.com/photo-1514514188727-ff38e839635e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})`,
      }}
    >
      <FeaturedVertical>
        <FeaturedHorizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
            <FeaturedYear>{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>
              {item.number_of_seasons} season
              {item.number_of_seasons !== 1 ? "s" : ""}
            </FeaturedSeasons>
          </FeaturedInfo>
          <FeaturedDescription>{item.overview}</FeaturedDescription>
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
          {/* <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div> */}
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
export default HeaderPage;
