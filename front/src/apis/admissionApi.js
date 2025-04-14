import { api } from "../configs/axiosConfig";

export const insertVitalByAdmApi = async (vitalInfo) => {
  return await api.post(
    `/admission/${vitalInfo.admissionId}/vitals`,
    vitalInfo
  );
};

export const searchWaitingListApi = async () => await api.get("/admission/waitings")

export const selectVitalByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/vitals`);
};

export const searchDetailBillByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/billings`);
};

export const searchPatientInfoByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}`);
};

export const searchTotalPayByAdmApi = async (admissionId) => {
  return await api.get(`/admission/${admissionId}/totalpay`);
};

export const insertOrdersApi = async ({ admissionId, ordersList }) => {
  return await api.post(`/admission/${admissionId}/orders`, ordersList);
};

export const insertDiagnosisApi = async ({ admissionId, diagnosisList }) => {
  return await api.post(`/admission/${admissionId}/diagnosis`, diagnosisList);
};

export const updateStartDate = async (admissionId) => {
  return await api.put(`/admission/${admissionId}/start`);
};

export const updateEndDate = async (admissionId) => {
  return await api.put(`/admission/${admissionId}/complete`);
};

export const searchAllWaitingListApi = async (params) => {
  return await api.get(`/admission/todaywaitings`, {params});
};

export const deleteReceiptApi = async (admissionId) => await api.delete(`/admission/${admissionId}`);;

export const searchAdmissionListApi = async (params) => await api.get("/admission/admission-list", {params});;

export const searchPatientsApi = async (params) => await api.get("/admission/patients", {params})

export const admissionApi = async ({patientId, clinicDeft, usercode}) => {
  return await api.post("/admission", {patientId, clinicDeft, usercode})
};
