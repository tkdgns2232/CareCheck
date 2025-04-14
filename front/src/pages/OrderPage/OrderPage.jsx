/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import Swal from "sweetalert2";
import { useCreateOrderMutation } from "../../mutations/orderMutation";

function OrderPage(props) {
  const createOrderMutation = useCreateOrderMutation();
  
  const [ inputValue, setInputValue ] = useState({
    orderCode: "",
    orderName: "",
    orderScore: ""
  });

  const handleInputOnChange = (e) => {
    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const isEmpty = () => {
    return Object.values(inputValue).some(value => !value.trim());
  };

  const handleSaveOnClick = async () => {
    if(isEmpty()) {
      await Swal.fire({
        titleText: "정보를 입력해주세요.",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
      return;
    }

    // orderScore가 숫자인지 체크
    if (isNaN(inputValue.orderScore)) {
      await Swal.fire({
        titleText: "상대가치점수는 숫자여야 합니다.",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
      return;
    }

    const order = {
      orderCode: inputValue.orderCode,
      orderName: inputValue.orderName,
      orderScore: inputValue.orderScore,
    };

    try {
      const response = await createOrderMutation.mutateAsync(order);
      await Swal.fire({
        titleText: "오더가 성공적으로 등록되었습니다.",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      // 등록 후 입력 필드 초기화
      setInputValue({
        orderCode: "",
        orderName: "",
        orderScore: "",
      });
    } catch (error) {
      await Swal.fire({
        titleText: "오더 등록 실패",
        icon: "error",
        confirmButtonText: "<div style='font-size: 1.5rem'>확인</div>",
      });
    }

  }
  return (
    <div css={s.layout}>
      <div css={s.titleGroup}>
        <h1 css={s.title1}>CareCheck</h1>
        <p css={s.title2}>오더등록</p>
      </div>
      <main css={s.inputGroup}>
        <div css={s.input}>
          <label htmlFor="orderCode">오더코드</label>
          <input type="text" name="orderCode" value={inputValue.orderCode} onChange={handleInputOnChange} />
        </div>
        <div css={s.input}>
          <label htmlFor="orderName">오더명</label>
          <input type="text" name="orderName" value={inputValue.orderName} onChange={handleInputOnChange} />
        </div>
        <div css={s.input}>
          <label htmlFor="orderScore">상대가치점수</label>
          <input type="text" name="orderScore" value={inputValue.orderScore} onChange={handleInputOnChange} />
        </div>
      </main>
      <footer css={s.button}>
        <button onClick={handleSaveOnClick}>등록</button>
      </footer>
    </div>
  );
}

export default OrderPage;
