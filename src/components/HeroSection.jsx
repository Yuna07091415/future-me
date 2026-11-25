import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  Compass, 
  CheckCircle2, 
  Cpu, 
  Stethoscope, 
  Scale, 
  Plane,
  Award,
  Users,
  TrendingUp,
  Star,
  Play
} from 'lucide-react';

export default function HeroSection() {
  const { t } = useApp();
  const [activePreview, setActivePreview] = useState(0);

  const previewCareers = [
    { 
      role: 'AI Dasturchi', 
      cat: 'Texnologiya', 
      stat: '+38% Global Talab', 
      icon: Cpu,
      color: '#C86D51'
    },
    { 
      role: 'Biotibbiyot Shifokori', 
      cat: 'Tibbiyot', 
      stat: 'Oliy Darajadagi Ehtiyoj', 
      icon: Stethoscope,
      color: '#D97706'
    },
    { 
      role: 'Xalqaro Advokat', 
      cat: 'Huquq & Arbitraj', 
      stat: 'Yuksak Nufuz', 
      icon: Scale,
      color: '#9333EA'
    },
    { 
      role: 'Avia Styuardessa', 
      cat: 'Aviatsiya', 
      stat: '140+ Mamlakat', 
      icon: Plane,
      color: '#0284C7'
    }
  ];

  return (
    <section className="hero-editorial-root">
      <div className="page-container hero-editorial-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-editorial-left">
          {/* Top Pill Badge (Image 1 & 2 style) */}
          <div className="editorial-pill-badge">
            <span className="pill-dot"></span>
            <span>Shaxsiy Rivojlanish Platformasi</span>
          </div>

          {/* Large Editorial Headline with Serif Italic Accent */}
          <div className="hero-headline-wrapper">
            <h1 className="hero-editorial-headline">
              O‘z Kelajagingni <br />
              <span className="editorial-serif-italic">Bitta Qaror</span> Bilan Yarat
            </h1>
            {/* Hand-drawn decorative slash marks (Image 1 & 2 style) */}
            <div className="editorial-slash-doodles" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Brand Motto Pill */}
          <div className="hero-motto-callout">
            <Sparkles size={16} className="motto-icon" />
            <span>"Your Future Starts With One Decision."</span>
          </div>

          <p className="hero-editorial-lead">
            FUTURE ME — o‘quvchilarga o‘z qiziqishlari, qobiliyatlari va kuchli tomonlarini aniqlash, 2030-yilgi eng nufuzli kasblarni tanlash hamda shaxsiy rivojlanish rejasini tuzishda yordam beradigan zamonaviy platforma.
          </p>

          {/* Action Buttons (Solid dark pill + Outlined glass pill) */}
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
        </div>

        {/* Right Column: Architectural Arch Doorway & Hero Visual (Image 1 & 2 style) */}
        <div className="hero-editorial-right">
          <div className="hero-arch-stage">
            {/* Concentric Architectural Arch Frames (Image 2 style) */}
            <div className="arch-concentric-ring arch-ring-outer"></div>
            <div className="arch-concentric-ring arch-ring-middle"></div>
            <div className="arch-concentric-ring arch-ring-inner"></div>

            {/* Arch Centerpiece Portal Card */}
            <div className="arch-portal-card">
              <div className="portal-atmosphere"></div>
              
              {/* Minimalist Graphic Silhouette & Emblem */}
              <div className="portal-emblem-badge">
                <span className="portal-emblem-text">FUTURE ME</span>
                <span className="portal-emblem-year">2030 // VISION</span>
              </div>

              {/* Interactive Career Selector Tabs */}
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
                        <Icon size={18} />
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

            {/* Floating Card 1: 100+ Projects Delivered style (from Image 1) */}
            <div className="floating-metric-card floating-top-right">
              <div className="floating-metric-body">
                <div className="floating-metric-value">22+</div>
                <div className="floating-metric-label">Zamonaviy Kasb</div>
              </div>
              <div className="floating-circle-arrow">
                <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Floating Card 2: 98% Client Satisfaction rating badge (from Image 1 & 2) */}
            <div className="floating-metric-card floating-bottom-left">
              <div className="floating-star-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <div className="floating-rating-label">98% Aniq Tavsiyalar</div>
              <div className="floating-rating-sub">Psixometrik 7-Vektor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Ribbon (The iconic dark capsule bar spanning across below Hero, Image 1 & 2 style) */}
      <div className="page-container hero-ribbon-wrapper">
        <div className="hero-dark-ribbon">
          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <Users size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">22+</span>
              <span className="ribbon-label">Istiqbolli Kasblar</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <Award size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">15 Ta</span>
              <span className="ribbon-label">Chuqur Savollar</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <TrendingUp size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">7 Ta</span>
              <span className="ribbon-label">Iste'dod Vektori</span>
            </div>
          </div>

          <div className="ribbon-divider"></div>

          <div className="ribbon-item">
            <div className="ribbon-icon-wrap">
              <Star size={20} />
            </div>
            <div className="ribbon-text-group">
              <span className="ribbon-num">98%</span>
              <span className="ribbon-label">Mamnuniyat Darajasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
