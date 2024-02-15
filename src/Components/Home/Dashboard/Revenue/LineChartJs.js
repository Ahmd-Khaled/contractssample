

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



export const data = {
  labels,
  datasets: [
    {
      label: "Contracts",
      data: [320, 420, 510, 600, 510, 950],
      backgroundColor: "#2196F3",
      borderColor: "#2196F3",
    },
    {
      label: "Expenses",
      data: [370, 420, 410, 370, 310, 440],
      backgroundColor: "#F44236",
      borderColor: "#F44236",
    },
    {
      label: "Income",
      data: [600, 540, 540, 280, 270, 490],
      backgroundColor: "#FFCA29",
      borderColor: "#FFCA29",
    },
  ],
};

const LineChartJs = () => {
  const { t, i18n } = useTranslation();

  const options = {
    scales: {
      y: {
        position: i18n.dir() === 'rtl' ? 'right' : 'left'
      },
      x: {
        reverse: i18n.dir() === 'rtl',
        offset: true
      }
    },
    plugins: {
      legend: {
        position: "bottom",
        rtl: i18n.dir() === 'rtl',
        textDirection: i18n.dir()
      },
      tooltip: {
        rtl: i18n.dir() === 'rtl',
        textDirection: i18n.dir()
      }
    },
  };

  return (
    <div style={{ width: '100%', height: '100%', direction: i18n.dir() }} >
      <Line style={{direction: i18n.dir() }} options={options} data={data} />
    </div>
  );
};

export default LineChartJs;