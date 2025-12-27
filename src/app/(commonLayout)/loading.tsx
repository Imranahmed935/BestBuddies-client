import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-4"></div>
      <h1 className="text-xl font-semibold text-gray-700">
        Loading... Please wait
      </h1>
    </div>
  );
};

export default LoadingPage;
