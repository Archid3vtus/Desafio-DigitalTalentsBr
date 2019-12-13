import axios from "axios";

/**
 * Get list of marca
 */
export const listMarca = async () => {
  return await axios.get("/api/marca/list");
};

/**
 * Register a marca
 */
export const addMarca = async data => {
  return await axios.post("/api/marca/add", data);
};
