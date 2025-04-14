import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PatientRegistrationPage from '../../pages/PatientRegistrationPage/PatientRegistrationPage';
import MedicalReceptionPage from '../../pages/MedicalReceptionPage/MedicalReceptionPage';
import ReceiptPage from '../../pages/ReceiptPage/ReceiptPage';
import PatientsPage from '../../pages/PatientsPage/PatientsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function PatientRoute(props) {
    return (
        <>
            <Routes>
                 {/* 환자 등록 */}
                <Route path="/" element={<PatientRegistrationPage />} />
                {/* 환자 진료접수 */}
                <Route path="/medical-reception" element={<MedicalReceptionPage />}/>
                {/* 접수된 환자 리스트 */}
                <Route path="/admission-list" element={<ReceiptPage />} />
                {/* 전체 환자 명단 */}
                <Route path="/patients" element={<PatientsPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default PatientRoute;