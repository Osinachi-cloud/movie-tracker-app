import React from "react";
import Modal from "react-modal";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { AddCommentButton, CommentBox, Form, CloseModal } from "./styles";
import { yellow, pink, grey } from "@mui/material/colors";

const AddCommentModal = ({ isOpen, toggleModal }) => {
  return (
    <>
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
    </>
  );
};

export default AddCommentModal;
