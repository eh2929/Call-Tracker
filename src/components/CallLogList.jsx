// src/components/CallLogList.jsx
import React from "react";

const CallLogList = ({ callLogs }) => {
  return (
    <div className="call-log-list">
      <h2>Recent Call Logs</h2>
      <ul>
        {callLogs.map((log) => (
          <li key={log.id}>
            <p>Contact: {log.contactName}</p>
            <p>Number: {log.contactNumber}</p>
            <p>Outcome: {log.outcome}</p>
            <p>Notes: {log.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CallLogList;
