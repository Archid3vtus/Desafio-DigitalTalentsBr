import axios from "axios";

export const listTensao = async () => {
  return await axios.get("/api/tensao/list");
};
