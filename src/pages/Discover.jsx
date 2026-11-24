import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import QuizQuestion from '../components/QuizQuestion';
import ProgressBar from '../components/ProgressBar';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export default function Discover() {
  const { quizAnswers, saveAnswer, resetQuiz } = useApp();
  const navigate = useNavigate();

  // Find first unanswered question or default to 0
  const [currentIndex, setCurrentIndex] = useState(() => {
    const answeredKeys = Object.keys(quizAnswers).map(Number);
    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      if (!answeredKeys.includes(QUIZ_QUESTIONS[i].id)) {
        return i;
      }
    }
    return 0;
  });

  const [showCelebration, setShowCelebration] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentAnswer = quizAnswers[currentQuestion.id];
  const isCurrentAnswered = currentAnswer !== undefined;

  const answeredCount = Object.keys(quizAnswers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelectOption = (optionIndex) => {
    setWarningMessage('');
    saveAnswer(currentQuestion.id, optionIndex);
  };

  const handleNext = () => {
    if (!isCurrentAnswered) {
      setWarningMessage('Iltimos, davom etishdan oldin variantlardan birini tanlang.');
      return;
    }

    setWarningMessage('');

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      // Completed all 15 questions!
      triggerCelebration();
    }
  };

  const handlePrevious = () => {
    setWarningMessage('');
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const triggerCelebration = () => {
    setShowCelebration(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Confetti fallback
    }
  };

  const handleGoToResults = () => {
    navigate('/results');
  };

  const handleRestartQuiz = () => {
    if (window.confirm("Rostdan ham barcha javoblarni tozalab, testni boshidan boshlamoqchimisiz?")) {
      resetQuiz();
      setCurrentIndex(0);
      setShowCelebration(false);
    }
  };

  return (
    <div className="discover-page-root">
      <div className="discover-glow-top"></div>
      
      <div className="page-container">
        {/* Page Top Heading */}
        <div className="discover-header-center">
          <div className="section-badge">
            <Compass size={14} />
            <span>Psixometrik Tahlil</span>
          </div>
          <h1 className="discover-title">
            Qiziqishlaringizni <span className="text-gradient">Aniqlang</span>
          </h1>
          <p className="discover-subtitle">
            15 ta maxsus savol orqali shaxsiy fikrlash uslubingiz va sizga eng mos keluvchi kasblarni hisoblaymiz.
          </p>
        </div>

        {/* Global Progress Bar */}
        <div className="quiz-progress-panel">
          <div className="quiz-progress-meta">
            <div className="progress-info-left">
              <span className="progress-step-text">
                Savol: <strong>{currentIndex + 1}</strong> / {totalQuestions}
              </span>
              <span className="progress-answered-tag">
                {answeredCount} ta savolga javob berildi
              </span>
            </div>
            <button
              type="button"
              className="btn-text-reset"
              onClick={handleRestartQuiz}
              title="Testni qayta boshlash"
            >
              <RotateCcw size={14} />
              <span>Qayta boshlash</span>
            </button>
          </div>

          <ProgressBar 
            value={answeredCount} 
            max={totalQuestions} 
            showText={false}
            height="8px"
          />

          {/* Question dot indicators */}
          <div className="question-pills-row">
            {QUIZ_QUESTIONS.map((q, idx) => {
              const isAnswered = quizAnswers[q.id] !== undefined;
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  className={`q-pill ${isCurrent ? 'q-pill-current' : ''} ${isAnswered ? 'q-pill-answered' : ''}`}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setWarningMessage('');
                  }}
                  title={`${q.id}-savol`}
                  aria-label={`${q.id}-savol`}
                >
                  {isAnswered && !isCurrent ? <CheckCircle2 size={12} /> : q.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Question Box */}
        <div className="question-wrapper">
          <QuizQuestion
            question={currentQuestion}
            selectedOptionIndex={currentAnswer}
            onSelectOption={handleSelectOption}
            totalQuestions={totalQuestions}
          />

          {/* Validation Warning Alert */}
          {warningMessage && (
            <div className="quiz-warning-banner">
              <AlertCircle size={16} />
              <span>{warningMessage}</span>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="quiz-nav-bar">
            <button
              type="button"
              className="btn-quiz-nav btn-quiz-prev"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ArrowLeft size={18} />
              <span>Oldingi</span>
            </button>

            <div className="quiz-current-status">
              {isCurrentAnswered ? (
                <span className="status-answered">
                  <CheckCircle2 size={15} /> Javob tanlandi
                </span>
              ) : (
                <span className="status-pending">
                  Variant tanlang
                </span>
              )}
            </div>

            <button
              type="button"
              className={`btn-quiz-nav btn-quiz-next ${isCurrentAnswered ? 'btn-next-active' : 'btn-next-disabled'}`}
              onClick={handleNext}
            >
              <span>{currentIndex === totalQuestions - 1 ? 'Natijalarni ko‘rish' : 'Keyingi'}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Helpful Tips Card */}
        <div className="quiz-tip-card">
          <HelpCircle size={20} className="tip-icon" />
          <div className="tip-content">
            <strong>Maslahat:</strong> To‘g‘ri yoki noto‘g‘ri javob yo‘q. 
            O‘zingizga eng yaqin va samimiy bo‘lgan variantni tanlang. 
            Xohlagan vaqtingizda oldingi savollarga qaytib, javobni o‘zgartirishingiz mumkin.
          </div>
        </div>
      </div>

      {/* Completion Celebration Overlay */}
      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-card">
            <div className="celebration-icon-halo">
              <Sparkles size={48} className="celebration-sparkle" />
            </div>

            <h2 className="celebration-title">Tabriklaymiz! 🎉</h2>
            <p className="celebration-motto">
              Barcha 15 ta savolga muvaffaqiyatli javob berdingiz!
            </p>
            <p className="celebration-desc">
              Sizning qiziqishlaringiz va qobiliyatlaringiz algoritmlar orqali to‘liq hisoblab chiqildi. 
              Sizga mos TOP 3 ta kelajak kasbini ko‘rishga tayyormisiz?
            </p>

            <button
              type="button"
              className="btn-primary-gradient celebration-cta-btn"
              onClick={handleGoToResults}
            >
              <span>Natijalarni tahlil qilish</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
