import React, { useEffect } from "react";

export default function Loading({ load }) {
  useEffect(() => {
    document.body.style.overflow = load ? "hidden" : "auto";
  }, []);

  return (
    <div className={load ? "show" : "close"}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}
