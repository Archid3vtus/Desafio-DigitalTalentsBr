import axios from "axios";

export const listMedidas = async sensor_id => {
  return await axios.get(`/api/medida/list/${sensor_id}`);
};

export const addMedida = async newMedida => {
  return await axios.post("/api/medida/add", newMedida);
};
