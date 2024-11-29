import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        padding: 25,
        color: "white",
        generateLabels: function () {
          return [
            {
              text: "Dine In",
              fontColor: "white",
              fillStyle: "rgb(54, 162, 235)",
            },
            {
              text: "To Go",
              fontColor: "white",
              fillStyle: "rgba(255, 181, 114, 1)",
            },
            {
              text: "Delivery",
              fontColor: "white",
              fillStyle: "rgba(255, 124, 163, 1)",
            },
          ];
        },
      },
    },
  },
};

const data = {
  labels: ["pedro", "juan", "jesus"],
  datasets: [
    {
      label: "pedro",
      data: [90, 20],
      backgroundColor: ["rgb(54, 162, 235)", "rgb(31, 29, 43)"],
    },
    {
      label: "juan",
      data: [40, 35],
      backgroundColor: ["rgba(255, 181, 114, 1)", "rgb(31, 29, 43)"],
      withBorder: false,
    },
    {
      label: "jesus",
      data: [20, 10],
      backgroundColor: ["rgba(255, 124, 163, 1)", "rgb(31, 29, 43)"],
    },

    {
      label: "maria",
      data: [1],
      backgroundColor: ["rgb(31, 29, 43)"],
    },
  ],
};

export default function Pies() {
  return <Doughnut data={data} options={options} />;
}
