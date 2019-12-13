import axios from "axios";

/**
 * Get sensores from server
 */
export const listSensores = async () => {
  return await axios.get("/api/sensor/list");
};

/**
 * Add a new sensor
 */
export const addSensor = async data => {
  return await axios.post("/api/sensor/add", data);
};
