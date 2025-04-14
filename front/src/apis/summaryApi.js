import { api } from "../configs/axiosConfig";

export const searchTotalSummaryApi = async (year) => {
  return await api.get(`/summary`, {
    params: { year },
  });
};

export const searchTotalSummaryByUsercodeApi = async ({ usercode, year }) => {
  return await api.get(`/summary/usercode`, {
    params: { usercode, year },
  });
};
