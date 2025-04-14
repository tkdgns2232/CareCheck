/**@jsxImportSource @emotion/react */
import {
  RiAddCircleFill,
  RiCloseCircleFill,
  RiSearch2Line,
} from "react-icons/ri";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import {
  diagnosisOrders,
  openOrdersModal,
} from "../../../../atoms/doctorTable/doctorTableAtom";
import { useRecoilState } from "recoil";
import { useGetSearchOrders } from "../../../../queries/ordersQuery";

function OrderModal({ admissionId }) {
  const [orderModalOpen, setOrderModalOpen] = useRecoilState(openOrdersModal);
  const [listDiagnosisOrders, setListDiagnosisOrders] =
    useRecoilState(diagnosisOrders);
  const [inputKeyword, setInputKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectDiagnosisOrders, setSelectDiagnosisOrders] = useState([]);
  const searchOrdersByKeyword = useGetSearchOrders(searchKeyword);
  const searchOrderList = searchOrdersByKeyword?.data?.data || [];
  const [selectOrder, setSelectOrder] = useState({
    usercode: "",
    userName: "",
  });
  const [newOrder, setNewOrder] = useState({
    admId: admissionId,
    orderCode: "",
    orderName: "",
    orderDose: null,
    orderCount: 1,
    orderDays: 1,
    orderMethod: "",
  });
  useEffect(() => {}, [searchKeyword]);

  const handleSearchKeywordOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSearchKeyword(inputKeyword);
    }
  };

  const handleSearchKeywordOnChange = (e) => {
    setInputKeyword(e.target.value);
  };

  const handleSaveSearchKeywordOnClick = () => {
    setSearchKeyword(inputKeyword);
    setNewOrder({
      orderCode: "",
      orderName: "",
      orderDose: null,
      orderCount: 1,
      orderDays: 1,
      orderMethod: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSelectOrder = (order) => {
    setSelectOrder({
      orderCode: order.orderCode,
      orderName: order.orderName,
    });
  };

  const handleSaveNewOrderOnClick = () => {
    const combinedOrder = {
      ...newOrder,
      admId: admissionId,
      orderCode: selectOrder.orderCode,
      orderName: selectOrder.orderName,
    };

    setSelectDiagnosisOrders((prevOrders) => [...prevOrders, combinedOrder]);
    setNewOrder({
      orderCode: "",
      orderName: "",
      orderDose: null,
      orderCount: 1,
      orderDays: 1,
      orderMethod: "",
    });
  };
  const handleSaveOrdersOnClick = () => {
    if (selectDiagnosisOrders.length === 0) {
      return;
    }
    setListDiagnosisOrders([...listDiagnosisOrders, ...selectDiagnosisOrders]);
    setSelectDiagnosisOrders([]);
  };
  return (
    <div css={s.container}>
      <div css={s.header}>
        <h2>처방등록</h2>
        <div onClick={() => setOrderModalOpen(false)}>
          <RiCloseCircleFill />
        </div>
      </div>
      <div css={s.searchField}>
        <span> 목록 조회 : </span>
        <input
          type="text"
          value={inputKeyword}
          placeholder="검색기능"
          onChange={handleSearchKeywordOnChange}
          onKeyDown={handleSearchKeywordOnKeyDown}
        />
        <div onClick={handleSaveSearchKeywordOnClick}>
          <RiSearch2Line />
        </div>
      </div>
      <div css={s.mainField}>
        <h3>조회 목록 : </h3>
        <table>
          <thead>
            <tr>
              <td>처방코드</td>
              <td>처방명</td>
            </tr>
          </thead>
          <tbody>
            {searchOrderList.map((order) => (
              <tr
                key={order.orderCode}
                onClick={() => handleSelectOrder(order)}
              >
                <td>{order.orderCode}</td>
                <td>{order.orderName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>선택 코드 : </h3>
        {selectOrder.length !== 0 ? (
          <table>
            <tbody>
              <tr>
                <td>{selectOrder.orderCode}</td>
                <td>{selectOrder.orderName}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <></>
        )}

        <h3>옵션 입력 : </h3>
        <table>
          <thead>
            <tr>
              <td>용량</td>
              <td>횟수</td>
              <td>일수</td>
              <td>용법</td>
              <td>등록</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="number"
                  name="orderDose"
                  value={newOrder.orderDose || ""}
                  onChange={handleInputChange}
                  css={s.tableInput}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="orderCount"
                  value={newOrder.orderCount || 1}
                  onChange={handleInputChange}
                  css={s.tableInput}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="orderDays"
                  value={newOrder.orderDays || 1}
                  onChange={handleInputChange}
                  css={s.tableInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="orderMethod"
                  value={newOrder.orderMethod || ""}
                  onChange={handleInputChange}
                  css={s.tableInput}
                />
              </td>
              <td onClick={handleSaveNewOrderOnClick}>
                <RiAddCircleFill />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div css={s.selectField}>
        <div css={s.selectFieldHeader}>
          <h3>입력된 처방목록 : </h3>
          <button
            disabled={selectDiagnosisOrders.length === 0}
            onClick={handleSaveOrdersOnClick}
          >
            <span>전송</span>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <td>처방코드</td>
              <td>처방명</td>
              <td>용량</td>
              <td>횟수</td>
              <td>일수</td>
              <td>용법</td>
            </tr>
          </thead>
          <tbody>
            {selectDiagnosisOrders.map((orders, index) => (
              <tr key={index}>
                <td>{orders.orderCode}</td>
                <td>{orders.orderName}</td>
                <td>{orders.orderDose}</td>
                <td>{orders.orderCount}</td>
                <td>{orders.orderDays}</td>
                <td>{orders.orderMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderModal;
