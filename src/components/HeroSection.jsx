import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  CheckCircle2, 
  Cpu, 
  Palette, 
  LineChart, 
  ShieldAlert, 
  Rocket,
  Stethoscope,
  Scale
} from 'lucide-react';

export default function HeroSection() {
  const { t } = useApp();

  return (
    <section className="hero-root">
      {/* Background glow orbs */}
      <div className="hero-glow-purple"></div>
      <div className="hero-glow-cyan"></div>
      <div className="hero-grid-pattern"></div>

      <div className="hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <Sparkles size={14} className="badge-icon" />
            <span>{t('heroBadge')}</span>
          </div>

          <h1 className="hero-title">
            {t('heroTitlePrefix')} <br />
            <span className="hero-gradient-text">{t('heroTitleHighlight')}</span> <br />
            {t('heroTitleSuffix')}
          </h1>

          <p className="hero-motto-en">
            {t('heroMotto')}
          </p>

          <p className="hero-description">
            {t('heroDesc')}
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/discover" className="btn-primary-gradient hero-btn">
              <span>{t('heroBtnDiscover')}</span>
              <ArrowRight size={18} className="btn-arrow-icon" />
              <div className="btn-glow"></div>
            </Link>

            <Link to="/careers" className="btn-secondary-glass hero-btn">
              <Compass size={18} />
              <span>{t('heroBtnCareers')}</span>
            </Link>
          </div>

          {/* Key Advantages */}
          <div className="hero-features-row">
            <div className="hero-feat-item">
              <CheckCircle2 size={16} className="feat-check" />
              <span>{t('heroFeat1')}</span>
            </div>
            <div className="hero-feat-item">
              <CheckCircle2 size={16} className="feat-check" />
              <span>{t('heroFeat2')}</span>
            </div>
            <div className="hero-feat-item">
              <CheckCircle2 size={16} className="feat-check" />
              <span>{t('heroFeat3')}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Futuristic Interactive Visual Element */}
        <div className="hero-visual">
          <div className="futuristic-card-showcase">
            {/* Center Core Sphere / Radar */}
            <div className="core-portal">
              <div className="portal-ring-outer"></div>
              <div className="portal-ring-inner"></div>
              <div className="portal-center">
                <Sparkles size={38} className="portal-sparkle" />
                <span className="portal-text">FUTURE ME</span>
              </div>
            </div>

            {/* Orbiting Satellite Cards */}
            <div className="orbit-card orbit-card-1">
              <div className="orbit-icon-wrap" style={{ background: 'rgba(34, 211, 238, 0.15)', borderColor: '#22D3EE' }}>
                <Cpu size={20} color="#22D3EE" />
              </div>
              <div className="orbit-info">
                <span className="orbit-label">AI & Dasturlash</span>
                <span className="orbit-sub">Talab: +28%</span>
              </div>
            </div>

            <div className="orbit-card orbit-card-2">
              <div className="orbit-icon-wrap" style={{ background: 'rgba(236, 72, 153, 0.15)', borderColor: '#EC4899' }}>
                <Palette size={20} color="#EC4899" />
              </div>
              <div className="orbit-info">
                <span className="orbit-label">UI/UX Dizayn</span>
                <span className="orbit-sub">Estetika & Empatiya</span>
              </div>
            </div>

            <div className="orbit-card orbit-card-3">
              <div className="orbit-icon-wrap" style={{ background: 'rgba(20, 184, 166, 0.15)', borderColor: '#14B8A6' }}>
                <Stethoscope size={20} color="#14B8A6" />
              </div>
              <div className="orbit-info">
                <span className="orbit-label">Shifokor / Tibbiyot</span>
                <span className="orbit-sub">Talab: +35%</span>
              </div>
            </div>

            <div className="orbit-card orbit-card-4">
              <div className="orbit-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.15)', borderColor: '#F59E0B' }}>
                <Scale size={20} color="#F59E0B" />
              </div>
              <div className="orbit-info">
                <span className="orbit-label">Advokat & Huquq</span>
                <span className="orbit-sub">Adolat Posboni</span>
              </div>
            </div>

            {/* Bottom floating badge */}
            <div className="hero-floating-stat">
              <Rocket size={18} className="stat-rocket" />
              <div>
                <strong>{t('heroMotto')}</strong>
                <p>15 savolda o‘z yo‘nalishingni top</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
