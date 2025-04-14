import { api } from "../configs/axiosConfig";

export const searchUsercodeByRoleIdApi = async (roleId) => {
  return await api.get(`/roles`, {
    params: { roleId },
  });
};
