import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  Compass, 
  Cpu, 
  Stethoscope, 
  Scale, 
  Plane,
  Award,
  Users,
  TrendingUp,
  Star,
  Heart
} from 'lucide-react';

export default function HeroSection() {
  const { t, language } = useApp();
  const [activePreview, setActivePreview] = useState(0);

  const previewCareersByLang = {
    uz: [
      { role: 'AI Dasturchi', cat: 'Texnologiya', stat: '+38% Global Talab', icon: Cpu, color: '#F472B6' },
      { role: 'Biotibbiyot Shifokori', cat: 'Tibbiyot', stat: 'Oliy Ehtiyoj', icon: Stethoscope, color: '#C084FC' },
      { role: 'Xalqaro Advokat', cat: 'Huquq & Arbitraj', stat: 'Yuksak Nufuz', icon: Scale, color: '#38BDF8' },
      { role: 'Avia Styuardessa', cat: 'Aviatsiya', stat: '140+ Mamlakat', icon: Plane, color: '#F9A8D4' }
    ],
    en: [
      { role: 'AI Engineer', cat: 'Technology', stat: '+38% Global Demand', icon: Cpu, color: '#F472B6' },
      { role: 'Biomedical Doctor', cat: 'Medicine', stat: 'High Demand', icon: Stethoscope, color: '#C084FC' },
      { role: 'International Lawyer', cat: 'Law & Arbitration', stat: 'High Prestige', icon: Scale, color: '#38BDF8' },
      { role: 'Flight Attendant', cat: 'Aviation', stat: '140+ Countries', icon: Plane, color: '#F9A8D4' }
    ],
    ru: [
      { role: 'AI-Разработчик', cat: 'Технологии', stat: '+38% Мировой Спрос', icon: Cpu, color: '#F472B6' },
      { role: 'Биомедицинский Врач', cat: 'Медицина', stat: 'Высокий Спрос', icon: Stethoscope, color: '#C084FC' },
      { role: 'Международный Адвокат', cat: 'Право и Арбитраж', stat: 'Высокий Престиж', icon: Scale, color: '#38BDF8' },
      { role: 'Бортпроводница', cat: 'Авиация', stat: '140+ Стран', icon: Plane, color: '#F9A8D4' }
    ]
  };

  const previewCareers = previewCareersByLang[language] || previewCareersByLang.uz;

  return (
    <section className="hero-editorial-root cosmic-hero-bg">
      {/* Ethereal Cosmic Radial Lights */}
      <div className="cosmic-aura-glow aura-top-right" aria-hidden="true"></div>
      <div className="cosmic-aura-glow aura-bottom-left" aria-hidden="true"></div>

      <div className="page-container hero-editorial-container">
        {/* Left Column: LIVA / NEXORA Wide Editorial Typography */}
        <div className="hero-editorial-left">
          <div className="editorial-pill-badge">
            <span className="pill-dot"></span>
            <span>{t('heroBadge')}</span>
          </div>

          <div className="hero-headline-wrapper">
            <h1 className="hero-editorial-headline">
              {t('heroTitlePrefix')} <br />
              <span className="editorial-serif-italic">{t('heroTitleHighlight')}</span> {t('heroTitleSuffix')}
            </h1>
          </div>

          <div className="hero-motto-callout">
            <Sparkles size={15} className="motto-icon" />
            <span>{t('heroMotto')}</span>
          </div>

          <p className="hero-editorial-lead">
            {t('heroDesc')}
          </p>

          {/* Action Buttons (Luminous Pink/Lavender Pill + Glass Outline) */}
          <div className="hero-editorial-actions">
            <Link to="/discover" className="btn-editorial-primary">
              <span>{t('heroBtnDiscover')}</span>
              <div className="btn-circle-icon">
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link to="/careers" className="btn-editorial-outline">
              <Compass size={18} />
              <span>{t('heroBtnCareers')}</span>
            </Link>
          </div>

          <div className="hero-status-line">
            <span className="status-pulse-dot"></span>
            <span>{t('heroStatusLine')}</span>
          </div>
        </div>

        {/* Right Column: Glowing Ringed Cosmic Orb & Frosted Glass Cards */}
        <div className="hero-editorial-right">
          <div className="cosmic-orb-stage">
            {/* 3D-Style Glowing Planet / Orb + Tilted Orbital Ring */}
            <div className="cosmic-planet-wrapper" aria-hidden="true">
              <div className="cosmic-planet-sphere">
                <div className="planet-specular-light"></div>
              </div>
              <div className="cosmic-planet-ring"></div>
            </div>

            {/* Frosted Glass Career Preview Stack */}
            <div className="cosmic-glass-console">
              <div className="glass-console-header">
                <span className="console-code">01 / ∞</span>
                <span className="console-title">2030 VISION</span>
              </div>
              <div className="portal-career-cards-stack">
                {previewCareers.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activePreview === idx;
                  return (
                    <div 
                      key={idx}
                      className={`portal-career-row ${isActive ? 'active-row' : ''}`}
                      onMouseEnter={() => setActivePreview(idx)}
                    >
                      <div className="career-row-icon" style={{ color: item.color }}>
                        <Icon size={17} />
                      </div>
                      <div className="career-row-info">
                        <strong className="career-row-role">{item.role}</strong>
                        <span className="career-row-cat">{item.cat} • {item.stat}</span>
                      </div>
                      <div className="career-row-arrow">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating Glass Card 1: Top Right */}
            <div className="floating-metric-card floating-top-right">
              <div className="floating-metric-body">
                <div className="floating-metric-value">22+</div>
                <div className="floating-metric-label">{t('heroFloatCareers')}</div>
              </div>
              <div className="floating-circle-arrow">
                <Heart size={15} fill="currentColor" />
              </div>
            </div>

            {/* Floating Glass Card 2: Bottom Left */}
            <div className="floating-metric-card floating-bottom-left">
              <div className="floating-star-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#F472B6" color="#F472B6" />
                ))}
              </div>
              <div className="floating-rating-label">{t('heroFloatRating')}</div>
              <div className="floating-rating-sub">{t('heroFloatAlgo')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Glass Ribbon */}
      <div className="page-container hero-ribbon-wrapper">
        <div className="hero-dark-ribbon">
          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <Users size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">22+</span>
              <span className="ribbon-label">{t('ribbonCareers')}</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <Award size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">{t('metric2Val')}</span>
              <span className="ribbon-label">{t('ribbonQuestions')}</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <TrendingUp size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">7</span>
              <span className="ribbon-label">{t('ribbonVectors')}</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <Star size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">98%</span>
              <span className="ribbon-label">{t('ribbonSatisfaction')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
