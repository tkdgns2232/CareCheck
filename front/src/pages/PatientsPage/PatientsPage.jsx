/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useSearchParams } from 'react-router-dom';
import { useGetSearchPatients } from '../../queries/admissionQuery';
import { BiSearch } from 'react-icons/bi';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useEffect, useState } from 'react';

function PatientsPage(props) {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const searchText = searchParams.get("searchText") || "";
    const searchAllList = useGetSearchPatients({
        page,
        limitCount: 10,
        searchText,
    });
    

    const [ pageNumbers, setPageNumbers ] = useState([]);
    const [ searchValue, setSearchValue ] = useState(searchText);

    useEffect(() => {
        if(!searchAllList.isLoading) {
            const currentPage = searchAllList?.data?.data.page || 1;
            const totalPages = searchAllList?.data?.data.totalPages || 1;
            const startIndex = (Math.floor((currentPage - 1) / 5) * 5) + 1;
            const endIndex = startIndex + 4 > totalPages ? totalPages : startIndex + 4;

            let newPageNumbers = [];
            for(let i = startIndex; i <= endIndex; i++) {
                newPageNumbers = [...newPageNumbers, i];
            }
            setPageNumbers(newPageNumbers);
        }
    },[searchAllList.data])

    useEffect(() => {
        searchAllList.refetch();
    }, [searchParams]);
    
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
        searchParams.set("page", 1)
        setSearchParams(searchParams);
    }
    
    const handlePageNumbersOnClick = (pageNumber) => {
        searchParams.set("page", pageNumber)
        setSearchParams(searchParams);
    }

    return (
        <>
            <div>
                <div css={s.searchItems}>
                    <div>
                        <h1>환자 전체 명단</h1>
                    </div>
                    <div>
                        <input 
                            css={s.searchInput} 
                            type="text" 
                            value={searchValue}
                            onChange={handleSearchInputOnChange} // 텍스트 변경만 처리
                            onKeyDown={handleSearchInputOnKeyDown}
                            placeholder="이름으로 검색"
                        />
                        <button css={s.searchButton} onClick={handleSearchButtonOnClick}>
                            <BiSearch />
                        </button>
                    </div>
                </div>
                <div css={s.container}>
                    <div css={s.tableContainer}>
                        <table css={s.table}>
                            <thead>
                                <tr css={s.trHeader}>
                                    <td>환자번호</td>
                                    <td>환자명</td>
                                    <td>주민등록번호</td>
                                    <td>연락처</td>
                                    <td>등록날짜</td>
                                    <td>수정날짜</td>
                                </tr>
                            </thead>
                            <tbody>
                                {   searchAllList.isLoading || (
                                    searchAllList?.data?.data.patientList.length > 0 
                                    ?
                                    searchAllList?.data?.data.patientList.map((patient) => (
                                        <tr key={patient.patientId} css={s.trBody}>
                                            <td>{patient.patientId}</td>
                                            <td>{patient.patientName}</td>
                                            <td>{patient.regidentNum}</td>
                                            <td>{patient.phoneNum}</td>
                                            <td>{patient.createdAtDateFormat}</td>
                                            <td>{patient.updatedAtDateFormat}</td>
                                        </tr>
                                    )) 
                                    : 
                                    <tr>
                                        <td colSpan="6">등록된 환자가 없습니다.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div css={s.footer}>
                    <div css={s.pageNumbers}>
                        <button disabled={searchAllList?.data?.data.firstPage} onClick={() => handlePageNumbersOnClick(page - 1)}><GoChevronLeft /></button>
                        {
                            pageNumbers.map(number =>
                                <button key={number} css={s.pageNum(page === number)} onClick={() => handlePageNumbersOnClick(number)}><span>{number}</span></button>
                            )
                        }
                        <button disabled={searchAllList?.data?.data.lastPage} onClick={() => handlePageNumbersOnClick(page + 1)}><GoChevronRight /></button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PatientsPage;