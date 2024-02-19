import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="max-w-sm mx-auto bg-body rounded">
        <div className="animate-pulse d-flex align-items-start shadow p-3">
          <span className="placeholder rounded-circle bd-h-10 bd-w-10"></span>
          <div className="ms-3 flex-grow-1">
            <span className="placeholder placeholder-xs col-10"></span>
            <span className="placeholder placeholder-xs col-6 mt-3"></span>
            <span className="placeholder placeholder-xs col-4 mt-3"></span>
            <span className="placeholder placeholder-xs col-12"></span>
          </div>
        </div>
      </div>
      <div className="loading-block-head"></div>
      <div className="loading-block-body"></div>
      <div className="loading-block-body"></div>
      <div className="loading-block-body"></div>
      <div className="loading-block-body"></div>
      <div className="loading-block-footer"></div>
    </div>
  );
};

export default Loading;
