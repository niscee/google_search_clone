import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full w-32 h-32 border-2 border-b-0 border-red-900" />
    </div>
  );
};

export default Loading;
