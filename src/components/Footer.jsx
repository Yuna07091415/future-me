import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Sparkles, Heart, ArrowRight, Check } from 'lucide-react';
import { sendNewsletterToTelegram, TELEGRAM_CONFIG } from '../utils/telegramService';

export default function Footer() {
  const { t } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      try {
        await sendNewsletterToTelegram(newsletterEmail.trim());
      } catch (err) {
        // Fallback silently for footer widget while showing confirmation
      }
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="footer-root editorial-footer">
      <div className="footer-container">
        {/* Col 1: Brand & Motto */}
        <div className="footer-brand-col">
          <Link to="/" className="brand-logo footer-logo">
            <div className="logo-badge">
              <Sparkles className="logo-icon" size={20} />
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-title">FUTURE <span className="logo-highlight">ME</span></span>
              <span className="logo-subtitle">2030 PLATFORM</span>
            </div>
          </Link>
          <p className="footer-motto">
            {t('heroMotto')}
          </p>
          <p className="footer-desc">
            {t('footerDesc')}
          </p>
          <div className="footer-social-links-row">
            <a href={TELEGRAM_CONFIG.BOT_URL} target="_blank" rel="noopener noreferrer" className="social-pill-link">Telegram Bot</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill-link">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-pill-link">YouTube</a>
          </div>
        </div>

        {/* Col 2: Main Pages */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">{t('footerColPages')}</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">{t('home')}</Link></li>
            <li><Link to="/discover" className="footer-link">{t('discover')}</Link></li>
            <li><Link to="/results" className="footer-link">{t('results')}</Link></li>
            <li><Link to="/careers" className="footer-link">{t('careers')}</Link></li>
            <li><Link to="/roadmap" className="footer-link">{t('roadmap')}</Link></li>
          </ul>
        </div>

        {/* Col 3: Top Fields */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">{t('footerColFields')}</h4>
          <ul className="footer-links">
            <li><span className="footer-tag-item">AI & Software Engineering</span></li>
            <li><span className="footer-tag-item">Law & Diplomacy</span></li>
            <li><span className="footer-tag-item">Medicine & Biotech</span></li>
            <li><span className="footer-tag-item">Finance & Audit</span></li>
            <li><span className="footer-tag-item">Aviation & Hospitality</span></li>
            <li><span className="footer-tag-item">Engineering & Robotics</span></li>
          </ul>
        </div>

        {/* Col 4: Newsletter Subscription */}
        <div className="footer-nav-col footer-newsletter-col">
          <h4 className="footer-col-title">{t('footerNewsTitle')}</h4>
          <p className="newsletter-desc">
            {t('footerNewsDesc')}
          </p>
          <form onSubmit={handleSubscribe} className="newsletter-form-pill">
            <input 
              type="email" 
              placeholder={t('footerNewsPh')} 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="newsletter-input" 
            />
            <button type="submit" className="newsletter-submit-btn" aria-label="Send">
              {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
            </button>
          </form>
          {subscribed && (
            <span className="newsletter-success-tag">{t('footerNewsSuccess')}</span>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copy">
            © {new Date().getFullYear()} FUTURE ME. {t('footerRights')}
          </p>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-sub-link">{t('footerPrivacy')}</a>
            <span className="sep-bullet">•</span>
            <a href="#terms" className="footer-sub-link">{t('footerTerms')}</a>
          </div>
          <p className="footer-love">
            {t('footerLoveText')} <Heart size={14} className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
}
