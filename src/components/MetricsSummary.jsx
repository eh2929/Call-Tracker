// src/components/MetricsSummary.jsx
import React from "react";

const MetricsSummary = ({ metrics }) => {
  return (
    <div className="metrics-summary">
      <div className="metric">
        <h3>Total Calls</h3>
        <p>{metrics.totalCalls}</p>
      </div>
      <div className="metric">
        <h3>Meetings Scheduled</h3>
        <p>{metrics.meetingsScheduled}</p>
      </div>
      <div className="metric">
        <h3>Voicemails Left</h3>
        <p>{metrics.voicemailsLeft}</p>
      </div>
      <div className="metric">
        <h3>Rejections</h3>
        <p>{metrics.rejections}</p>
      </div>
    </div>
  );
};

export default MetricsSummary;
