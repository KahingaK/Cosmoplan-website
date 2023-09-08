import React from "react";
import { CgClose } from "react-icons/cg";

function ErrorBanner({ message, onClose }) {
  return (
    <div className="bg-[#c1121f] border-s- text-white p-2 rounded-md text-center max-w-xs mx-auto flex">
    <button onClick={onClose} className= " p-1 border-solid border-[#c1121f] ">
        <CgClose/>
      </button>
      <p className="text-white font-semibold ml-2">{message}</p>
      
    </div>
  );
}

export default ErrorBanner;
