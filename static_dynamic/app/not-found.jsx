import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111321] text-white p-4">
      <h1 className="text-8xl font-bold bg-linear-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
        404
      </h1>

      <div className="w-16 h-1 bg-gray-600 my-6 rounded-full"></div>

      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 text-center max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved to another
        location.
      </p>
    </div>
  );
};

export default NotFound;
