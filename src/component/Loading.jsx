import React from "react";

const Loading = () => {
  return (
    <div className="h-screen grid place-content-center">
      <button type="button" className="flex" disabled>
        <svg
          className="animate-spin bg-redButton h-5 w-5 mr-3 "
          viewBox="0 0 24 24"
        ></svg>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
