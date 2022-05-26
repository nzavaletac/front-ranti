import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container1, Column1, FormH1, Form1 } from "./FormElements";

export const Form = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
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
          <input
            name="image"
            type="file"
            placeholder="District and Province"
            className="container__input"
            // onChange={"handleChange"}
            // value={"form.name"}
          />
          <label className="container__label">District and Province</label>
        </div>
      </Column1>
    </Container1>
  );
};
