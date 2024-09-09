import React from "react";

// Reusable Section component
export default function Section({ title, children }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold text-2xl mb-2">{title}</h2>
      {children}
    </div>
  );
}
