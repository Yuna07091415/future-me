import React from 'react';
import DynamicIcon from './DynamicIcon';

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  iconName = 'Sparkles', 
  color = '#22D3EE',
  badgeText = '' 
}) {
  return (
    <div className="stat-card-root">
      <div className="stat-card-header">
        <div 
          className="stat-icon-wrapper" 
          style={{ 
            backgroundColor: `${color}1A`, 
            borderColor: `${color}4D`,
            color: color 
          }}
        >
          <DynamicIcon name={iconName} size={22} />
        </div>
        {badgeText && (
          <span className="stat-badge" style={{ color: color, borderColor: `${color}4D` }}>
            {badgeText}
          </span>
        )}
      </div>

      <div className="stat-card-body">
        <div className="stat-value">{value}</div>
        <div className="stat-title">{title}</div>
        {subtitle && <p className="stat-subtitle">{subtitle}</p>}
      </div>

      <div 
        className="stat-glow-line" 
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      ></div>
    </div>
  );
}
