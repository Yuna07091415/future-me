import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, BarChart3, Briefcase, MapPin, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-glow-bg"></div>
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
            "Your Future Starts With One Decision."
          </p>
          <p className="footer-desc">
            O‘quvchilarga o‘z qiziqishlari, kuchli tomonlari va salohiyatini kashf etishga yordam beruvchi innovatsion o‘zbek platformasi.
          </p>
          <div className="footer-badge-tag">
            <span className="dot-live"></span> 2030-yil Kasblar Ekotizimi
          </div>
        </div>

        {/* Col 2: Sahifalar */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Asosiy Bo‘limlar</h4>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                <Sparkles size={14} /> Bosh sahifa
              </Link>
            </li>
            <li>
              <Link to="/discover" className="footer-link">
                <Compass size={14} /> Qiziqishlar testi
              </Link>
            </li>
            <li>
              <Link to="/results" className="footer-link">
                <BarChart3 size={14} /> Tahlil natijalari
              </Link>
            </li>
            <li>
              <Link to="/careers" className="footer-link">
                <Briefcase size={14} /> 15+ Kasblar katalogi
              </Link>
            </li>
            <li>
              <Link to="/roadmap" className="footer-link">
                <MapPin size={14} /> 2030 Yo‘l xaritasi
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Yo'nalishlar */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Top Yo‘nalishlar</h4>
          <ul className="footer-links">
            <li><span className="footer-tag-item">Sun'iy Intellekt & IT</span></li>
            <li><span className="footer-tag-item">UI/UX & Raqamli Dizayn</span></li>
            <li><span className="footer-tag-item">Katta Ma'lumotlar Tahlili</span></li>
            <li><span className="footer-tag-item">Kiberxavfsizlik</span></li>
            <li><span className="footer-tag-item">Texnologik Tadbirkorlik</span></li>
            <li><span className="footer-tag-item">Biotibbiyot & Genetika</span></li>
          </ul>
        </div>

        {/* Col 4: Qadriyatlar */}
        <div className="footer-nav-col">
          <h4 className="footer-col-title">Bizning Shior</h4>
          <div className="footer-quote-box">
            <p className="footer-quote-text">
              "Kelajakni oldindan aytib berishning eng yaxshi yo‘li — uni o‘zingiz yaratishingizdir."
            </p>
            <span className="footer-quote-author">— Alan Kay</span>
          </div>
          <Link to="/discover" className="footer-cta-pill">
            <span>Testni boshlash</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copy">
            © {new Date().getFullYear()} FUTURE ME. Barcha huquqlar himoyalangan.
          </p>
          <p className="footer-love">
            O‘zbekiston yoshlarining porloq kelajagi uchun <Heart size={14} className="heart-icon" /> bilan yaratildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
