// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import MetricsSummary from "../components/MetricsSummary";
import CallLogList from "../components/CallLogList";
import MetricsChart from "../components/MetricsChart";
import CallLogForm from "../components/CallLogForm";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [callLogs, setCallLogs] = useState([]);

  useEffect(() => {
    // Mock data for initial setup
    const mockMetrics = {
      totalCalls: 50,
      meetingsScheduled: 10,
      voicemailsLeft: 15,
      rejections: 25,
      chartData: [
        { date: "2024-07-01", calls: 5 },
        { date: "2024-07-02", calls: 10 },
        { date: "2024-07-03", calls: 15 },
        { date: "2024-07-04", calls: 20 },
      ],
    };

    const mockCallLogs = [
      {
        id: 1,
        contactName: "John Doe",
        contactNumber: "1234567890",
        outcome: "Scheduled",
        notes: "Follow up next week",
      },
      {
        id: 2,
        contactName: "Jane Smith",
        contactNumber: "0987654321",
        outcome: "Voicemail",
        notes: "Left a message",
      },
    ];

    setMetrics(mockMetrics);
    setCallLogs(mockCallLogs);
  }, []);

  const addCallLog = (newLog) => {
    setCallLogs([...callLogs, { ...newLog, id: callLogs.length + 1 }]);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <MetricsSummary metrics={metrics} />
      <MetricsChart data={metrics.chartData} />
      <CallLogForm addCallLog={addCallLog} />
      <CallLogList callLogs={callLogs} />
    </div>
  );
};

export default Dashboard;
