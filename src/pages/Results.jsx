import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import ResultCard from '../components/ResultCard';
import Modal from '../components/Modal';
import CareerDetailContent from '../components/CareerDetailContent';
import EmptyState from '../components/EmptyState';
import ProgressBar from '../components/ProgressBar';
import { 
  BarChart3, 
  RotateCcw, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Compass, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Share2 
} from 'lucide-react';

export default function Results() {
  const { quizResults, quizAnswers, resetQuiz } = useApp();
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);
  const navigate = useNavigate();

  // If no answers or quiz not taken
  if (!quizResults || Object.keys(quizAnswers).length === 0) {
    return (
      <div className="results-page-root">
        <div className="page-container" style={{ padding: '80px 20px' }}>
          <EmptyState
            iconName="BarChart3"
            title="Hali test topshirilmadi"
            description="Kasbiy yo‘nalishingiz va sizga mos keluvchi TOP 3 kasbni aniqlash uchun avval 15 ta savoldan iborat qiziqishlar testini topshiring."
            actionText="Testni hoziroq boshlash"
            actionLink="/discover"
          />
        </div>
      </div>
    );
  }

  const { topCareers, sortedCategories, totalAnswered } = quizResults;

  const handleRetakeQuiz = () => {
    if (window.confirm("Testni qayta topshirishni xohlaysizmi? Oldingi natijalar tozalanadi.")) {
      resetQuiz();
      navigate('/discover');
    }
  };

  return (
    <div className="results-page-root">
      <div className="results-glow-bg"></div>

      <div className="page-container">
        {/* Page Top Heading */}
        <div className="results-header-center">
          <div className="section-badge">
            <BarChart3 size={14} />
            <span>Hisoblangan Natijalar</span>
          </div>

          <h1 className="results-title">
            Sizga Mos Keluvchi <span className="text-gradient">TOP 3 Kasb</span>
          </h1>

          <p className="results-subtitle">
            15 ta savolga bergan samimiy javoblaringiz asosida JavaScript algoritmi orqali hisoblangan shaxsiy tahlil.
          </p>

          <div className="results-quick-stats">
            <span className="stat-pill">
              <CheckCircle2 size={14} color="#10B981" />
              {totalAnswered} ta savol tahlil qilindi
            </span>
            <span className="stat-pill">
              <Sparkles size={14} color="#22D3EE" />
              Algoritm: Multi-Vektorli Qiziqishlar Modeli
            </span>
            <button
              type="button"
              className="btn-retake-header"
              onClick={handleRetakeQuiz}
            >
              <RotateCcw size={14} />
              <span>Testni qayta ishlash</span>
            </button>
          </div>
        </div>

        {/* TOP 3 Cards Grid */}
        <section className="top-careers-section">
          <div className="top-careers-grid">
            {topCareers.map((career) => (
              <ResultCard
                key={career.id}
                career={career}
                rank={career.rank}
                onOpenDetails={(c) => setSelectedCareerModal(c)}
              />
            ))}
          </div>
        </section>

        {/* Statistical Breakdown Diagram (Qiziqishlar bo‘yicha diagramma) */}
        <section className="stats-diagram-section">
          <div className="stats-diagram-card">
            <div className="diagram-header">
              <div>
                <h3 className="diagram-title">
                  <Layers size={20} className="diagram-icon" />
                  Qiziqishlar Yo‘nalishi Bo‘yicha Statistika
                </h3>
                <p className="diagram-subtitle">
                  Sizning javoblaringiz 6 ta asosiy qobiliyat klasteri bo‘yicha qanday taqsimlandi:
                </p>
              </div>

              <div className="diagram-top-badge">
                <span>Yetakchi soha:</span>
                <strong>{sortedCategories[0]?.name}</strong>
              </div>
            </div>

            <div className="categories-breakdown-list">
              {sortedCategories.map((cat, idx) => (
                <div key={cat.categoryId} className="category-stat-row">
                  <div className="cat-stat-info">
                    <span className="cat-stat-rank">#{idx + 1}</span>
                    <span className="cat-stat-name">{cat.name}</span>
                    <span className="cat-stat-score" style={{ color: cat.color }}>
                      {cat.score}%
                    </span>
                  </div>

                  <ProgressBar
                    value={cat.score}
                    max={100}
                    showText={false}
                    colorGradient={`linear-gradient(90deg, ${cat.color}88, ${cat.color})`}
                    height="10px"
                  />
                </div>
              ))}
            </div>

            <div className="diagram-footer-note">
              <Sparkles size={16} color="#A855F7" />
              <p>
                <strong>Eslatma:</strong> Ushbu ko‘rsatkichlar sun'iy intellekt emas, balki qat'iy psixometrik 
                ballar hisobi asosida tuzilgan. Eng yuqori ball to‘plagan yo‘nalishlar sizning tabiiy moyilligingizni aks ettiradi.
              </p>
            </div>
          </div>
        </section>

        {/* Next Step Action Box */}
        <section className="results-next-steps">
          <div className="next-steps-card">
            <div className="next-steps-content">
              <h3 className="next-steps-title">
                Endi nima qilish kerak?
              </h3>
              <p className="next-steps-desc">
                Tavsiya etilgan kasblardan birini tanlab, o‘zingizning 3 yillik Future Vision 2030 rejangizni tuzing 
                yoki qolgan 15+ barcha kasblar katalogini ko‘zdan kechiring.
              </p>
              <div className="next-steps-buttons">
                <Link to="/roadmap" className="btn-primary-gradient">
                  <span>Mening 2030 Yo‘l Xaritam</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/careers" className="btn-secondary-glass">
                  <span>Barcha Kasblar Katalogi</span>
                  <Compass size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Details Modal */}
      <Modal
        isOpen={!!selectedCareerModal}
        onClose={() => setSelectedCareerModal(null)}
        title="Kasb Pasporti va Tavsiyalar"
      >
        <CareerDetailContent
          career={selectedCareerModal}
          onClose={() => setSelectedCareerModal(null)}
        />
      </Modal>
    </div>
  );
}
