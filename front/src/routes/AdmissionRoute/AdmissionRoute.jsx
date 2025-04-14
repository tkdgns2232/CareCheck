import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TablePage from '../../pages/TablePage/TablePage';
import PaymentCertificatePage from '../../pages/PaymentCertificatePage/PaymentCertificatePage'
import DetailBillPage from '../../pages/DetailBillPage/DetailBillPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function AdmissionRoute(props) {

    return (
        <>
            <Routes>
                <Route path="/" element={<TablePage />} />    
                <Route
                path="/:admissionId/certificate"
                element={<PaymentCertificatePage />}
                />
                <Route
                path="/:admissionId/detailbill"
                element={<DetailBillPage/>}
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default AdmissionRoute;