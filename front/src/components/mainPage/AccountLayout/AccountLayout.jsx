/**@jsxImportSource @emotion/react */
import { useQueryClient } from '@tanstack/react-query';
import * as s from './style';
import { RiAdminFill } from 'react-icons/ri';
import { FaPlus, FaUserDoctor, FaUserNurse } from 'react-icons/fa6';
import { BiSupport } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function AccountLayout(props) {
    const queryClient = useQueryClient();
    const loginUser = queryClient.getQueryData(["userMeQuery"]);
    const navigate = useNavigate();

    const roleName = (loginUser) => {
        if(loginUser?.data?.userRole.role.roleName === "ROLE_ADMIN") {
            return "관리자";
        } else if(loginUser?.data?.userRole.role.roleName === "ROLE_DOCTOR") {
            return "의사";
        } else if(loginUser?.data?.userRole.role.roleName === "ROLE_NURSE") {
            return "간호사";
        } else if(loginUser?.data?.userRole.role.roleName === "ROLE_STAFF") {
            return "원무";
        }
    }

    const handleAccountLayerButtonOnClick = () => {
        navigate("/account/info");
    }

    return (
        <>
            <div css={s.container}>
                <div css={s.title}>
                    <p>Account</p>
                    <button css={s.navigateButton} onClick={handleAccountLayerButtonOnClick}><FaPlus /></button>
                </div>
                <div css={s.main}>
                    <div css={s.profileImgBox}>
                        {
                            loginUser?.data?.userRole.roleId === 1 &&
                            <RiAdminFill />
                        }
                        {
                            loginUser?.data?.userRole.roleId === 2 &&
                            <FaUserDoctor />
                        }
                        {
                            loginUser?.data?.userRole.roleId === 3 &&
                            <FaUserNurse />
                        }
                        {
                            loginUser?.data?.userRole.roleId === 4 &&
                            <BiSupport />
                        }
                    </div>
                    <div css={s.userBox}>
                        <div css={s.userInfoBox}>
                            <div css={s.usernameBox}>
                                <span>{loginUser?.data?.username}</span>
                                <span> 님</span>
                            </div>
                        </div>
                        <div css={s.userInfoBox}>
                            <div css={s.accountBox}>
                                <div css={s.infoTitle}>
                                    사 원 번 호
                                </div>
                                <div>{loginUser?.data?.usercode}</div>
                            </div>
                            <div css={s.accountBox}>
                                <div css={s.infoTitle}>
                                    권 한
                                </div>
                                <div>{roleName(loginUser)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountLayout;