import axios from "axios";
import { URL_BACKEND } from "../../environments/nvironments";

export const createPost = async (objPost) => {
  const result = await axios.post(
    `${URL_BACKEND}/post`,
    JSON.stringify(objPost),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return result.data;
};

export const deletePost = async (postId) => {
  const result = await axios.delete(`${URL_BACKEND}/post/${postId}`, {
    headers: {
      "Content-type": "application/json",
      //   Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return result.data;
};
