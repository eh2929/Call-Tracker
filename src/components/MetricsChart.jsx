// src/components/MetricsChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const MetricsChart = ({ data = [] }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="calls" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default MetricsChart;
