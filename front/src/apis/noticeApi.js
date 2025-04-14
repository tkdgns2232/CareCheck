import { api } from "../configs/axiosConfig";

export const createNoticeApi = async (notice) =>
  await api.post("/notices", notice);

export const getSearchNoticeListApi = async (params) => 
    await api.get("/notices", {params});

export const getViewCountApi = async (noticeId) =>
    await api.post(`/notices/${noticeId}`);

export const getUsercodeNoticeListApi = async (params) => await api.get("/notices/mylist", {params});

export const getUsercodeBoardListApi = async (params) => await api.get("/notices/", {params});

export const deleteNoticeApi = async(noticeId) => await api.delete(`/notices/${noticeId}`);

export const updateNoticeApi = async ({ noticeId, notice}) => await api.put(`/notices/mylist/${noticeId}`, notice);