import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import DynamicIcon from './DynamicIcon';
import { getLocalizedCareer } from '../data/careerTranslations';
import { Bookmark, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export default function CareerCard({ career, onOpenDetails, showMatch = false }) {
  const { isFavorite, toggleFavorite, setSelectedCareerId, language, t } = useApp();
  const navigate = useNavigate();

  const localizedCareer = getLocalizedCareer(career, language);
  const favorited = isFavorite(career.id);

  const handleStartRoadmap = (e) => {
    e.stopPropagation();
    setSelectedCareerId(career.id);
    navigate('/roadmap');
  };

  return (
    <div className={`career-card ${favorited ? 'career-card-favorited' : ''}`}>
      {/* Glow gradient accent bar */}
      <div 
        className="card-accent-line" 
        style={{ background: `linear-gradient(90deg, ${career.accentColor || '#A855F7'}, transparent)` }}
      ></div>

      <div className="career-card-header">
        <div 
          className="career-icon-box"
          style={{ 
            backgroundColor: `${career.accentColor || '#A855F7'}1A`,
            borderColor: `${career.accentColor || '#A855F7'}4D`,
            color: career.accentColor || '#A855F7'
          }}
        >
          <DynamicIcon name={career.iconName} size={24} />
        </div>

        <div className="career-header-info">
          <span className="career-category-tag">{localizedCareer.category}</span>
          <h3 className="career-card-title">{localizedCareer.title}</h3>
        </div>

        {/* Favorite toggle button */}
        <button
          type="button"
          className={`favorite-btn ${favorited ? 'favorited' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(career.id);
          }}
          title={favorited ? "Sevimlilardan o‘chirish" : "Sevimlilarga saqlash"}
          aria-label={favorited ? "Sevimlilardan o‘chirish" : "Sevimlilarga saqlash"}
        >
          <Bookmark size={18} fill={favorited ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Match Percentage Badge if on Results page */}
      {showMatch && career.matchPercentage && (
        <div className="career-match-badge">
          <Sparkles size={14} />
          <span>{t('matchLabel')} <strong>{career.matchPercentage}%</strong></span>
        </div>
      )}

      {/* Description */}
      <p className="career-card-desc">
        {localizedCareer.shortDescription}
      </p>

      {/* Skills Badges */}
      <div className="career-skills-list">
        {career.skills.slice(0, 3).map((skill, idx) => (
          <span key={idx} className="skill-pill">
            {skill}
          </span>
        ))}
        {career.skills.length > 3 && (
          <span className="skill-pill skill-pill-more">
            +{career.skills.length - 3}
          </span>
        )}
      </div>

      {/* Key Fact */}
      {localizedCareer.facts && (
        <div className="career-card-facts">
          <div className="fact-item">
            <TrendingUp size={14} className="fact-icon" />
            <span className="fact-text">{localizedCareer.facts.demand2030}</span>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="career-card-footer">
        <button
          type="button"
          className="btn-details"
          onClick={() => onOpenDetails && onOpenDetails(localizedCareer)}
        >
          <span>{t('btnDetails')}</span>
        </button>

        <button
          type="button"
          className="btn-roadmap-action"
          onClick={handleStartRoadmap}
          title={t('btnPlan2030')}
        >
          <span>{t('btnPlan2030')}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
