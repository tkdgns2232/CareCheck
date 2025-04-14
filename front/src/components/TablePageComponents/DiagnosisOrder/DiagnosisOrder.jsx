/**@jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { diagnosisOrders } from "../../../atoms/doctorTable/doctorTableAtom";
import * as s from "./style";
import { FaMinus } from "react-icons/fa";

function DiagnosisOrder() {
  const [orders, setOrders] = useRecoilState(diagnosisOrders);
  const handleRemoveOrders = (removeOrder) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.orderCode !== removeOrder.orderCode)
    );
  };
  return (
    <>
      <table css={s.list}>
        <tbody>
          {orders.length < 1 ? (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.orderCode}</td>
                <td>{order.orderName}</td>
                <td>{order.orderDose}</td>
                <td>{order.orderCount}</td>
                <td>{order.orderDays}</td>
                <td>{order.orderMethod}</td>
                <td onClick={() => handleRemoveOrders(order)}>
                  <FaMinus />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default DiagnosisOrder;
