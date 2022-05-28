import React from "react";
import {
  CardContainer,
  Cards,
  CardHeader,
  ContainerImg,
  Image,
  TagPrice,
  TagCategory,
  CardBody,
  CardTitle,
  Seller,
  ContainerDetail,
  Button,
  Span,
} from "./CardPostElements";
import { BiDetail } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { deletePost } from "../Services/Services";

export const CardPost = ({ post }) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return post.map(
    ({ _id, title, image, category, description, state, changeFor }) => (
      <CardContainer>
        <Cards key={_id}>
          <CardHeader>
            <ContainerImg>
              <Image src={image} />
            </ContainerImg>
            <TagPrice>{state}</TagPrice>
            <TagCategory>{category}</TagCategory>
          </CardHeader>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <Seller>
              <Span>Description:</Span> {description} <br />
              <Span>Change For:</Span> {changeFor} <br />
              <Span>State:</Span> {state} <br />
            </Seller>
          </CardBody>
          <ContainerDetail>
            <Button to={`/products/${_id}`}>
              <BiDetail size="25px" />
            </Button>
            <Button to="">
              <AiFillEdit size="25px" />
            </Button>
            <Button onClick={toggle}>
              <AiFillDelete size="25px" />
            </Button>
            <Modal
              isOpen={modal}
              toggle={toggle}
              backdrop="false"
              centered="true"
            >
              <ModalHeader toggle={toggle}>Delete Post</ModalHeader>
              <ModalBody>Are you sure you want to delete the post?</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  No
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    deletePost(_id);
                    const fn = toggle;
                    fn();
                  }}
                >
                  Yes
                </Button>
              </ModalFooter>
            </Modal>
          </ContainerDetail>
        </Cards>
      </CardContainer>
    )
  );
};
