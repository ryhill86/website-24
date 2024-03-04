import React, { ReactNode, useEffect } from 'react';
import CloseX from '../assets/CloseX.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // set event listener - close modal on escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // set event listener - close modal on click outside of modal
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.getAttribute('role') === 'dialog') {
        onClose();
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      {/*
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  */}
      <div
        role="dialog"
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer"
      ></div>

      <div className="fixed inset-0 z-10 min-h-fit overflow-y-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full max-w-6xl max-h-full">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 max-w-4xl sm:max-w-full sm:mx-8 min-w-full">
          {/*

        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full">
            <div className="relative p-4">
              <div className="absolute top-1 right-3">
                <button type="button" onClick={onClose}>
                  <img className="h-3" src={CloseX} alt="Close" />
                </button>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
