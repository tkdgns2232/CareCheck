import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoticeWritePage from '../../pages/NoticeWritePage/NoticeWritePage';
import NoticeListPage from '../../pages/NoticeListPage/NoticeListPage';
import NoticeModifyPage from '../../pages/NoticeModifyPage/NoticeModifyPage';
import NoticeMyListPage from '../../pages/NoticeMyListPage/NoticeMyListPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function NoticeRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/write" element={<NoticeWritePage />} />
                <Route path="/list" element={<NoticeListPage />} />
                <Route path="/mylist" element={<NoticeMyListPage />} />
                <Route path="/modify/:noticeId"
                element={<NoticeModifyPage />}
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default NoticeRoute;