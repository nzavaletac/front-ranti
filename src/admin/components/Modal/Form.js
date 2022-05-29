import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container1,
  Column1,
  Form1,
  ImgPreview,
  ContainerInputFile,
  InputFile,
  IconFileUpload,
  ButtonSubmit,
} from "./FormElements";
import { FaUpload } from "react-icons/fa";
import "../Modal/ModalNewPost.css";
import { DEFAULT_IMG } from "../../../environments/nvironments";
import Swal from "sweetalert2";
import { createPost } from "../../Services/Services";

const userId = localStorage.getItem("userId");
const userName = localStorage.getItem("user");

const emptyForm = {
  title: "",
  description: "",
  category: "Select Category",
  state: "Select State",
  changeFor: "",
  district: "",
  creator: userId,
  creatorName: userName,
  image: `${DEFAULT_IMG}`,
};

export const Form = () => {
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const handleImage = (file) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", (e) => setPreview(e.target.result));
    fileReader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const valor = e.target.value;
    setForm({
      ...form,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.image = preview;
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        createPost(form).then((data) => {
          if (data.post._id) {
            setForm(emptyForm);
            Swal.fire({
              title: "Successful",
              text: "Event created successfully",
              icon: "success",
              timer: 3500,
            });
            window.location.haref = "/account/posts";
          } else {
            if (data.error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                timer: 3500,
              });
            }
          }
        });
      }
    });
  };

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:8000",
      url: "/categories",
    }).then(({ data }) => setCategories(data.categories));
  }, []);

  return (
    <Container1>
      <Column1>
        <Form1 onSubmit={handleSubmit}>
          <div className="container">
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="container__input"
              onChange={handleChange}
              value={form.title}
            />
            <label className="container__label">Title</label>
          </div>
          <div className="container">
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="container__input"
              onChange={handleChange}
              value={form.description}
            />
            <label className="container__label">Description</label>
          </div>
          <div className="container">
            <select
              name="category"
              className="container__input"
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option value={cat.title} key={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
            <label className="container__label">Category</label>
          </div>
          <div className="container">
            <select
              name="state"
              className="container__input"
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="New">New</option>
              <option value="Used Like New">Used Like New</option>
              <option value="Used">Used</option>
            </select>
            <label className="container__label">State</label>
          </div>
          <div className="container">
            <input
              name="changeFor"
              type="text"
              placeholder="Change For"
              className="container__input"
              onChange={handleChange}
              value={form.changeFor}
            />
            <label className="container__label">Change For</label>
          </div>
          <div className="container">
            <input
              name="district"
              type="text"
              placeholder="District and Province"
              className="container__input"
              onChange={handleChange}
              value={form.district}
            />
            <label className="container__label">District and Province</label>
          </div>
          <div className="container">
            <ContainerInputFile>
              <InputFile
                className="container__input"
                name="image"
                type="file"
                id="image"
                accept="image/*"
                multiple
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  handleImage(e.target.files[0]);
                }}
              />
              <IconFileUpload>
                <FaUpload size="40px" />
                Upload Image - Format .jpge .png
              </IconFileUpload>
              <label className="container__label">Post Image</label>
            </ContainerInputFile>
          </div>
          <ButtonSubmit className="btn btn-dark mt-4 p-3" type="submit">
            Submit
          </ButtonSubmit>
        </Form1>
        {preview && <ImgPreview src={preview} alt="preview" />}
      </Column1>
    </Container1>
  );
};
