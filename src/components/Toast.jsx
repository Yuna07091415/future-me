import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useApp();

  if (!toasts.length) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-item toast-${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' && <CheckCircle2 size={18} />}
            {toast.type === 'error' && <AlertCircle size={18} />}
            {toast.type === 'info' && <Info size={18} />}
          </div>
          <div className="toast-content">{toast.message}</div>
          <button 
            type="button" 
            className="toast-close" 
            onClick={() => removeToast(toast.id)}
            aria-label="Yopish"
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
}
