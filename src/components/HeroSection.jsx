import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  CheckCircle2, 
  Cpu, 
  Palette, 
  LineChart, 
  ShieldAlert, 
  Rocket 
} from 'lucide-react';

export default function HeroSection() {
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
            <span>2030-Yil Kelajak Kasblari Platformasi</span>
          </div>

          <h1 className="hero-title">
            O‘z Kelajaging <br />
            <span className="hero-gradient-text">Bitta Qarordan</span> <br />
            Boshlanadi.
          </h1>

          <p className="hero-motto-en">
            "Your Future Starts With One Decision."
          </p>

          <p className="hero-description">
            O‘z qiziqishlaringiz, yashirin qobiliyatlaringiz va kuchli tomonlaringizni aniqlang. 
            Sun'iy idrok asrida eng talabgir kasbingizni toping va bugunoq 3 yillik shaxsiy rivojlanish xaritangizni tuzing.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/discover" className="btn-primary-gradient hero-btn">
              <span>Kelajagingni kashf et</span>
              <ArrowRight size={18} className="btn-arrow-icon" />
              <div className="btn-glow"></div>
            </Link>

            <Link to="/careers" className="btn-secondary-glass hero-btn">
              <Compass size={18} />
              <span>Kasblarni ko‘rish</span>
            </Link>
          </div>

          {/* Key Advantages */}
          <div className="hero-features-row">
            <div className="hero-feat-item">
              <CheckCircle2 size={16} className="feat-check" />
              <span>15+ Kelajak Kasbi</span>
            </div>
            <div className="hero-feat-item">
              <CheckCircle2 size={16} className="feat-check" />
              <span>Aniq Hisob Algoritmi</span>
            </div>
            <div className="hero-feat-item">
              <CheckCircle2 size={16} className="feat-check" />
              <span>3 Yillik Vision 2030</span>
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
              <div className="orbit-icon-wrap" style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: '#A855F7' }}>
                <LineChart size={20} color="#A855F7" />
              </div>
              <div className="orbit-info">
                <span className="orbit-label">Data Science</span>
                <span className="orbit-sub">Big Data Analitika</span>
              </div>
            </div>

            <div className="orbit-card orbit-card-4">
              <div className="orbit-icon-wrap" style={{ background: 'rgba(239, 68, 68, 0.15)', borderColor: '#EF4444' }}>
                <ShieldAlert size={20} color="#EF4444" />
              </div>
              <div className="orbit-info">
                <span className="orbit-label">Kiberxavfsizlik</span>
                <span className="orbit-sub">3.5M Vakansiya</span>
              </div>
            </div>

            {/* Bottom floating badge */}
            <div className="hero-floating-stat">
              <Rocket size={18} className="stat-rocket" />
              <div>
                <strong>Kelajakni hozirdan boshla</strong>
                <p>15 daqiqada o‘z yo‘nalishingni top</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
