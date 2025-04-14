import React from "react";
import { Bar } from "react-chartjs-2";
import { chartOptions } from "../chartOption";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function SummaryChart({ summaryData, year }) {
  const chartTotalData = {
    labels: ["1분기", "2분기", "3분기", "4분기"],
    datasets: [
      {
        label: `${year}년 병원 수입`,
        data: [
          summaryData["1분기"] || 0,
          summaryData["2분기"] || 0,
          summaryData["3분기"] || 0,
          summaryData["4분기"] || 0,
        ],
        backgroundColor: "#464667",
        borderColor: "#464667",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartTotalData} options={chartOptions} />;
}

export default SummaryChart;
