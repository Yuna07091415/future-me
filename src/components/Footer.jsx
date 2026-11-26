import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, BarChart3, Briefcase, MapPin, Heart, ArrowRight, ArrowUpRight, Send, Check } from 'lucide-react';
import { sendNewsletterToTelegram, TELEGRAM_CONFIG } from '../utils/telegramService';

export default function Footer() {
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
        {/* Col 1: Brand & Motto (Image 1 style) */}
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
            "Your Future Starts With One Decision."
          </p>
          <p className="footer-desc">
            O‘quvchilarga o‘z qiziqishlari, kuchli tomonlari va salohiyatini kashf etishga yordam beruvchi innovatsion o‘zbek platformasi.
          </p>
          <div className="footer-social-links-row">
            <a href={TELEGRAM_CONFIG.BOT_URL} target="_blank" rel="noopener noreferrer" className="social-pill-link">Telegram Bot</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill-link">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-pill-link">YouTube</a>
          </div>
        </div>

        {/* Col 2: Sahifalar (Quick Links) */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Asosiy Sahifalar</h4>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">Bosh sahifa</Link>
            </li>
            <li>
              <Link to="/discover" className="footer-link">Qiziqishlar testi</Link>
            </li>
            <li>
              <Link to="/results" className="footer-link">Tahlil natijalari</Link>
            </li>
            <li>
              <Link to="/careers" className="footer-link">22 ta Kasb katalogi</Link>
            </li>
            <li>
              <Link to="/roadmap" className="footer-link">2030 Yo‘l xaritasi</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Yo'nalishlar (Top Services/Fields) */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Top Yo‘nalishlar</h4>
          <ul className="footer-links">
            <li><span className="footer-tag-item">Sun'iy Intellekt & IT</span></li>
            <li><span className="footer-tag-item">Huquq & Diplomatiya</span></li>
            <li><span className="footer-tag-item">Tibbiyot & Biotexnologiya</span></li>
            <li><span className="footer-tag-item">Moliya & Audit</span></li>
            <li><span className="footer-tag-item">Aviatsiya & Xizmat ko‘rsatish</span></li>
            <li><span className="footer-tag-item">Muhandislik & Konstruksiya</span></li>
          </ul>
        </div>

        {/* Col 4: Newsletter Subscription ("Stay in the loop" - Image 1 style) */}
        <div className="footer-nav-col footer-newsletter-col">
          <h4 className="footer-col-title">Yangiliklardan Xabardor Bo‘ling</h4>
          <p className="newsletter-desc">
            Eng so‘nggi kasbiy tendensiyalar va ta'lim grantlari bo‘yicha xabarlarni pochtangizga oling.
          </p>
          <form onSubmit={handleSubscribe} className="newsletter-form-pill">
            <input 
              type="email" 
              placeholder="Email manzilingiz" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="newsletter-input" 
            />
            <button type="submit" className="newsletter-submit-btn" aria-label="Yuborish">
              {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
            </button>
          </form>
          {subscribed && (
            <span className="newsletter-success-tag">Rahmat! Obuna bo‘ldingiz.</span>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copy">
            © {new Date().getFullYear()} FUTURE ME. Barcha huquqlar himoyalangan.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-sub-link">Maxfiylik siyosati</a>
            <span className="sep-bullet">•</span>
            <a href="#terms" className="footer-sub-link">Foydalanish shartlari</a>
          </div>
          <p className="footer-love">
            O‘zbekiston yoshlarining porloq kelajagi uchun <Heart size={14} className="heart-icon" /> bilan yaratildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
