import React from "react";

// Component to display preparation time
export default function TimeList({ times }) {
  return (
    <ul className="list-disc p-4">
      {times.map((time, index) => (
        <li key={index}>
          <strong>{time.label}:</strong> {time.time}
        </li>
      ))}
    </ul>
  );
}
