"use client";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ShieldCheck } from 'lucide-react';

const VerificationStatus = () => {
  return (
    <div className="flex gap-4 mt-6 flex-wrap">
      <span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1">
        <div className="flex ">
          <AiOutlineCheckCircle style={{ color: 'rgb(209 205 96)' }} className="w-4 h-4" />
          <p className="m-0 font-semibold"> Verified payment</p>
        </div>
        <p className="text-xs text-gray-600">The profile has been successfully verified and authenticated.</p>
      </span>

      <span className="px-2 py-1 text-xs border border-gray-300 rounded inline-flex flex-col items-start space-y-1">
        <div className="flex ">
          <ShieldCheck style={{ color: 'rgb(209 205 96)' }} className="w-4 h-4" />
          <p className="m-0 font-semibold"> Top Creator</p>
        </div>
        <p className="text-xs text-gray-600">Top creators have high ratings and completed multiple orders.</p>
      </span>
    </div>
  );
};

export default VerificationStatus;