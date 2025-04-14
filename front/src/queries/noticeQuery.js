import { useQuery } from "@tanstack/react-query";
import { getSearchNoticeListApi, getUsercodeNoticeListApi } from "../apis/noticeApi";


export const useGetSearchNoticeList = (params) => useQuery({
    queryKey: ["useGetSearchNoticeList", params],
    queryFn: async () => {
        return await getSearchNoticeListApi(params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 30,
});

export const useGetUsercodeNoticeList = (params) => useQuery({
  queryKey: ["useGetUsercodeNoticeList", params],
  queryFn: async () => {
    return await getUsercodeNoticeListApi(params);
  },
  retry: 0,
  staleTime: 1000 * 60 * 10,
  gcTime: 1000 * 60 * 5,
});


