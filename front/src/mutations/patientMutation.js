import { useMutation } from "@tanstack/react-query";
import { addPatientApi } from "../apis/patientsApi";

export const usePatientMutation = () => useMutation({
    mutationKey: ["PatientMutation"],
    mutationFn: addPatientApi,
    retry: 0,
});