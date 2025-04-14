import { atom } from "recoil";

export const waitingListAdmId = atom({
  key: "admissionId",
  default: null,
});

export const openDiseaseModal = atom({
  key: "openDiseaseModal",
  default: false,
});

export const openOrdersModal = atom({
  key: "openOrdersModal",
  default: false,
});

export const diagnosisDisease = atom({
  key: "diagnosisDisease",
  default: [],
});

export const diagnosisOrders = atom({
  key: "diagnosisOrders",
  default: [],
});

