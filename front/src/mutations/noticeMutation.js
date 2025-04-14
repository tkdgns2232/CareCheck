import { useMutation } from "@tanstack/react-query";
import { createNoticeApi, deleteNoticeApi, getViewCountApi, updateNoticeApi } from "../apis/noticeApi";

export const useCreateNoticeMutation = () => useMutation({
  mutationKey: ["useCreateNoticeMutation"],
  mutationFn: createNoticeApi,
  retry: 0,
})

export const useViewCountMutation = () => useMutation({
  mutationKey: ["useViewCountMutation"],
  mutationFn: getViewCountApi,
  retry: 0,
})

export const useDeleteNoticeMutation = () => useMutation({
  mutationKey: ["useDeleteNoticeMutation"],
  mutationFn: deleteNoticeApi,
  retry: 0,
})

export const useModifyNoticeMutation = () => useMutation({
  mutationKey: ["useModifyNoticeMutation"],
  mutationFn: updateNoticeApi,
  retry: 0,
});
