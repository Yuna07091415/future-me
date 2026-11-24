import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import DynamicIcon from './DynamicIcon';
import { Award, Bookmark, ArrowRight, Info, CheckCircle2 } from 'lucide-react';

export default function ResultCard({ career, rank, onOpenDetails }) {
  const { isFavorite, toggleFavorite, setSelectedCareerId } = useApp();
  const navigate = useNavigate();

  const favorited = isFavorite(career.id);

  const rankBadgeConfig = {
    1: { label: 'TOP 1 — Eng mos kasb', badgeClass: 'rank-badge-gold' },
    2: { label: 'TOP 2 — Yuqori potensial', badgeClass: 'rank-badge-silver' },
    3: { label: 'TOP 3 — Istiqbolli tanlov', badgeClass: 'rank-badge-bronze' }
  }[rank] || { label: `${rank}-o‘rin`, badgeClass: 'rank-badge-default' };

  const handleStartRoadmap = () => {
    setSelectedCareerId(career.id);
    navigate('/roadmap');
  };

  return (
    <div className={`result-card ${rank === 1 ? 'result-card-top1' : ''}`}>
      {/* Top Header Badge */}
      <div className="result-card-top-bar">
        <div className={`rank-badge ${rankBadgeConfig.badgeClass}`}>
          <Award size={15} />
          <span>{rankBadgeConfig.label}</span>
        </div>

        <div className="result-percentage-tag">
          <span className="pct-num">{career.matchPercentage}%</span>
          <span className="pct-label">Moslik</span>
        </div>
      </div>

      <div className="result-card-body">
        <div className="result-career-intro">
          <div 
            className="result-icon-box"
            style={{ 
              backgroundColor: `${career.accentColor || '#A855F7'}20`,
              borderColor: `${career.accentColor || '#A855F7'}60`,
              color: career.accentColor || '#A855F7'
            }}
          >
            <DynamicIcon name={career.iconName} size={28} />
          </div>

          <div className="result-career-text">
            <span className="result-category">{career.category}</span>
            <h3 className="result-title">{career.title}</h3>
          </div>

          <button
            type="button"
            className={`favorite-btn-circle ${favorited ? 'favorited' : ''}`}
            onClick={() => toggleFavorite(career.id)}
            title={favorited ? "Sevimlilardan o‘chirish" : "Sevimlilarga saqlash"}
          >
            <Bookmark size={18} fill={favorited ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Why Recommended Explanation */}
        <div className="result-reasoning-box">
          <div className="reasoning-header">
            <Info size={16} className="reasoning-icon" />
            <span className="reasoning-label">Nima sababdan tavsiya qilindi?</span>
          </div>
          <p className="reasoning-text">
            {career.personalizedReason || career.whyRecommended}
          </p>
        </div>

        {/* Skills Preview */}
        <div className="result-skills-preview">
          <span className="skills-heading">Asosiy ko‘nikmalar:</span>
          <div className="skills-badge-list">
            {career.skills.slice(0, 4).map((skill, idx) => (
              <span key={idx} className="result-skill-chip">
                <CheckCircle2 size={12} className="chip-check" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="result-card-footer">
          <button
            type="button"
            className="btn-glass-secondary"
            onClick={() => onOpenDetails && onOpenDetails(career)}
          >
            <span>Batafsil ma'lumot</span>
          </button>

          <button
            type="button"
            className="btn-primary-gradient result-cta-btn"
            onClick={handleStartRoadmap}
          >
            <span>2030 Rejasini tuzish</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
