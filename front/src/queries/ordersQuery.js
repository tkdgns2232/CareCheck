import { useQuery } from "@tanstack/react-query";
import { orderSearchApi } from "../apis/orderApi";

export const useGetSearchOrders = (keyword) => {
  return useQuery({
    queryKey: ["useGetSearchOrders", keyword],
    queryFn: async () => {
      return await orderSearchApi(keyword);
    },
    enabled: !!keyword,
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
