import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';
import NotFoundAuthPage from '../../pages/NotFoundAuthPage/NotFoundAuthPage';
import { useQueryClient } from '@tanstack/react-query';

function AuthRoute(props) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const queryState = queryClient.getQueryState(["userMeQuery"]);
    
    useEffect(() => {
        if(queryState.status === "success") {
            navigate("/main");
        }
    }, [queryState])

    return queryState.status === "error" &&
        <>
            <Routes>
                <Route path='/signin' element={<LoginPage />} />
                <Route path="/*" element={<NotFoundAuthPage />} />
            </Routes>
        </>
    ;
}

export default AuthRoute;