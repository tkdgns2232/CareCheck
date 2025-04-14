import { useQuery } from "@tanstack/react-query";
import {
  searchTotalSummaryApi,
  searchTotalSummaryByUsercodeApi,
} from "../apis/summaryApi";
export const useGetTotalSummary = (year) => {
  return useQuery({
    queryKey: ["useGetTotalSummary", year],
    queryFn: async () => {
      return await searchTotalSummaryApi(year);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!year,
  });
};

export const useGetTotalSummaryByUsercode = (usercode, year) => {
  return useQuery({
    queryKey: ["useGetTotalSummaryByUsercode", usercode, year],
    queryFn: async () => {
      return await searchTotalSummaryByUsercodeApi({ usercode, year });
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!usercode && !!year,
  });
};
