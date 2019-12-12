import axios from "axios";

/**
 * Get list of marca
 */
export const listMarca = async () => {
  return await axios.get("/api/marca/list");
};
