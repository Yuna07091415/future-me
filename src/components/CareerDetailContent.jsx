import React from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import DynamicIcon from './DynamicIcon';
import { 
  Bookmark, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';

export default function CareerDetailContent({ career, onClose }) {
  const { isFavorite, toggleFavorite, setSelectedCareerId } = useApp();
  const navigate = useNavigate();

  if (!career) return null;

  const favorited = isFavorite(career.id);

  const handleStartRoadmap = () => {
    setSelectedCareerId(career.id);
    if (onClose) onClose();
    navigate('/roadmap');
  };

  return (
    <div className="career-detail-body">
      {/* Header Info */}
      <div className="career-detail-header">
        <div 
          className="detail-icon-box"
          style={{ 
            backgroundColor: `${career.accentColor || '#A855F7'}20`,
            borderColor: `${career.accentColor || '#A855F7'}60`,
            color: career.accentColor || '#A855F7'
          }}
        >
          <DynamicIcon name={career.iconName} size={32} />
        </div>

        <div className="detail-title-wrap">
          <span className="detail-cat-badge">{career.category}</span>
          <h2 className="detail-main-title">{career.title}</h2>
        </div>

        <button
          type="button"
          className={`favorite-btn-circle ${favorited ? 'favorited' : ''}`}
          onClick={() => toggleFavorite(career.id)}
          title={favorited ? "Sevimlilardan o‘chirish" : "Sevimlilarga saqlash"}
        >
          <Bookmark size={20} fill={favorited ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Description */}
      <div className="detail-section">
        <h4 className="detail-section-title">Kasb haqida umumiy ma'lumot</h4>
        <p className="detail-description-text">
          {career.fullDescription || career.shortDescription}
        </p>
      </div>

      {/* 2030 Insights Grid */}
      {career.facts && (
        <div className="detail-facts-grid">
          <div className="fact-box">
            <div className="fact-box-icon"><TrendingUp size={18} color="#22D3EE" /></div>
            <div className="fact-box-content">
              <span className="fact-box-label">2030 Talabi</span>
              <strong className="fact-box-val">{career.facts.demand2030}</strong>
            </div>
          </div>

          <div className="fact-box">
            <div className="fact-box-icon"><DollarSign size={18} color="#10B981" /></div>
            <div className="fact-box-content">
              <span className="fact-box-label">Kutilayotgan Daromad</span>
              <strong className="fact-box-val">{career.facts.salaryRange}</strong>
            </div>
          </div>

          <div className="fact-box">
            <div className="fact-box-icon"><Sparkles size={18} color="#A855F7" /></div>
            <div className="fact-box-content">
              <span className="fact-box-label">Kelajakdagi Roli</span>
              <strong className="fact-box-val">{career.facts.futureRole}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      <div className="detail-section">
        <h4 className="detail-section-title">Talab qilinadigan asosiy ko‘nikmalar (Hard & Soft Skills)</h4>
        <div className="detail-skills-grid">
          {career.skills.map((skill, idx) => (
            <div key={idx} className="detail-skill-item">
              <CheckCircle2 size={15} color="#22D3EE" />
              <span>{skill}</span>
            </div>
          ))}
          {career.softSkills?.map((skill, idx) => (
            <div key={`soft-${idx}`} className="detail-skill-item soft-skill-item">
              <Sparkles size={14} color="#EC4899" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Recommendation */}
      <div className="detail-section">
        <h4 className="detail-section-title">
          <GraduationCap size={18} />
          <span>Ta'lim va Rivojlanish Bo‘yicha Tavsiyalar</span>
        </h4>
        <ul className="detail-edu-list">
          {career.education.map((edu, idx) => (
            <li key={idx}>
              <span className="edu-bullet">{idx + 1}</span>
              <span>{edu}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom CTA */}
      <div className="detail-footer-actions">
        <button
          type="button"
          className="btn-primary-gradient detail-roadmap-btn"
          onClick={handleStartRoadmap}
        >
          <span>Ushbu kasb bo‘yicha 3 yillik reja tuzish</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
