import { api } from "../configs/axiosConfig";

export const searchDeseaseApi = async (keyword) => {
  return await api.get(`/diseases`, {
    params: { diseaseName: keyword },
  });
};
