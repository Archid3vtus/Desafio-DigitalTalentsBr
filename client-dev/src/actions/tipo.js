import axios from "axios";

export const listTipo = async () => {
  return await axios.get("/api/tipo/list");
};

export const addTipo = async data => {
  return await axios.post("/api/tipo/add", data);
};
