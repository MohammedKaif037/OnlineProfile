import React, { useState, useEffect } from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

type ToastProps = {
  message: string;
  type?: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="flex items-center gap-3 min-w-72 bg-white rounded-lg shadow-lg p-4 border-l-4 border-solid transition-all duration-300 ease-in-out"
           style={{ 
             borderLeftColor: type === 'success' ? '#22c55e' : '#ef4444'
           }}>
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <div className="p-2 bg-green-100 rounded-full">
              <Check className="w-4 h-4 text-green-500" />
            </div>
          ) : (
            <div className="p-2 bg-red-100 rounded-full">
              <AlertCircle className="w-4 h-4 text-red-500" />
            </div>
          )}
        </div>
        <p className="flex-1 text-sm text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;