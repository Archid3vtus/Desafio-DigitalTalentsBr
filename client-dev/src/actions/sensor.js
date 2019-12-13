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

/**
 * Delete a sensor
 */
export const deleteSensor = async id => {
  return await axios.delete(`/api/sensor/remove/${id}`);
};
