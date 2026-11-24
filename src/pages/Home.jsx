import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Compass, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Target,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function Home() {
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);

  // Recommended careers to feature on the homepage
  const featuredCareers = CAREERS_DATA.slice(0, 6);

  return (
    <div className="home-page-root">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Platform Value Metrics */}
      <section className="section-padding metrics-section">
        <div className="page-container">
          <div className="metrics-grid">
            <div className="metric-box">
              <div className="metric-number">15+</div>
              <div className="metric-label">Kelajak Kasblari</div>
              <p className="metric-sub">2030 yil talablariga moslangan</p>
            </div>
            <div className="metric-box">
              <div className="metric-number">15</div>
              <div className="metric-label">Psixometrik Savol</div>
              <p className="metric-sub">Ko‘nikma va qiziqishlar tahlili</p>
            </div>
            <div className="metric-box">
              <div className="metric-number">3 Yillik</div>
              <div className="metric-label">Shaxsiy Yo‘l Xaritasi</div>
              <p className="metric-sub">Bosqichma-bosqich rivojlanish</p>
            </div>
            <div className="metric-box">
              <div className="metric-number">100%</div>
              <div className="metric-label">Ochiq va Bepul</div>
              <p className="metric-sub">O‘zbekiston yoshlari uchun</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sayt qanday ishlaydi? (3 bosqichli bo‘lim) */}
      <section className="section-padding how-it-works-section">
        <div className="page-container">
          <div className="section-header-center">
            <div className="section-badge">
              <Zap size={14} />
              <span>Oddiy va Samarali</span>
            </div>
            <h2 className="section-title">
              Sayt Qanday <span className="text-gradient">Ishlaydi?</span>
            </h2>
            <p className="section-subtitle">
              Orzuingizdagi kasbni topish va unga erishish uchun bor-yo‘g‘i 3 ta oddiy qadam kifoya.
            </p>
          </div>

          <div className="steps-grid">
            {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
              <div key={index} className="step-card">
                <div className="step-number-tag">{stepItem.step}</div>
                <div className="step-icon-halo">
                  <DynamicIcon name={stepItem.iconName} size={26} />
                </div>
                <h3 className="step-card-title">{stepItem.title}</h3>
                <p className="step-card-desc">{stepItem.description}</p>
                <div className="step-connector-glow"></div>
              </div>
            ))}
          </div>

          <div className="steps-cta-center">
            <Link to="/discover" className="btn-primary-gradient">
              <span>Hozirroq testni boshlash</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Mashhur kasb yo‘nalishlari */}
      <section className="section-padding categories-section">
        <div className="page-container">
          <div className="section-header-row">
            <div>
              <div className="section-badge">
                <Compass size={14} />
                <span>6 Ta Asosiy Soha</span>
              </div>
              <h2 className="section-title">
                Mashhur Kasb <span className="text-gradient">Yo‘nalishlari</span>
              </h2>
            </div>
            <Link to="/careers" className="link-see-all">
              <span>Barcha kasblarni ko‘rish</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="categories-grid">
            {CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
              const careersInCat = CAREERS_DATA.filter(c => c.categoryId === cat.id);
              return (
                <Link 
                  key={cat.id} 
                  to={`/careers?category=${cat.id}`}
                  className="category-card"
                >
                  <div className="category-icon-box">
                    <DynamicIcon name={cat.iconName} size={28} />
                  </div>
                  <h3 className="category-card-name">{cat.name}</h3>
                  <p className="category-card-count">{careersInCat.length} ta istiqbolli kasb</p>
                  <div className="category-card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Tavsiya etilgan eng talabgir kasblar */}
      <section className="section-padding featured-careers-section">
        <div className="page-container">
          <div className="section-header-center">
            <div className="section-badge">
              <TrendingUp size={14} />
              <span>2030 Trendlari</span>
            </div>
            <h2 className="section-title">
              Tavsiya Etilgan <span className="text-gradient">Kasblar</span>
            </h2>
            <p className="section-subtitle">
              Kelgusi 5–10 yil ichida butun dunyoda va O‘zbekistonda eng yuqori talabga ega bo‘ladigan sohalar.
            </p>
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

          <div className="featured-bottom-btn">
            <Link to="/careers" className="btn-secondary-glass">
              <span>15+ barcha kasblarni ko‘rish</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Foydalanuvchilar fikrlari (Testimonials) */}
      <section className="section-padding testimonials-section">
        <div className="page-container">
          <div className="section-header-center">
            <div className="section-badge">
              <Users size={14} />
              <span>Muvaffaqiyat Hikoyalari</span>
            </div>
            <h2 className="section-title">
              O‘quvchilar Biz Haqimizda <span className="text-gradient">Nima Deydi?</span>
            </h2>
            <p className="section-subtitle">
              FUTURE ME orqali o‘z yo‘lini topgan iqtidorli yoshlar tajribalari.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS_DATA.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar-wrap">
                    <span className="testimonial-initials">{item.initials}</span>
                  </div>
                  <div className="testimonial-author-info">
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>

                <div className="testimonial-badge-pill">
                  <Award size={13} />
                  <span>{item.career} • {item.badge}</span>
                </div>

                <p className="testimonial-quote">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Big Call-to-Action Banner */}
      <section className="section-padding cta-banner-section">
        <div className="page-container">
          <div className="cta-banner-card">
            <div className="cta-banner-glow"></div>
            <div className="cta-content">
              <span className="cta-tag">Kelajak kutmaydi</span>
              <h2 className="cta-heading">
                O‘z Taqdiringizni O‘zingiz Yarating.
              </h2>
              <p className="cta-sub">
                "Your Future Starts With One Decision." <br />
                Bugunoq 15 daqiqa vaqt ajrating va 2030 yilgi muvaffaqiyat poydevorini quring.
              </p>
              <div className="cta-btn-group">
                <Link to="/discover" className="btn-primary-gradient cta-main-btn">
                  <span>Qiziqishlarni aniqlash testini boshlash</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/roadmap" className="btn-secondary-glass cta-sub-btn">
                  <span>Mening Rejam paneli</span>
                </Link>
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
