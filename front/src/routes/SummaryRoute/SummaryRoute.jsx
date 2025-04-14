import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SummaryChartPage from '../../pages/SummaryChartPage/SummaryChartPage';
import SummaryChartUsercodePage from '../../pages/SummaryChartUsercodePage/SummaryChartUsercodePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function SummaryRoute(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<SummaryChartPage />} />
                <Route
                path="/usercode"
                element={<SummaryChartUsercodePage />}
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default SummaryRoute;