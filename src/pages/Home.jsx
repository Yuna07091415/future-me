import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import HeroSection from '../components/HeroSection';
import CareerCard from '../components/CareerCard';
import Modal from '../components/Modal';
import CareerDetailContent from '../components/CareerDetailContent';
import DynamicIcon from '../components/DynamicIcon';
import { CAREERS_DATA, CATEGORIES } from '../data/careersData';
import { TESTIMONIALS_DATA, HOW_IT_WORKS_STEPS } from '../data/testimonialsData';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  Compass, 
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Mail,
  MapPin,
  Phone,
  Send,
  Zap
} from 'lucide-react';

export default function Home() {
  const { t } = useApp();
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [featuredOffset, setFeaturedOffset] = useState(0);

  // Recommended careers to feature in the dark section (Image 1 style)
  const featuredCareers = CAREERS_DATA.slice(0, 6);

  const handleNextFeatured = () => {
    setFeaturedOffset((prev) => (prev + 1) % Math.max(1, featuredCareers.length - 2));
  };

  const handlePrevFeatured = () => {
    setFeaturedOffset((prev) => (prev - 1 + Math.max(1, featuredCareers.length - 2)) % Math.max(1, featuredCareers.length - 2));
  };

  return (
    <div className="home-page-root editorial-theme-layout">
      {/* 1. Hero Section with Arch & Dark Ribbon */}
      <HeroSection />

      {/* 2. Comprehensive Career Solutions / Categories (Image 1 "Our Services" style) */}
      <section className="section-padding categories-editorial-section">
        <div className="page-container">
          <div className="editorial-section-header-split">
            <div className="header-split-left">
              <div className="editorial-pill-badge">
                <span className="pill-dot"></span>
                <span>Yo‘nalishlar va Sohalar</span>
              </div>
              <h2 className="editorial-section-title">
                Keng Qamrovli <br />
                <span className="editorial-serif-italic">Kasbiy Yo‘nalishlar</span>
              </h2>
              <p className="editorial-section-lead">
                Strategiyadan natijagacha — o‘z iqtidoringiz va shaxsiyatingizga eng mos sohani aniqlang va 2030 maqsadlaringiz sari dadil qadam tashlang.
              </p>
              <div className="header-left-cta">
                <Link to="/careers" className="btn-editorial-primary">
                  <span>Barchasini Ko‘rish</span>
                  <div className="btn-circle-icon">
                    <ArrowRight size={15} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="header-split-right">
              <div className="categories-editorial-grid">
                {CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
                  const careersInCat = CAREERS_DATA.filter(c => c.categoryId === cat.id);
                  return (
                    <Link 
                      key={cat.id} 
                      to={`/careers?category=${cat.id}`}
                      className="category-editorial-card"
                    >
                      <div className="cat-card-top">
                        <div className="cat-editorial-icon-box">
                          <DynamicIcon name={cat.iconName} size={22} />
                        </div>
                        <div className="cat-editorial-arrow">
                          <ArrowUpRight size={17} />
                        </div>
                      </div>
                      <h3 className="cat-editorial-title">{cat.name}</h3>
                      <p className="cat-editorial-count">{careersInCat.length} ta zamonaviy kasb va o‘sish imkoniyatlari.</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Wave Divider: Transitioning from Cream into Dark Obsidian (Image 1 style) */}
      <div className="editorial-wave-divider wave-to-dark" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,30 C320,95 480,10 720,50 C960,90 1180,20 1440,60 L1440,100 L0,100 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 3. Featured Careers (Image 1 "Featured Projects" Dark Section style) */}
      <section className="section-padding dark-showcase-section">
        <div className="page-container">
          <div className="dark-section-header">
            <div>
              <div className="editorial-pill-badge badge-dark-contrast">
                <span className="pill-dot dot-warm"></span>
                <span>Tavsiya Etilgan Kasblar</span>
              </div>
              <h2 className="dark-section-title">
                2030-Yilning Eng Nufuzli <span className="editorial-serif-italic">Kasblari</span>
              </h2>
              <p className="dark-section-lead">
                Mehnat bozorida yuqori talabga ega, barqaror va katta daromad keltiruvchi yetakchi kasblar katalogi.
              </p>
            </div>

            {/* Slider Navigation Arrows (Image 1 style) */}
            <div className="slider-nav-arrows">
              <button 
                onClick={handlePrevFeatured} 
                className="slider-arrow-btn" 
                aria-label="Oldingi"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNextFeatured} 
                className="slider-arrow-btn" 
                aria-label="Keyingi"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="careers-grid-layout">
            {featuredCareers.map((career) => (
              <CareerCard 
                key={career.id} 
                career={career}
                onOpenDetails={(c) => setSelectedCareerModal(c)}
              />
            ))}
          </div>

          <div className="dark-section-cta">
            <Link to="/careers" className="btn-editorial-light-pill">
              <span>Barcha 22 ta Kasbni Ko‘rish</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Organic Wave Divider: Transitioning from Dark back to Cream (Image 1 style) */}
      <div className="editorial-wave-divider wave-to-light" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,70 C360,15 620,90 880,40 C1140,-10 1320,60 1440,30 L1440,0 L0,0 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 4. 3-Step "Qanday Ishlaydi?" (Image 2 "My Approach" Editorial style: 01 DISCOVER, 02 DEFINE, 03 ROADMAP) */}
      <section className="section-padding approach-editorial-section">
        <div className="page-container">
          <div className="section-header-center">
            <div className="editorial-pill-badge">
              <span className="pill-dot"></span>
              <span>Platforma Qanday Ishlaydi?</span>
            </div>
            <h2 className="editorial-section-title">
              3 Bosqichda <span className="editorial-serif-italic">Orzuyingizdagi Kelajak</span>
            </h2>
            <p className="editorial-section-lead max-w-lead">
              Murakkab testlarsiz, ilmiy asoslangan psixometrik metodologiya yordamida o‘z yo‘lingizni aniqlang.
            </p>
          </div>

          <div className="approach-editorial-grid">
            {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
              <div key={index} className="approach-step-card">
                <div className="step-num-pill">{stepItem.step}</div>
                <div className="step-icon-container">
                  <DynamicIcon name={stepItem.iconName} size={26} />
                </div>
                <h3 className="step-card-title">{stepItem.title}</h3>
                <p className="step-card-desc">{stepItem.description}</p>
                <div className="step-card-bottom-mark">✦ FUTURE ME</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What Our Students Say (Testimonials, Image 1 style with 5 stars and quotes) */}
      <section className="section-padding testimonials-editorial-section">
        <div className="page-container">
          <div className="editorial-section-header-row">
            <div>
              <div className="editorial-pill-badge">
                <span className="pill-dot"></span>
                <span>Foydalanuvchilar Fikrlari</span>
              </div>
              <h2 className="editorial-section-title">
                O‘quvchilar Biz Haqimizda <span className="editorial-serif-italic">Nima Deydi?</span>
              </h2>
            </div>
            <div className="slider-nav-arrows">
              <button className="slider-arrow-btn" aria-label="Oldingi"><ChevronLeft size={18} /></button>
              <button className="slider-arrow-btn" aria-label="Keyingi"><ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="testimonials-editorial-grid">
            {TESTIMONIALS_DATA.map((item) => (
              <div key={item.id} className="testimonial-editorial-card">
                <div className="testimonial-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#D97706" color="#D97706" />
                  ))}
                </div>

                <div className="quote-mark-large">“</div>

                <p className="testimonial-editorial-quote">
                  {item.quote}
                </p>

                <div className="testimonial-author-block">
                  <div className="testimonial-avatar-circle">
                    {item.initials}
                  </div>
                  <div className="testimonial-author-details">
                    <strong className="author-name-text">{item.name}</strong>
                    <span className="author-role-text">{item.role} • {item.career}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "Let's Work Together" / Shaxsiy Rejangizni Boshlang (Image 1 style) */}
      <section className="section-padding cta-editorial-section">
        <div className="page-container">
          <div className="cta-together-card">
            <div className="cta-together-header">
              <div className="editorial-pill-badge">
                <span className="pill-dot"></span>
                <span>Shaxsiy Rejangizni Boshlang</span>
              </div>
              <div className="together-title-wrap">
                <h2 className="cta-together-title">
                  O‘z Kelajagingizni <br />
                  <span className="editorial-serif-italic">Birgalikda Yaratamiz</span>
                </h2>
                <div className="editorial-slash-doodles">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <p className="cta-together-desc">
                Birgina to‘g‘ri qaror butun umringizni o‘zgartirishi mumkin. 15 daqiqalik qiziqarli test orqali o‘zingizga mos TOP 3 kasb va 3 yillik yo‘l xaritasini oling.
              </p>
            </div>

            <div className="cta-together-form-box">
              <div className="together-inputs-row">
                <div className="together-input-group">
                  <label>Ismingiz</label>
                  <input type="text" placeholder="Masalan: Azizbek" className="together-input" />
                </div>
                <div className="together-input-group">
                  <label>Sinfingiz yoki Bosqichingiz</label>
                  <input type="text" placeholder="Masalan: 10-sinf yoki Talaba" className="together-input" />
                </div>
              </div>
              <div className="together-submit-row">
                <Link to="/discover" className="btn-editorial-primary w-full-mobile">
                  <span>Testni Boshlash</span>
                  <div className="btn-circle-icon">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="together-contact-badges">
              <div className="contact-badge-item">
                <Mail size={16} />
                <span>info@futureme.uz</span>
              </div>
              <div className="contact-badge-item">
                <MapPin size={16} />
                <span>Toshkent, O‘zbekiston</span>
              </div>
              <div className="contact-badge-item">
                <Phone size={16} />
                <span>+998 71 200 00 00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Details Modal */}
      <Modal 
        isOpen={!!selectedCareerModal} 
        onClose={() => setSelectedCareerModal(null)}
        title="Kasb Pasporti"
      >
        <CareerDetailContent 
          career={selectedCareerModal} 
          onClose={() => setSelectedCareerModal(null)} 
        />
      </Modal>
    </div>
  );
}
