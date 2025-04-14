import { api } from "../configs/axiosConfig";

export const updatePasswordApi = async ({currentPassword, newPassword}) => await api.put(`/account/users/password`, {currentPassword, newPassword});
export const updateEmailApi = async (email) => await api.put(`/account/users/email`, {email});
export const updatePhoneNumberApi = async (phoneNumber) => await api.put(`/account/users/phone-number`, {phoneNumber});
export const getUserMeApi = async () => await api.get("/account/users/me");

export const signupApi = async (signupInfo) => {
    return await api.post("/admin/users", signupInfo);
}

export const getSearchUserListApi = async (params) => await api.get("/admin/users", {params});
export const updateUserApi = async ({usercode, username, email, phoneNumber}) => await api.put(`/admin/users/${usercode}`, {username, email, phoneNumber});
export const updateUserPasswordApi = async ({usercode, password}) => await api.put(`/admin/users/${usercode}/password`, {password});
export const updateUserAccountApi = async ({usercode}) => await api.put(`/admin/users/${usercode}/account`);