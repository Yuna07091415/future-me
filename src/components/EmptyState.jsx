import React from 'react';
import { Link } from 'react-router-dom';
import DynamicIcon from './DynamicIcon';
import { ArrowRight } from 'lucide-react';

export default function EmptyState({
  iconName = 'Compass',
  title = 'Ma\'lumot topilmadi',
  description = 'Hozircha hech qanday ma\'lumot mavjud emas.',
  actionText = 'Bosh sahifaga qaytish',
  actionLink = '/',
  onActionClick
}) {
  return (
    <div className="empty-state-root">
      <div className="empty-icon-halo">
        <DynamicIcon name={iconName} size={42} className="empty-icon" />
        <div className="empty-halo-glow"></div>
      </div>

      <h3 className="empty-title">{title}</h3>
      <p className="empty-description">{description}</p>

      {actionText && (
        <div className="empty-action-wrapper">
          {actionLink ? (
            <Link to={actionLink} className="btn-primary-gradient empty-cta-btn">
              <span>{actionText}</span>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <button 
              type="button" 
              className="btn-primary-gradient empty-cta-btn" 
              onClick={onActionClick}
            >
              <span>{actionText}</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
