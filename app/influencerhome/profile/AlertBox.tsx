"use client";
import { XCircle } from "lucide-react";

const AlertBox = () => {
  return (
    <div className="flex rounded-md shadow-sm mb-3 text-sm">
      <div style={{ backgroundColor: "rgba(179, 38, 30, 1)" }} className="w-1 rounded-l-md" />
      <div
        style={{ background: "rgba(255, 218, 216, 1)" }}
        className="flex justify-between items-center w-full px-4 py-2"
      >
        <p className="text-[rgba(91,27,21,1)]">
          Boost your profile visibility by linking all your social accounts and stand out from the crowd.
        </p>
        <button style={{ color: "rgba(179, 38, 30, 1)" }} className="ml-4">
          <XCircle size={16} />
        </button>
      </div>
    </div>
  );
};

export default AlertBox;