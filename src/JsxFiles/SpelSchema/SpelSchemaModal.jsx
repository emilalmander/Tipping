import React, { useEffect, useRef } from 'react';

function Modal({ isOpen, onClose, imageSrc, altText }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        ref={modalRef} 
        className="bg-white p-4 rounded shadow-lg w-3/4 md:w-1/2 lg:w-1/3 relative"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={imageSrc} alt={altText} className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Modal;
