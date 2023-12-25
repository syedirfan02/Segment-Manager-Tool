// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="bg-black opacity-50 fixed inset-0"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 max-w-md w-full rounded shadow-lg z-10">
        {children}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
