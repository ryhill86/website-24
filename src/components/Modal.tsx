import React, { ReactNode, useEffect } from 'react';
import CloseX from '../assets/CloseX.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

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
      />

      <div className="fixed inset-0 z-10 min-h-fit overflow-y-auto transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full max-w-6xl max-h-full">
        <div className="flex min-h-full items-end justify-center p-4 text-center md:items-center md:p-0 max-w-4xl md:max-w-full md:mx-8">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all md:my-8 md:w-full">
            <div className="absolute top-1 right-3">
              <button type="button" className="px-2" onClick={onClose}>
                <img className="h-3" src={CloseX} alt="Close" />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
