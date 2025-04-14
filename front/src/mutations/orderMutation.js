import { useMutation } from "@tanstack/react-query";
import { orderCreateApi, scorePayInsertApi } from "../apis/orderApi";

export const useCreateOrderMutation = () =>
  useMutation({
    mutationKey: ["useCreateOrderMutation"],
    mutationFn: orderCreateApi,
    retry: 0,
  });

export const useInsertScorePayMutation = () =>
  useMutation({
    mutationKey: ["useInsertScorePayMutation"],
    mutationFn: scorePayInsertApi,
    retry: 0,
  });
