import axios from "axios";

/**
 * Get sensores from server
 */
export const listSensores = async () => {
  return await axios.get("/api/sensor/list");
};
