/**@jsxImportSource @emotion/react */
import * as s from "./style";
import MainSidebar from "../../components/common/MainSidebar/MainSidebar";
import NoTitleHeaderMenu from "../../components/NoTitleHeaderMenu/NoTitleHeaderMenu";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserRoute from "../UserRoute/UserRoute";
import AccountRoute from "../AccountRoute/AccountRoute";
import MainPage from "../../pages/MainPage/MainPage";
import PaymentRoute from "../PaymentRoute/PaymentRoute";
import PatientRoute from "../PatientRoute/PatientRoute";
import AdmissionRoute from "../AdmissionRoute/AdmissionRoute";
import SummaryRoute from "../SummaryRoute/SummaryRoute";
import NoticeRoute from "../NoticeRoute/NoticeRoute";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from 'react';

function MainRoute() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const queryState = queryClient.getQueryState(["userMeQuery"]);
  
  useEffect(() => {
    if(queryState.status === "error") {
      navigate("/auth/signin");
    }
  }, [queryState])

  return queryState.status === "success" &&
    <>
      <div css={s.containerStyle}>
        <MainSidebar />
        <div css={s.contentStyle}>
          <NoTitleHeaderMenu />
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/account/*" element={<AccountRoute />} />
            <Route path="/admin/*" element={<UserRoute />} />
            <Route path="/payment/*" element={<PaymentRoute />} /> 
            <Route path="/patient/*" element={<PatientRoute />} />
            <Route path="/admission/*" element={<AdmissionRoute/>} />
            <Route path="/summary/*" element={<SummaryRoute />} />
            <Route path="/notice/*" element={<NoticeRoute />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  ;
}

export default MainRoute;
