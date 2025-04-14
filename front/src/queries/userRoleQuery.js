import { useQuery } from "@tanstack/react-query";
import { searchUsercodeByRoleIdApi } from "../apis/userRoleApi";

export const useGetUsercodeByRoleId = (roleId) => {
  return useQuery({
    queryKey: ["useGetUsercodeByRoleId", roleId],
    queryFn: async () => {
      return await searchUsercodeByRoleIdApi(roleId);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!roleId,
  });
};
