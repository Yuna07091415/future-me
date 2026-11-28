import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import ResultCard from '../components/ResultCard';
import Modal from '../components/Modal';
import CareerDetailContent from '../components/CareerDetailContent';
import EmptyState from '../components/EmptyState';
import ProgressBar from '../components/ProgressBar';
import { sendQuizResultToTelegram, TELEGRAM_CONFIG } from '../utils/telegramService';
import { 
  BarChart3, 
  RotateCcw, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Compass,
  Send
} from 'lucide-react';

export default function Results() {
  const { quizResults, quizAnswers, resetQuiz, showToast, t } = useApp();
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [isSendingResult, setIsSendingResult] = useState(false);
  const [resultSent, setResultSent] = useState(false);
  const navigate = useNavigate();

  // If no answers or quiz not taken
  if (!quizResults || Object.keys(quizAnswers).length === 0) {
    return (
      <div className="results-page-root">
        <div className="page-container" style={{ padding: '80px 20px' }}>
          <EmptyState
            iconName="BarChart3"
            title={t('resultsEmptyTitle')}
            description={t('resultsEmptyDesc')}
            actionText={t('resultsEmptyBtn')}
            actionLink="/discover"
          />
        </div>
      </div>
    );
  }

  const { topCareers, sortedCategories, totalAnswered } = quizResults;

  const handleSendResultToTelegram = async (e) => {
    e.preventDefault();
    setIsSendingResult(true);
    try {
      await sendQuizResultToTelegram({
        name: userName.trim() || 'Mehmon Foydalanuvchi',
        contact: userContact.trim(),
        topCareers,
        totalAnswered,
      });
      setResultSent(true);
      showToast('Test natijalaringiz Telegram botga muvaffaqiyatli yuborildi! 📊', 'success');
    } catch (err) {
      showToast(`Telegramga yuborishda xatolik: ${err.message}`, 'error');
    } finally {
      setIsSendingResult(false);
    }
  };

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
            <span>{t('resultsBadge')}</span>
          </div>

          <h1 className="results-title">
            {t('resultsTitle')} <span className="text-gradient">{t('resultsHighlight')}</span>
          </h1>

          <p className="results-subtitle">
            {t('resultsSub')}
          </p>

          <div className="results-quick-stats">
            <span className="stat-pill">
              <CheckCircle2 size={14} color="#10B981" />
              {totalAnswered} {t('resultsAnalyzedCount')}
            </span>
            <span className="stat-pill">
              <Sparkles size={14} color="#22D3EE" />
              {t('resultsAlgoTag')}
            </span>
            <button
              type="button"
              className="btn-retake-header"
              onClick={handleRetakeQuiz}
            >
              <RotateCcw size={14} />
              <span>{t('resultsRetake')}</span>
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
                  {t('resultsDiagramTitle')}
                </h3>
                <p className="diagram-subtitle">
                  {t('resultsDiagramSub')}
                </p>
              </div>

              <div className="diagram-top-badge">
                <span>{t('resultsLeadingCat')}</span>
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
          <div className="next-steps-card" style={{ marginBottom: '28px' }}>
            <div className="next-steps-content">
              <div className="editorial-pill-badge">
                <span className="pill-dot"></span>
                <span>Telegram Bot Integratsiyasi</span>
              </div>
              <h3 className="next-steps-title">
                Natijangizni Telegramga Yuboring
              </h3>
              <p className="next-steps-desc">
                TOP 3 mos kasbingiz va tahlil natijangizni <strong>@{TELEGRAM_CONFIG.BOT_USERNAME}</strong> botiga yuboring va shaxsiy maslahat oling.
              </p>

              <form onSubmit={handleSendResultToTelegram} style={{ maxWidth: '520px', margin: '0 auto 20px auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <input
                    type="text"
                    placeholder="Ismingiz (ixtiyoriy)"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="together-input"
                  />
                  <input
                    type="text"
                    placeholder="Telegram @username yoki tel"
                    value={userContact}
                    onChange={(e) => setUserContact(e.target.value)}
                    className="together-input"
                  />
                </div>
                <div className="next-steps-buttons">
                  <button
                    type="submit"
                    disabled={isSendingResult}
                    className="btn-editorial-primary"
                  >
                    <Send size={16} />
                    <span>{isSendingResult ? 'Yuborilmoqda...' : resultSent ? 'Yuborildi ✓' : 'Natijani Telegramga Yuborish'}</span>
                  </button>
                  <a
                    href={TELEGRAM_CONFIG.BOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-outline"
                  >
                    <span>Botni Ochish (@{TELEGRAM_CONFIG.BOT_USERNAME})</span>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="next-steps-card">
            <div className="next-steps-content">
              <h3 className="next-steps-title">
                {t('resultsNextTitle')}
              </h3>
              <p className="next-steps-desc">
                {t('resultsNextDesc')}
              </p>
              <div className="next-steps-buttons">
                <Link to="/roadmap" className="btn-editorial-primary">
                  <span>{t('resultsGoRoadmap')}</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/careers" className="btn-editorial-outline">
                  <span>{t('resultsGoCareers')}</span>
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
