import axios from "axios";

export const listTensao = async () => {
  return await axios.get("/api/tensao/list");
};

export const addTensao = async data => {
  return await axios.post("/api/tensao/add", data);
};
