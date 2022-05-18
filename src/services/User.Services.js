import axios from "axios";
import { URL_BACKEND } from "../environments/nvironments";

export const postUser = async (objUser) => {
  const result = await axios.post(
    `${URL_BACKEND}/user/register`,
    JSON.stringify(objUser),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return result.data;
};
