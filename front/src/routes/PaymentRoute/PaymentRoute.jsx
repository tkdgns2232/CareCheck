import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReceiptListPage from '../../pages/ReceiptListPage/ReceiptListPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function PaymentRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/list" element={<ReceiptListPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default PaymentRoute;