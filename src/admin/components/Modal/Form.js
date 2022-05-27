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
} from "./FormElements";
import { FaUpload } from "react-icons/fa";
import "../Modal/ModalNewPost.css";

export const Form = () => {
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (file) => {
    // const fileReader = new FileReader();
    // fileReader.addEventListener("loadstart", () =>
    //   console.log("Generating preview")
    // );
    // fileReader.addEventListener("load", (e) => setPreview(e.target.result));
    // fileReader.addEventListener("error", (err) => console.log(err));
    // fileReader.addEventListener("loadend", () => console.log("Process ended"));
    // fileReader.readAsDataURL(file);
    const result = URL.createObjectURL(file);
    setPreview(result);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", "simon");
    formData.append("email", "simon@test.com");
    formData.append("file", file.filename);
    console.log(formData);
    console.log(formData.get("email"));
    axios({
      method: "POST",
      baseURL: "http://localhost:8000",
      url: "/users/profile",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

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
              // onChange={"handleChange"}
              // value={"form.name"}
            />
            <label className="container__label">Title</label>
          </div>
          <div className="container">
            <input
              name="name"
              type="text"
              placeholder="Description"
              className="container__input"
              // onChange={"handleChange"}
              // value={"form.name"}
            />
            <label className="container__label">Description</label>
          </div>
          <div className="container">
            <select name="category" id="" className="container__input">
              {categories.map((cat) => (
                <option value="" key={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
            <label className="container__label">Category</label>
          </div>
          <div className="container">
            <select name="state" id="" className="container__input">
              <option value="">New</option>
              <option value="">Used Like New</option>
              <option value="">Used</option>
            </select>
            <label className="container__label">State</label>
          </div>
          <div className="container">
            <input
              name="change"
              type="text"
              placeholder="Change For"
              className="container__input"
              // onChange={"handleChange"}
              // value={"form.name"}
            />
            <label className="container__label">Change For</label>
          </div>
          <div className="container">
            <input
              name="location"
              type="text"
              placeholder="District and Province"
              className="container__input"
              // onChange={"handleChange"}
              // value={"form.name"}
            />
            <label className="container__label">District and Province</label>
          </div>
          <div className="container">
            <ContainerInputFile>
              <InputFile
                className="container__input"
                name="image"
                type="file"
                id="name"
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
        </Form1>
        {preview && <ImgPreview src={preview} alt="preview" />}
      </Column1>
    </Container1>
  );
};
