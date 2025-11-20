import React from "react";

export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 ${className}`}>
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
