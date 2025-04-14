import { api } from "../configs/axiosConfig"

export const signinApi = async (signinInfo) => {
    return await api.post("/auth/signin", signinInfo);
}