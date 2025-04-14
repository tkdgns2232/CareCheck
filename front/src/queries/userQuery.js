import { useQuery } from "@tanstack/react-query";
import { getSearchUserListApi, getUserMeApi } from "../apis/userApi";

export const useUserMeQuery = () => useQuery({
    queryKey: ["userMeQuery"],
    queryFn: getUserMeApi,
    retry: 0,
    staleTime: 1000 * 60 * 20,  // 캐싱
    gcTime: 1000 * 60 * 10,     // refresh 하지 않은 데이터 처리
});

export const useGetSearchUserList = (params) => useQuery({
    queryKey: ["useGetSearchUserList", params],
    queryFn: async () => {
        return await getSearchUserListApi(params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 5,
});