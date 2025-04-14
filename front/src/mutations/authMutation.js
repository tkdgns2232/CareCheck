import { useMutation } from "@tanstack/react-query";
import { signinApi } from "../apis/authApi";

export const useSigninMutation = () => useMutation({
    mutationKey: ["signinMutation"],
    mutationFn: signinApi,
    retry: 0,
});
