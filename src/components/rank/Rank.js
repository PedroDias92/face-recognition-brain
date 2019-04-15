import React from "react";

export default function Rank({ name, entries }) {
  return (
    <div>
      <div className="white f3">{`${name}, your current entry count is...`}</div>
      <div className="white f21">{entries}</div>
    </div>
  );
}
