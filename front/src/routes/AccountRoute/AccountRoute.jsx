import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountPage from '../../pages/AccountPage/AccountPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function AccountRoute(props) {
    return (
        <>
            <Routes>
                <Route path='/info' element={<AccountPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default AccountRoute;