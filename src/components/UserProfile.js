import classes from "./UserProfile.module.css";

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";
import React, { Fragment, useState, useEffect } from "react";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  Legend
);

const UserProfile = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Avg",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Spending habits for the last year",
          data: [120, 230, 165, 350, 85, 235, 420, 185, 560, 330, 168, 256],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(53,162,235,0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Spending habits for the last year",
        },
      },
    });
  }, []);
  return (
    <Fragment>
      <main className={classes.profile}>
        <Line options={chartOptions} data={chartData} />
      </main>
      <main className={classes.profile}>
        <Bar options={chartOptions} data={chartData} />
      </main>
      <main className={classes.profile}>
        <Doughnut options={chartOptions} data={chartData} />
      </main>
      <main className={classes.profile}>
        <Pie options={chartOptions} data={chartData} />
      </main>
      <main className={classes.profile}>
        <PolarArea options={chartOptions} data={chartData} />
      </main>
      <main className={classes.profile}>
        <Radar options={chartOptions} data={chartData} />
      </main>
    </Fragment>
  );
};

export default UserProfile;
