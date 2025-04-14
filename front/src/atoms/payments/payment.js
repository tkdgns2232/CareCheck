import * as PortOne from "@portone/browser-sdk/v2";
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const paymentResponse = async (patient, totalPay) => {
    await PortOne.requestPayment({
        storeId: import.meta.env.VITE_PORTONE_STOREID,
        paymentId: uuid(),
        orderName: `${patient.patientName} + ${patient.admDate}`,
        totalAmount: Number(totalPay),
        currency: "CURRENCY_KRW",
        payMethod: "EASY_PAY",
        channelKey: "channel-key-e7681cdd-e49a-4f80-92a4-35a2a39385e9",
        customer: {
            customerId: "2025010001",
            fullName: "XX병원",
        },
    });
}

export const paymentsResponse = async (accessToken) => await axios.get("https://api.portone.io/payments", {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
    params: {
        requestBody: JSON.stringify({
            page: {
                number: 0,
                size: 10,
            },
            filter: {
                storeId: import.meta.env.VITE_PORTONE_STOREID,
                isTest: true,
            }
        }),
    }
});