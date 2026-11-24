import React from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ message = 'Kelajak tahlil qilinmoqda...' }) {
  return (
    <div className="loading-screen-root">
      <div className="loading-portal">
        <div className="loading-spinner-ring"></div>
        <div className="loading-spinner-core">
          <Sparkles size={28} className="spinner-sparkle-icon" />
        </div>
      </div>
      <p className="loading-message">{message}</p>
      <div className="loading-progress-indeterminate"></div>
    </div>
  );
}
