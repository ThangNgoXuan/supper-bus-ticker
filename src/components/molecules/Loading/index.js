import React from "react";

export default function Loading() {
  return (
    <div className="m-loading">
      <div className="m-loading_wrap">
        <div className="m-loading_spin"></div>
      </div>
    </div>
  );
}

export function LoadingComponent() {
  return (
    <div className="m-loadingComponent">
      <div className="m-loadingComponent_wrap">
        <div className="m-loadingComponent_spin"></div>
      </div>
    </div>
  );
}
