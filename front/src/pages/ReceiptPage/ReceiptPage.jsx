/**@jsxImportSource @emotion/react */
import { useGetSearchAllWaitingList } from "../../queries/admissionQuery";
import * as s from "./style";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDeleteReceiptMutation } from "../../mutations/admissionMutation";
import Swal from "sweetalert2";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function ReceiptPage() {
  const queryClient = useQueryClient();
  const deleteReceiptMutation = useDeleteReceiptMutation();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const searchText = searchParams.get("searchText") || "";
  const searchAllList = useGetSearchAllWaitingList({
    page,
    limitCount: 10,
    searchText,
  });

  const [pageNumbers, setPageNumbers] = useState([]);
  const [searchValue, setSearchValue] = useState(searchText);

  useEffect(() => {
    if (!searchAllList.isLoading) {
      const currentPage = searchAllList?.data?.data.page || 1;
      const totalPages = searchAllList?.data?.data.totalPages || 1;
      const startIndex = Math.floor((currentPage - 1) / 5) * 5 + 1;
      const endIndex =
        startIndex + 4 > totalPages ? totalPages : startIndex + 4;

      let newPageNumbers = [];
      for (let i = startIndex; i <= endIndex; i++) {
        newPageNumbers = [...newPageNumbers, i];
      }
      setPageNumbers(newPageNumbers);
    }
  }, [searchAllList.data]);

  useEffect(() => {
    searchAllList.refetch();
  }, [searchParams]);

  const handleSearchInputOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchInputOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchButtonOnClick();
    }
  };

  const handleSearchButtonOnClick = () => {
    searchParams.set("searchText", searchValue);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const handlePageNumbersOnClick = (pageNumber) => {
    searchParams.set("page", pageNumber);
    setSearchParams(searchParams);
  };
  const handleDeleteReceiptButtonOnClick = async (patient) => {
    Swal.fire({
      icon: "warning",
      titleText: "접수를 취소하시겠습니까?",
      html: "<div style='font-size: 1.5rem'>해당 환자의 접수를 취소하시려면 확인을 눌러주세요.</div>",
      showDenyButton: true,
      confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      denyButtonText: "<div style='font-size: 1.5rem'>취소</div>",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (!!patient.startDate) {
          Swal.fire({
            icon: "error",
            title: "취소가 불가능합니다",
            html: "<div style='font-size: 1.5rem'>이미 진료가 시작된 환자입니다.</div>",
            confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
          });
        } else if (!patient.startDate) {
          deleteReceiptMutation.mutateAsync(patient.admId).then((response) => {
            Swal.fire({
              icon: "success",
              title: "취소되었습니다",
              showConfirmButton: false,
              timer: 1000,
            }).then((response) => {
              queryClient.invalidateQueries(["useGetSearchAllWaitingList"]);
            });
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "취소가 불가능합니다",
            html: "<div style='font-size: 1.5rem'>처리 중 에러가 발생했습니다.</div>",
            confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
          });
        }
      }
    });
  };

  return (
    <>
      <div>
        <div css={s.searchItems}>
          <div>
            <h1>오늘 접수 명단</h1>
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
                  <td>연락처</td>
                  <td>접수시간</td>
                  <td>담당의사</td>
                  <td>수납비용</td>
                  <td>접수취소</td>
                  <td>내역서</td>
                </tr>
              </thead>
              <tbody>
                {searchAllList.isLoading ||
                  (searchAllList?.data?.data.patientAllWaitingList.length >
                  0 ? (
                    searchAllList?.data?.data.patientAllWaitingList.map(
                      (patient) => (
                        <tr key={patient.admId}>
                          <td>{patient.patientId}</td>
                          <td>{patient.patientName}</td>
                          <td>{patient.phoneNum}</td>
                          <td>{patient.admDate}</td>
                          <td>{patient.doctorName}</td>
                          <td>{patient.totalPay.toLocaleString("ko-KR")}원</td>
                          <td>
                            <button
                              css={s.receiptButtons}
                              onClick={() =>
                                handleDeleteReceiptButtonOnClick(patient)
                              }
                            >
                              접수취소
                            </button>
                          </td>
                          <td>
                            <button
                              css={s.receiptButtons}
                              onClick={() =>
                                window.open(
                                  `/admission/${patient.admId}/detailBill`,
                                  "_blank"
                                )
                              }
                            >
                              결제
                            </button>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td colSpan="6">진료 대기자가 없습니다.</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div css={s.footer}>
          <div css={s.pageNumbers}>
            <button
              disabled={searchAllList?.data?.data.firstPage}
              onClick={() => handlePageNumbersOnClick(page - 1)}
            >
              <GoChevronLeft />
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                css={s.pageNum(page === number)}
                onClick={() => handlePageNumbersOnClick(number)}
              >
                <span>{number}</span>
              </button>
            ))}
            <button
              disabled={searchAllList?.data?.data.lastPage}
              onClick={() => handlePageNumbersOnClick(page + 1)}
            >
              <GoChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceiptPage;
