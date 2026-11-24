import React from 'react';

export default function ProgressBar({ 
  value = 0, 
  max = 100, 
  showText = true, 
  label = '', 
  customText = '',
  colorGradient = 'linear-gradient(90deg, #6D28D9 0%, #A855F7 50%, #22D3EE 100%)',
  height = '10px'
}) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className="progress-bar-root">
      {showText && (
        <div className="progress-bar-header">
          {label && <span className="progress-label">{label}</span>}
          <span className="progress-percentage">
            {customText || `${percentage}%`}
          </span>
        </div>
      )}
      <div className="progress-track" style={{ height }}>
        <div 
          className="progress-fill" 
          style={{ 
            width: `${percentage}%`,
            background: colorGradient
          }}
        >
          <div className="progress-glow-tip"></div>
        </div>
      </div>
    </div>
  );
}
