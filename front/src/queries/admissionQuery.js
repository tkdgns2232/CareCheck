import { useQuery } from "@tanstack/react-query";
import {
  searchDetailBillByAdmApi,
  searchPatientInfoByAdmApi,
  searchTotalPayByAdmApi,
  selectVitalByAdmApi,
  searchAllWaitingListApi,
  searchAdmissionListApi,
  searchWaitingListApi,
  searchPatientsApi,
} from "../apis/admissionApi";

export const useGetSearchDetailBill = (admissionId) => {
  return useQuery({
    queryKey: ["useGetSearchDetailBill", admissionId],
    queryFn: async () => {
      return await searchDetailBillByAdmApi(admissionId);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!admissionId,
  });
};

export const useGetSearchPatientInfo = (admissionId) => {
  return useQuery({
    queryKey: ["useGetSearchPatientInfo", admissionId],
    queryFn: async () => {
      return await searchPatientInfoByAdmApi(admissionId);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};

export const useGetSearchTotalPay = (admissionId) => {
  return useQuery({
    queryKey: ["useGetSearchTotalPay", admissionId],
    queryFn: async () => {
      return await searchTotalPayByAdmApi(admissionId);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!admissionId,
  });
};

export const useGetSelectVital = (admissionId) => {
  return useQuery({
    queryKey: ["useGetSelectVital", admissionId],
    queryFn: async () => {
      return await selectVitalByAdmApi(admissionId);
    },
    enabled: !!admissionId,
  });
};

export const useGetSearchWaitingList = () => {
  return useQuery({
    queryKey: ["useGetSearchWaitingList"],
    queryFn: async () => {
      return await searchWaitingListApi();
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};

export const useGetSearchAllWaitingList = (params) =>
  useQuery({
    queryKey: ["useGetSearchAllWaitingList", params],
    queryFn: async () => {
      return await searchAllWaitingListApi(params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });

export const useGetSearchAdmissionListByParams = (params) => {
  return useQuery({
    queryKey: ["useGetSearchAdmissionListByParams", params],
    queryFn: async () => {
      return await searchAdmissionListApi(params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!params.patientName.trim(),
  });
};

export const useGetSearchPatients = (params) =>
  useQuery({
    queryKey: ["useGetSearchPatients", params],
    queryFn: async () => {
      return await searchPatientsApi(params);
    },
    retry: 0,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
