/**@jsxImportSource @emotion/react */
import Select from 'react-select';
import * as s from './style';
import { BiSearch } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetSearchUserList } from '../../queries/userQuery';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import ReactModal from 'react-modal';
import ChangeUserModal from '../../components/modal/Admin/ChangeUserModal/ChangeUserModal';
import { CgPassword } from 'react-icons/cg';
import { useUpdateUserAccountMutation, useUpdateUserPasswordMutation } from '../../mutations/userMutation';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';

function AdminUserInfoPage(props) {
    const queryClient = useQueryClient();
    const updateUserPasswordMutation = useUpdateUserPasswordMutation();
    const updateUserAccountMutation = useUpdateUserAccountMutation();

    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const order = searchParams.get("order") || "all";
    const searchName = searchParams.get("searchName") || "";
    const searchUserList = useGetSearchUserList({
        page,
        limitCount: 15,
        order,
        searchName,
    });

    // roleName 바꾸는 함수
    const roleName = (list) => {
        if(list.userRole.role.roleName === "ROLE_ADMIN") {
            return "관리자";
        } else if(list.userRole.role.roleName === "ROLE_DOCTOR") {
            return "의사";
        } else if(list.userRole.role.roleName === "ROLE_NURSE") {
            return "간호사";
        } else if(list.userRole.role.roleName === "ROLE_STAFF") {
            return "원무";
        }
    }

    // 퇴사 처리 유무
    const isResignation = (list) => {
        if(list.accountEnabled === 1) {
            return "";
        } else {
            return list.updatedAt;
        }
    }

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(searchName);

    const orderSelectOptions = [
        {label: "전체", value: "all"},
        {label: "관리자", value: "ROLE_ADMIN"},
        {label: "의사", value: "ROLE_DOCTOR"},
        {label: "간호사", value: "ROLE_NURSE"},
        {label: "원무", value: "ROLE_STAFF"},
    ];
    
    // ChangeUserModal 을 위한 값
    const [ foundUser, setFoundUser ] = useState({});
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        if(!searchUserList.isLoading) {
            const currentPage = searchUserList?.data?.data.page || 1;
            const totalPages = searchUserList?.data?.data.totalPages || 1;
            const startIndex = (Math.floor((currentPage - 1) / 5) * 5) + 1;
            const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;

            let newPageNumbers = [];
            for(let i = startIndex; i <= endIndex; i++) {
                newPageNumbers = [...newPageNumbers, i];
            }
            setPageNumbers(newPageNumbers);
        }
    }, [searchUserList.data]);

    useEffect(() => {
        searchUserList.refetch();
    }, [searchParams]);

    const handleSelectOnChange = (option) => {
        searchParams.set("order", option.value);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    const handleSearchInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchInputOnKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearchButtonOnClick();
        }
    }

    const handleSearchButtonOnClick = () => {
        searchParams.set("searchName", searchValue);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    const handlePagenumbersOnClick = (pageNumber) => {
        searchParams.set("page", pageNumber);
        setSearchParams(searchParams);
    }

    const handleChangeInfoButtonOnClick = (usercode) => {
        setFoundUser(searchUserList?.data?.data.userSearchList.find(user => user.usercode === usercode));
        setIsOpen(true);
    }    
    const handleChangePasswordButtonOnClick = async (usercode) => {
        const passwordRegex = /^.{4,}$/;
        const { value: password } = await Swal.fire({
            titleText: "초기화 비밀번호 설정",
            html: "<div style='font-size: 1.5rem'>초기화 비밀번호를 입력해주세요</div>",
            input: "text",
            inputValue: "",
            showDenyButton: true,
            confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
            denyButtonText: "<div style='font-size: 1.5rem'>취소</div>",
            reverseButtons: true,
            inputValidator: (value) => {
                if (!value) {
                    return "<div style='font-size: 1.2rem'>초기화 비밀번호를 입력해주세요.</div>";
                }
                if (!passwordRegex.test(value)) {
                    return "<div style='font-size: 1.2rem'>4자리 이상 입력해주세요.</div>"
                }
            }
        });
        if (password) {
            await updateUserPasswordMutation.mutateAsync({usercode: usercode, password: password}).then(response => {
                Swal.fire({
                    icon: "success",
                    titleText: "비밀번호가 초기화 되었습니다",
                    showConfirmButton: false,
                    timer: 1000,
                }).then(response => {
                    queryClient.invalidateQueries(["useGetSearchUserList"]);
                    queryClient.invalidateQueries(["userMeQuery"]);
                });
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    titleText: "에러 발생",
                    html: `<div style='font-size: 1.5rem'>${error.response.data}</div>`,
                    confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
                });
            });
        }
    }
    const handleDeleteButtonOnClick = async (usercode) => {
        const { value: accept } = await Swal.fire({
            icon: "warning",
            titleText: "퇴사 처리하시겠습니까?",
            input: "checkbox",
            inputValue: 0,
            inputPlaceholder: `
                <div style='font-size: 1.5rem'>
                ${usercode} 직원을 퇴사 처리합니다.
                </div>
            `,
            confirmButtonText:"<div style='font-size: 1.5rem'>확인</div>",
            inputValidator: (result) => {
                return !result && "<div style='font-size: 1.3rem'>퇴사 처리하시려면 체크해주세요.</div>";
            }
        });
        if (accept) {
            await updateUserAccountMutation.mutateAsync({usercode})
            .then(response => {
                Swal.fire({
                    icon: "success",
                    titleText: "처리되었습니다",
                    showConfirmButton: false,
                    timer: 1000,
                }).then(response => {
                    queryClient.invalidateQueries(["useGetSearchUserList"]);
                    queryClient.invalidateQueries(["userMeQuery"]);
                });
            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    titleText: "에러 발생",
                    html: `<div style='font-size: 1.5rem'>${error.response.data}</div>`,
                    confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>"
                });
            });
        }
    }
    
    return (
        <div css={s.container}>
            <div css={s.header}>
                <div css={s.title}>
                    <h2>직원 관리</h2>
                </div>
                <div css={s.searchItems}>
                    <Select 
                        options={orderSelectOptions}
                        styles={{
                            control: (style) => ({
                                ...style,
                                width: "11rem",
                                minHeight: "3.2rem",
                                fontSize: 15,
                            }),
                            dropdownIndicator: (style) => ({
                                ...style,
                                padding: "0.3rem",
                            }),
                            menu: (style) => ({
                                ...style,
                                fontSize: "14px",
                            }),
                        }}
                        value={orderSelectOptions.find((options) => options.value === order)}
                        onChange={handleSelectOnChange}
                    />
                    <input css={s.searchInput} type="text"
                        value={searchValue}
                        onChange={handleSearchInputOnChange}
                        onKeyDown={handleSearchInputOnKeyDown}
                        placeholder="이름으로 검색"
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}><BiSearch /></button>
                </div>
            </div>
            <div css={s.main}>
                <ul css={s.userListContainer}>
                    <li>
                        <div>사번</div>
                        <div>이름</div>
                        <div>권한</div>
                        <div>전화번호</div>
                        <div>이메일</div>
                        <div>생성날짜</div>
                        <div>수정날짜</div>
                        <div>퇴사여부</div>
                        <div>수정/PW초기화/퇴사</div>
                    </li>
                    {
                        searchUserList.isLoading ||
                        searchUserList?.data?.data.userSearchList.map(userList =>
                            <li key={userList.index}>
                                <div>{userList.usercode}</div>
                                <div>{userList.username}</div>
                                <div>{roleName(userList)}</div>
                                <div>{userList.phoneNumber}</div>
                                <div>{userList.email}</div>
                                <div>{userList.createdAtDateFormat}</div>
                                <div>{userList.updatedAtDateFormat}</div>
                                <div>{isResignation(userList)}</div>
                                <div>
                                    <button onClick={() => handleChangeInfoButtonOnClick(userList.usercode)}><IoSettingsSharp /></button>
                                    <button onClick={() => handleChangePasswordButtonOnClick(userList.usercode)}><CgPassword /></button>
                                    <button onClick={() => handleDeleteButtonOnClick(userList.usercode)}><MdOutlineCancel /></button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div css={s.footer}>
                <div css={s.pageNumbers}>
                    <button disabled={searchUserList?.data?.data.firstPage} onClick={() => handlePagenumbersOnClick(page - 1)}><GoChevronLeft /></button>
                    {
                        pageNumbers.map(number =>
                            <button key={number} css={s.pageNum(page === number)} onClick={() => handlePagenumbersOnClick(number)}><span>{number}</span></button>
                        )
                    }
                    <button disabled={searchUserList?.data?.data.lastPage} onClick={() => handlePagenumbersOnClick(page + 1)}><GoChevronRight /></button>
                </div>
            </div>
            <ReactModal 
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#00000088"
                    },
                    content: {
                        position: "static",
                        boxSizing: "border-box",
                        borderRadius: "1.5rem",
                        width: "60rem",
                    }
                }}
                children={<ChangeUserModal setOpen={setIsOpen} user={foundUser} />}
            />
        </div>
    );
}

export default AdminUserInfoPage;