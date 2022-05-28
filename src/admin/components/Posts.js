import axios from "axios";
import React, { useState, useEffect } from "react";
import { CardPost } from "./CardPost";
import { Button, Container, ContainerButton } from "./PostsElements";
import { SearchPost } from "./SearchPost";
import { MdAddCircle } from "react-icons/md";
import { ModalNewPost } from "./Modal/ModalNewPost";

export const Posts = () => {
  const [post, setPost] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:8000",
      url: "/post",
    }).then(({ data }) => setPost(data.posts));
  }, []);

  return (
    <>
      <ModalNewPost
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Container>
        <ContainerButton>
          <Button onClick={handleShow}>
            <MdAddCircle size="25px" />
            Add New Post
          </Button>
          <SearchPost />
        </ContainerButton>
        <CardPost post={post} />
      </Container>
    </>
  );
};
