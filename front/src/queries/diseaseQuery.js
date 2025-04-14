import { useQuery } from "@tanstack/react-query";
import { searchDeseaseApi } from "../apis/diseaseApi";

export const useGetSearchDisease = (keyword) => {
  return useQuery({
    queryKey: ["useGetSearchDisease", keyword],
    queryFn: async () => {
      return await searchDeseaseApi(keyword);
    },
    enabled: !!keyword,
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
