import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  CheckCircle2, 
  Cpu, 
  Palette, 
  ShieldAlert, 
  Rocket,
  Stethoscope,
  Scale,
  Plane,
  Calculator,
  Flame,
  Globe,
  Terminal,
  Activity
} from 'lucide-react';

export default function HeroSection() {
  const { t } = useApp();
  const [activeChip, setActiveChip] = useState(0);

  const telemetryData = [
    { 
      role: 'AI Dasturchi', 
      cat: 'Texnologiya', 
      stat: '+38% Global Talab', 
      color: '#22D3EE', 
      icon: Cpu,
      insight: '$1,500 — $5,000+ oylik' 
    },
    { 
      role: 'Shifokor / Biotibbiyot', 
      cat: 'Tibbiyot', 
      stat: 'Oliy Darajadagi Ehtiyoj', 
      color: '#14B8A6', 
      icon: Stethoscope,
      insight: 'Genetika & Telemeditsina' 
    },
    { 
      role: 'Xalqaro Advokat', 
      cat: 'Huquq & Adolat', 
      stat: 'Yuksak Nufuz', 
      color: '#F59E0B', 
      icon: Scale,
      insight: 'Kiberhuquq & Arbitraj' 
    },
    { 
      role: 'Styuardessa / Avia', 
      cat: 'Aviatsiya', 
      stat: '140+ Mamlakat Parvozi', 
      color: '#38BDF8', 
      icon: Plane,
      insight: 'Global Sayohatlar' 
    }
  ];

  return (
    <section className="hero-root hero-futuristic-mesh">
      {/* Dynamic Aurora Ambient Glows */}
      <div className="aurora-glow aurora-cyan"></div>
      <div className="aurora-glow aurora-purple"></div>
      <div className="aurora-glow aurora-pink"></div>
      <div className="cyber-grid-floor"></div>

      <div className="hero-container">
        {/* Left Column: Visionary Narrative */}
        <div className="hero-content">
          {/* Cyber Status Ticker */}
          <div className="cyber-status-pill">
            <span className="live-radar-ping">
              <span className="radar-core-dot"></span>
              <span className="radar-wave"></span>
            </span>
            <Terminal size={14} className="terminal-icon" />
            <span className="ticker-text">FUTURE ME 2030 // NEURAL CAREER RADAR ONLINE</span>
          </div>

          <h1 className="hero-title hero-display-title">
            {t('heroTitlePrefix')} <br />
            <span className="hero-hologram-text">{t('heroTitleHighlight')}</span> <br />
            {t('heroTitleSuffix')}
          </h1>

          <div className="hero-motto-badge">
            <Sparkles size={16} className="motto-sparkle" />
            <span>{t('heroMotto')}</span>
          </div>

          <p className="hero-description hero-desc-pro">
            {t('heroDesc')}
          </p>

          {/* Action Hub */}
          <div className="hero-actions">
            <Link to="/discover" className="btn-cyber-primary hero-btn">
              <div className="btn-cyber-glow"></div>
              <span>{t('heroBtnDiscover')}</span>
              <ArrowRight size={18} className="btn-arrow-icon" />
            </Link>

            <Link to="/careers" className="btn-cyber-outline hero-btn">
              <Compass size={18} />
              <span>{t('heroBtnCareers')}</span>
            </Link>
          </div>

          {/* Real-time Feature Metrics */}
          <div className="hero-tech-badges">
            <div className="tech-badge-item">
              <Activity size={15} color="#22D3EE" />
              <span>22 Zamonaviy Kasb</span>
            </div>
            <div className="tech-badge-item">
              <Flame size={15} color="#EC4899" />
              <span>Multi-Vektorli Algoritm</span>
            </div>
            <div className="tech-badge-item">
              <Globe size={15} color="#10B981" />
              <span>3 Yillik Vision 2030</span>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Cyber Console & Telemetry Radar */}
        <div className="hero-visual">
          <div className="cyber-hologram-stage">
            {/* Holographic Concentric Orbital Rings */}
            <div className="radar-ring-1"></div>
            <div className="radar-ring-2"></div>
            <div className="radar-ring-3"></div>
            <div className="radar-scanner-beam"></div>

            {/* Central Holographic Core Console */}
            <div className="hologram-core-sphere">
              <div className="sphere-inner-glow"></div>
              <div className="core-branding">
                <Rocket size={34} className="core-rocket-icon" />
                <span className="core-brand-name">FUTURE ME</span>
                <span className="core-system-label">2030 RADAR</span>
              </div>
            </div>

            {/* Orbiting Interactive Career Satellites */}
            {telemetryData.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeChip === idx;
              return (
                <div 
                  key={idx} 
                  className={`satellite-card satellite-${idx + 1} ${isActive ? 'satellite-active' : ''}`}
                  onMouseEnter={() => setActiveChip(idx)}
                >
                  <div 
                    className="satellite-icon-box"
                    style={{ 
                      background: `${item.color}20`, 
                      borderColor: `${item.color}80`,
                      color: item.color 
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="satellite-text-group">
                    <span className="satellite-role">{item.role}</span>
                    <span className="satellite-stat" style={{ color: item.color }}>{item.stat}</span>
                  </div>
                </div>
              );
            })}

            {/* Live Hologram Telemetry HUD Box */}
            <div className="hero-live-hud-panel">
              <div className="hud-header">
                <span className="hud-indicator-dot"></span>
                <span className="hud-title">FAOL TELEMETRIYA</span>
                <span className="hud-stat-tag">2030 PROGNOZ</span>
              </div>
              <div className="hud-body">
                <strong>{telemetryData[activeChip].role}</strong>
                <p>{telemetryData[activeChip].insight} • {telemetryData[activeChip].stat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
