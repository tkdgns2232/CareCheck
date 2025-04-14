/**@jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetUsercodeNoticeList } from '../../queries/noticeQuery';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import * as s from './style';
import { useDeleteNoticeMutation } from '../../mutations/noticeMutation';
import NoticeMyListModal from '../../components/modal/NoticeMyListModal/NoticeMyListModal';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';

function NoticeMyListPage() {
    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const searchText = searchParams.get("searchText") || "";
    const order = searchParams.get("order") || "default";
    const [ isNoticeModalOpen, setIsNoticeModalOpen ] = useState(false);
    const [ selectedNotice, setSelectedNotice ] = useState(null);
    const queryClient = useQueryClient();
    const searchNoticeList = useGetUsercodeNoticeList({
        page,
        limitCount: 15,
        order,
        searchText,
    });

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(searchText); 
    const deleteNoticeMutation = useDeleteNoticeMutation();

    useEffect(() => {
        if(!searchNoticeList.isLoading) {
            const currentPage = searchNoticeList?.data?.data.page || 1;
            const totalPages = searchNoticeList?.data?.data.totalPages || 1;
            const startIndex = (Math.floor((currentPage - 1) / 5) * 5) + 1;
            const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;
    
            let newPageNumbers = [];
            for(let i = startIndex; i <= endIndex; i++) {
                newPageNumbers = [...newPageNumbers, i];
            }
            setPageNumbers(newPageNumbers);
        }
    }, [searchNoticeList.data]);

    useEffect(() => {
        searchNoticeList.refetch();
    }, [searchParams]);

    const searchOnChange = (e) => {
        setSearchValue(e.target.value)
    };

    const handleSearchInputOnKeyDown = (e) => {
        if(e.key === "Enter") {
            handleSearchButtonOnClick();
        }
    }

    const handleSearchButtonOnClick = () => {
        searchParams.set("searchText", searchValue);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    };

    const handlePagenumbersOnClick = (pageNumber) => {
        searchParams.set("page", pageNumber);
        setSearchParams(searchParams);
    }
    
    const handleWritePageOnClick = () => {
        navigate("/notice/write")
    }

    const handleDeleteNoticeOnClick = (noticeId) => {
        Swal.fire({
            title: "정말 삭제하시겠습니까?",
            icon: "warning",
            showDenyButton: true,
            confirmButtonText: "<div style='font-size: 1.5rem'>삭제</div>",
            denyButtonText: "<div style='font-size: 1.5rem'>취소</div>",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteNoticeMutation.mutate(noticeId, {
                    onSuccess: async () => {
                        await Swal.fire({
                            title: "삭제 완료",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                        queryClient.invalidateQueries(["searchNoticeList"]);
                    },
                    onError: async () => {
                        await Swal.fire({
                            title: "삭제 실패",
                            icon: "error",
                            showConfirmButton: false,
                            timer: 1000,
                        });
                    },
                });
            }
        });
    };
    
    const handleTitleOnClick = (notice) => {
        setSelectedNotice(notice);
        setIsNoticeModalOpen(true);
    }

    return (
        <div css={s.container}>
            <div css={s.header}>
                <h2>
                    내가 쓴 게시글
                    <span>- 총 {searchNoticeList?.data?.data?.totalElements || 0}건 -</span>
                </h2>
                <div css={s.searchItems}>
                    <input
                    css={s.searchInput}
                    type="text"
                    value={searchValue}
                    onChange={searchOnChange}
                    onKeyDown={handleSearchInputOnKeyDown}
                    placeholder='제목으로 검색'
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}>
                    <BiSearch />
                    </button>
                </div>
            </div>
            
            <div css={s.main}>
                <ul css={s.noticeList}>
                    <li>
                        <div>No.</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>등록일</div>
                        <div>삭제</div>
                    </li>
                    {searchNoticeList.isLoading ? (
                        <div>로딩 중...</div>
                        ) : searchNoticeList?.data?.data?.noticeList?.length ? (
                            searchNoticeList.data?.data.noticeList.map((param, index) => (
                                <li key={param.noticeId}>
                                    <div>{searchNoticeList?.data?.data?.totalElements - ((page - 1) * 15 + index)}</div>
                                    <div onClick={() => handleTitleOnClick(param)}>{param.title}</div>
                                    <div>{param.username}</div>
                                    <div>{param.createdAt}</div>
                                    <div>
                                        <button 
                                            css={s.deleteButton} 
                                            onClick={() => handleDeleteNoticeOnClick(param.noticeId)}>
                                            삭제
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                        null
                    )}
                </ul>
            </div>
        
            <div css={s.footer}>
                <div css={s.pageNumbers}>
                    <button 
                        disabled={searchNoticeList?.data?.data?.firstPage} 
                        onClick={() => handlePagenumbersOnClick(page - 1)}
                    >
                        <GoChevronLeft />
                    </button>
                    {
                        pageNumbers.map((number) => (
                        <button
                            key={number}
                            css={s.pageNum(page === number)}
                            onClick={() => handlePagenumbersOnClick(number)}
                        >
                            <span>{number}</span>
                        </button>
                        ))
                    }
        
                    <button 
                        disabled={searchNoticeList?.data?.data?.lastPage} 
                        onClick={() => handlePagenumbersOnClick(page + 1)}
                    >
                        <GoChevronRight />
                    </button>
                </div>
                <div css={s.writeLayout}>
                    <button css={s.writeButton} onClick={handleWritePageOnClick}>글쓰기</button>
                </div>
            </div>
            <NoticeMyListModal
                isOpen={isNoticeModalOpen}
                setIsOpen={setIsNoticeModalOpen}
                notice={selectedNotice}
            />
            
        </div>
        );
}

export default NoticeMyListPage;