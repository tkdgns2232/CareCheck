/**@jsxImportSource @emotion/react */
import Select from 'react-select';
import * as s from './style';
import { BiSearch } from 'react-icons/bi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useQueryClient } from '@tanstack/react-query';

import NoticeModal from '../../components/modal/NoticeModal/NoticeModal';
import { useGetSearchNoticeList } from '../../queries/noticeQuery';
import { useViewCountMutation } from '../../mutations/noticeMutation';


function NoticeListPage(props) {
    
    const navgiate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const order = searchParams.get("order") || "all";
    const searchText = searchParams.get("searchText") || "";

    const searchNoticeList = useGetSearchNoticeList({
        page,
        limitCount: 15,
        order,
        searchText,
    });

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(searchText);

    const orderSelectOptions = [
        {label: "전체", value: "all"},
        {label: "최근 게시글", value: "recent"},
        {label: "오래된 게시글", value: "oldest"},
        {label: "조회수 많은 순", value: "viewsDesc"},
        {label: "조회수 적은 순", value: "viewsAsc"},
    ];

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
        searchParams.set("searchText", searchValue);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    const handlePagenumbersOnClick = (pageNumber) => {
        searchParams.set("page", pageNumber);
        setSearchParams(searchParams);
    }

    const handleWritePageOnClick = () => {
        navgiate("/notice/write")
    }

    const queryClient = useQueryClient();

    const viewCountMutation = useViewCountMutation();
    
    const handleViewCountOnClick = async (noticeId, notice) => {
        try{
            await viewCountMutation.mutateAsync(noticeId);
            queryClient.invalidateQueries('searchNoticeList');
            setSelectedNotice(notice);
            setIsModalOpen(true);
        } catch (error) {
            console.error("조회수 증가 실패:", error);
        }
        
    };

    const [ selectedNotice, setSelectedNotice ] = useState(null);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    return (
        <div css={s.container}>
            <div css={s.header}>
                <div css={s.title}>
                    <h2>
                        공지사항
                        <span>- 총 {searchNoticeList?.data?.data?.totalElements || 0}건 -</span>
                    </h2>
                </div>
                <div css={s.searchItems}>
                    <Select 
                        options={orderSelectOptions}
                        styles={{
                            control: (style) => ({
                                ...style,
                                width: "15rem",
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
                    />
                    <button css={s.searchButton} onClick={handleSearchButtonOnClick}><BiSearch /></button>
                </div>
            </div>
            <div css={s.main}>
                <ul css={s.noticeListContainer}>
                    <li>
                        <div>No.</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>등록일</div>
                        <div>조회수</div>
                    </li>
                    {
                        searchNoticeList.isLoading ||
                        searchNoticeList?.data?.data.noticeList.map(params =>
                            <li key={params.noticeId} onClick={() => handleViewCountOnClick(params.noticeId, params)}>
                                <div>{params.noticeId}</div>
                                <div>{params.title}</div>
                                <div>{params.username}</div>
                                <div>{params.createdAt}</div>
                                <div>{params.viewCount}</div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <NoticeModal
                isOpen={isModalOpen} 
                setIsOpen={setIsModalOpen} 
                notice={selectedNotice} 
            />
            <div css={s.footer}>
                <div css={s.pageNumbers}>
                    <button disabled={searchNoticeList?.data?.data.firstPage} onClick={() => handlePagenumbersOnClick(page - 1)}><GoChevronLeft /></button>
                    {
                        pageNumbers.map(number =>
                            <button key={number} css={s.pageNum(page === number)} onClick={() => handlePagenumbersOnClick(number)}><span>{number}</span></button>
                        )
                    }
                    <button disabled={searchNoticeList?.data?.data.lastPage} onClick={() => handlePagenumbersOnClick(page + 1)}><GoChevronRight /></button>
                </div>
                <div css={s.writeLayout}>
                    <button css={s.writeBox} onClick={handleWritePageOnClick}>글쓰기</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeListPage;
