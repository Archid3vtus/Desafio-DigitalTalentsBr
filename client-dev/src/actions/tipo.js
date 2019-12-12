import axios from "axios";

export const listTipo = async () => {
  return await axios.get("/api/tipo/list");
};
