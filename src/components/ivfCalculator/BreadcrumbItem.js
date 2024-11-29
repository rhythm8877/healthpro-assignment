import React from "react";

export const BreadcrumbItem = ({ text, isActive }) => (
  <div className={`self-stretch my-auto ${isActive ? "font-semibold" : ""}`}>
    {text}
  </div>
);
