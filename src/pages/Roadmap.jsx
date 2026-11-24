import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import GoalCard from '../components/GoalCard';
import ProgressBar from '../components/ProgressBar';
import Modal from '../components/Modal';
import CareerDetailContent from '../components/CareerDetailContent';
import EmptyState from '../components/EmptyState';
import DynamicIcon from '../components/DynamicIcon';
import { CAREERS_DATA } from '../data/careersData';
import { getRoadmapForCareer } from '../data/roadmapsData';
import { 
  MapPin, 
  Target, 
  Plus, 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  TrendingUp, 
  Award,
  Zap,
  Filter
} from 'lucide-react';

export default function Roadmap() {
  const { 
    goals, 
    addGoal, 
    favorites, 
    isFavorite, 
    toggleFavorite,
    selectedCareerId, 
    setSelectedCareerId,
    selectedCareer,
    roadmapMilestones,
    isMilestoneCompleted,
    toggleMilestone
  } = useApp();

  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);
  const [goalFilter, setGoalFilter] = useState('all'); // all, active, completed

  // New goal form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Kasbiy ko‘nikma');
  const [newPriority, setNewPriority] = useState('Yuqori');
  const [newDeadline, setNewDeadline] = useState('');

  // 3-Year Roadmap calculation for selected career
  const currentRoadmap = useMemo(() => {
    return getRoadmapForCareer(selectedCareer);
  }, [selectedCareer]);

  // Count milestones in current roadmap
  const allMilestoneIds = useMemo(() => {
    const ids = [];
    currentRoadmap.years.forEach(y => {
      y.milestones.forEach(m => ids.push(m.id));
    });
    return ids;
  }, [currentRoadmap]);

  const completedMilestonesCount = allMilestoneIds.filter(id => isMilestoneCompleted(id)).length;
  const roadmapProgressPct = allMilestoneIds.length > 0 
    ? Math.round((completedMilestonesCount / allMilestoneIds.length) * 100) 
    : 0;

  // Goals calculation
  const totalGoals = goals.length;
  const completedGoals = goals.filter(g => g.completed).length;
  const goalsProgressPct = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  const filteredGoals = useMemo(() => {
    if (goalFilter === 'active') return goals.filter(g => !g.completed);
    if (goalFilter === 'completed') return goals.filter(g => g.completed);
    return goals;
  }, [goals, goalFilter]);

  // Favorite careers data
  const favoritedCareers = useMemo(() => {
    return CAREERS_DATA.filter(c => favorites.includes(c.id));
  }, [favorites]);

  const handleCreateGoal = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addGoal({
      title: newTitle.trim(),
      category: newCategory,
      priority: newPriority,
      deadline: newDeadline || null
    });

    setNewTitle('');
    setNewCategory('Kasbiy ko‘nikma');
    setNewPriority('Yuqori');
    setNewDeadline('');
    setIsAddGoalModalOpen(false);
  };

  return (
    <div className="roadmap-page-root">
      <div className="roadmap-glow-bg"></div>

      <div className="page-container">
        {/* Page Top Heading */}
        <div className="roadmap-header-center">
          <div className="section-badge">
            <MapPin size={14} />
            <span>Shaxsiy Boshqaruv Paneli</span>
          </div>
          <h1 className="roadmap-title">
            Mening Kelajak <span className="text-gradient">Rejam</span>
          </h1>
          <p className="roadmap-subtitle">
            Future Vision 2030: O‘z maqsadlaringizni belgilang, 3 yillik bosqichlarni nazorat qiling va natijalarga erishing.
          </p>
        </div>

        {/* Global Progress Dashboard Stats */}
        <section className="dashboard-stats-grid">
          {/* Stat 1: 3-Year Vision Progress */}
          <div className="dash-stat-box">
            <div className="dash-stat-header">
              <div className="dash-stat-icon-wrap" style={{ background: 'rgba(34, 211, 238, 0.15)', color: '#22D3EE' }}>
                <Sparkles size={20} />
              </div>
              <span className="dash-stat-badge">2030 Vision</span>
            </div>
            <div className="dash-stat-val">{roadmapProgressPct}%</div>
            <div className="dash-stat-label">3 Yillik Reja Bajarilishi</div>
            <p className="dash-stat-sub">{completedMilestonesCount} / {allMilestoneIds.length} ta bosqich yakunlandi</p>
            <ProgressBar value={roadmapProgressPct} max={100} showText={false} height="6px" />
          </div>

          {/* Stat 2: Personal Goals Progress */}
          <div className="dash-stat-box">
            <div className="dash-stat-header">
              <div className="dash-stat-icon-wrap" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#A855F7' }}>
                <Target size={20} />
              </div>
              <span className="dash-stat-badge">Maqsadlar</span>
            </div>
            <div className="dash-stat-val">{goalsProgressPct}%</div>
            <div className="dash-stat-label">Shaxsiy Maqsadlar</div>
            <p className="dash-stat-sub">{completedGoals} / {totalGoals} ta maqsadga erishildi</p>
            <ProgressBar value={goalsProgressPct} max={100} showText={false} height="6px" colorGradient="linear-gradient(90deg, #A855F7, #EC4899)" />
          </div>

          {/* Stat 3: Favorites Count */}
          <div className="dash-stat-box">
            <div className="dash-stat-header">
              <div className="dash-stat-icon-wrap" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#EC4899' }}>
                <Bookmark size={20} />
              </div>
              <span className="dash-stat-badge">Sevimlilar</span>
            </div>
            <div className="dash-stat-val">{favorites.length}</div>
            <div className="dash-stat-label">Tanlangan Kasblar</div>
            <p className="dash-stat-sub">Siz kuzatib borayotgan sohalar</p>
            <div className="dash-quick-link">
              <Link to="/careers" className="link-sub">Katalogga o‘tish →</Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            MAXSUS FUNKSIYA: FUTURE VISION 2030
           ======================================================== */}
        <section className="vision-section">
          <div className="vision-header-panel">
            <div className="vision-info-left">
              <div className="vision-badge">
                <Zap size={14} />
                <span>MAXSUS FUNKSIYA: FUTURE VISION 2030</span>
              </div>
              <h2 className="vision-title">
                3 Yillik Rivojlanish <span className="text-gradient">Xaritasi</span>
              </h2>
              <p className="vision-desc">
                Tanlangan kasb bo‘yicha poydevordan xalqaro mutaxassis darajasigacha bo‘lgan aniq bosqichlar. 
                Har bir bosqichni bajarganingizda belgilab boring!
              </p>
            </div>

            {/* Career Selector Dropdown */}
            <div className="career-select-wrapper">
              <label htmlFor="career-select" className="career-select-label">
                Qaysi kasb uchun reja ko‘rilsin?
              </label>
              <select
                id="career-select"
                className="career-dropdown-select"
                value={selectedCareerId}
                onChange={(e) => setSelectedCareerId(e.target.value)}
              >
                {CAREERS_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Selected Career Snapshot Banner */}
          <div className="selected-career-banner">
            <div 
              className="banner-icon-box"
              style={{ 
                backgroundColor: `${selectedCareer.accentColor || '#22D3EE'}20`,
                borderColor: `${selectedCareer.accentColor || '#22D3EE'}60`,
                color: selectedCareer.accentColor || '#22D3EE'
              }}
            >
              <DynamicIcon name={selectedCareer.iconName} size={28} />
            </div>

            <div className="banner-career-info">
              <span className="banner-cat-tag">{selectedCareer.category}</span>
              <h3 className="banner-career-title">{selectedCareer.title}</h3>
              <p className="banner-career-desc">{selectedCareer.shortDescription}</p>
            </div>

            <div className="banner-actions">
              <button
                type="button"
                className="btn-glass-secondary btn-sm"
                onClick={() => setSelectedCareerModal(selectedCareer)}
              >
                Kasb pasporti
              </button>
            </div>
          </div>

          {/* 3 Years Timeline Cards */}
          <div className="vision-timeline-grid">
            {currentRoadmap.years.map((yearItem) => {
              const yearMilestones = yearItem.milestones;
              const yearDoneCount = yearMilestones.filter(m => isMilestoneCompleted(m.id)).length;
              const yearPct = Math.round((yearDoneCount / yearMilestones.length) * 100);

              return (
                <div key={yearItem.year} className="year-card">
                  <div className="year-card-header">
                    <div className="year-badge">
                      <span className="year-num">{yearItem.year}-yil</span>
                    </div>
                    <span className="year-progress-tag">{yearDoneCount}/{yearMilestones.length} bajarildi</span>
                  </div>

                  <h3 className="year-card-title">{yearItem.title}</h3>
                  <p className="year-card-focus">
                    <strong>Fokus:</strong> {yearItem.focus}
                  </p>

                  <ProgressBar 
                    value={yearPct} 
                    max={100} 
                    showText={false} 
                    height="5px" 
                    colorGradient={
                      yearItem.year === 1 
                        ? 'linear-gradient(90deg, #6D28D9, #A855F7)' 
                        : yearItem.year === 2 
                        ? 'linear-gradient(90deg, #A855F7, #22D3EE)' 
                        : 'linear-gradient(90deg, #22D3EE, #10B981)'
                    }
                  />

                  {/* Milestones Checklist */}
                  <div className="milestones-checklist">
                    {yearMilestones.map((milestone) => {
                      const isDone = isMilestoneCompleted(milestone.id);
                      return (
                        <div 
                          key={milestone.id} 
                          className={`milestone-item ${isDone ? 'milestone-done' : ''}`}
                          onClick={() => toggleMilestone(milestone.id)}
                        >
                          <button
                            type="button"
                            className="milestone-check-btn"
                            aria-label={isDone ? "Bajarilmagan deb belgilash" : "Bajarildi deb belgilash"}
                          >
                            {isDone ? (
                              <CheckCircle2 size={18} className="milestone-check-active" />
                            ) : (
                              <Circle size={18} className="milestone-check-idle" />
                            )}
                          </button>
                          <span className="milestone-title">{milestone.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            SHAXSIY MAQSADLAR (PERSONAL GOALS MANAGEMENT)
           ======================================================== */}
        <section className="goals-section">
          <div className="goals-header-panel">
            <div>
              <div className="section-badge">
                <Target size={14} />
                <span>Rivojlanish Kundaligi</span>
              </div>
              <h2 className="goals-section-title">
                Shaxsiy <span className="text-gradient">Maqsadlarim</span>
              </h2>
              <p className="goals-section-subtitle">
                O‘z maqsadlaringizni kiriting, muddatlarni belgilang va har kuni muvaffaqiyatga bir qadam yaqinlashing.
              </p>
            </div>

            <button
              type="button"
              className="btn-primary-gradient"
              onClick={() => setIsAddGoalModalOpen(true)}
            >
              <Plus size={18} />
              <span>Yangi maqsad qo‘shish</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="goals-filter-bar">
            <div className="filter-pills-wrap">
              <button
                type="button"
                className={`filter-pill-btn ${goalFilter === 'all' ? 'filter-pill-active' : ''}`}
                onClick={() => setGoalFilter('all')}
              >
                Barchasi ({totalGoals})
              </button>
              <button
                type="button"
                className={`filter-pill-btn ${goalFilter === 'active' ? 'filter-pill-active' : ''}`}
                onClick={() => setGoalFilter('active')}
              >
                Jarayonda ({totalGoals - completedGoals})
              </button>
              <button
                type="button"
                className={`filter-pill-btn ${goalFilter === 'completed' ? 'filter-pill-active' : ''}`}
                onClick={() => setGoalFilter('completed')}
              >
                Bajarilgan ({completedGoals})
              </button>
            </div>

            <span className="goals-stat-summary">
              Rivojlanish ko‘rsatkichi: <strong>{goalsProgressPct}%</strong>
            </span>
          </div>

          {/* Goals List */}
          {filteredGoals.length > 0 ? (
            <div className="goals-list-grid">
              {filteredGoals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
            </div>
          ) : (
            <div className="empty-goals-box">
              <EmptyState
                iconName="Target"
                title={goalFilter === 'completed' ? "Hali bajarilgan maqsadlar yo‘q" : "Maqsadlar mavjud emas"}
                description="O‘zingiz uchun birinchi muhim maqsadni belgilang — masalan, yangi kitob o‘qish yoki bitta kursni tamomlash."
                actionText="Maqsad qo‘shish"
                onActionClick={() => setIsAddGoalModalOpen(true)}
              />
            </div>
          )}
        </section>

        {/* ========================================================
            SEVIMLI KASBLAR (FAVORITES ROSTER)
           ======================================================== */}
        <section className="favorites-section">
          <div className="favorites-header-panel">
            <div className="section-badge">
              <Bookmark size={14} />
              <span>Saqlanganlar</span>
            </div>
            <h2 className="favorites-section-title">
              Sevimli <span className="text-gradient">Kasblarim</span>
            </h2>
            <p className="favorites-section-subtitle">
              Sizga yoqqan va kelajak uchun saqlab qo‘ygan sohalar ro‘yxati.
            </p>
          </div>

          {favoritedCareers.length > 0 ? (
            <div className="favorites-horizontal-grid">
              {favoritedCareers.map((career) => (
                <div key={career.id} className="favorite-compact-card">
                  <div 
                    className="fav-icon-box"
                    style={{ 
                      backgroundColor: `${career.accentColor || '#A855F7'}20`,
                      color: career.accentColor || '#A855F7'
                    }}
                  >
                    <DynamicIcon name={career.iconName} size={22} />
                  </div>

                  <div className="fav-info-box">
                    <span className="fav-cat-tag">{career.category}</span>
                    <h4 className="fav-title">{career.title}</h4>
                    <p className="fav-desc">{career.shortDescription}</p>
                  </div>

                  <div className="fav-actions-box">
                    <button
                      type="button"
                      className="btn-fav-roadmap"
                      onClick={() => {
                        setSelectedCareerId(career.id);
                        window.scrollTo({ top: 350, behavior: 'smooth' });
                      }}
                      title="Ushbu kasb rejasini ko‘rish"
                    >
                      <span>Rejani ko‘rish</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      type="button"
                      className="btn-fav-remove"
                      onClick={() => toggleFavorite(career.id)}
                      title="Sevimlilardan o‘chirish"
                    >
                      O‘chirish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-fav-box">
              <EmptyState
                iconName="Bookmark"
                title="Hozircha sevimli kasblar yo‘q"
                description="Kasblar katalogidan o‘zingizga yoqqan yo‘nalishlarni xatcho‘p (bookmark) belgisi orqali bu yerga saqlab qo‘yishingiz mumkin."
                actionText="Kasblar katalogiga o‘tish"
                actionLink="/careers"
              />
            </div>
          )}
        </section>
      </div>

      {/* Add New Goal Modal */}
      <Modal
        isOpen={isAddGoalModalOpen}
        onClose={() => setIsAddGoalModalOpen(false)}
        title="Yangi Maqsad Qo‘shish"
      >
        <form onSubmit={handleCreateGoal} className="add-goal-form">
          <div className="form-group">
            <label className="form-label">Maqsad nomi *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Masalan: IELTS 7.0 olish yoki Python kursini tamomlash"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label">Yo‘nalish / Kategoriya</label>
              <select
                className="form-select"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              >
                <option value="Kasbiy ko‘nikma">Kasbiy ko‘nikma</option>
                <option value="Til o‘rganish">Til o‘rganish</option>
                <option value="Karyera va Portfolio">Karyera va Portfolio</option>
                <option value="Mantiqiy rivojlanish">Mantiqiy rivojlanish</option>
                <option value="Shaxsiy intizom">Shaxsiy intizom</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Muhimlik darajasi</label>
              <select
                className="form-select"
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
              >
                <option value="Yuqori">Yuqori</option>
                <option value="O‘rta">O‘rta</option>
                <option value="Past">Past</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Bajarish muddati (Deadline)</label>
            <input
              type="date"
              className="form-input"
              value={newDeadline}
              onChange={(e) => setNewDeadline(e.target.value)}
            />
          </div>

          <div className="form-actions-right">
            <button
              type="button"
              className="btn-glass-secondary"
              onClick={() => setIsAddGoalModalOpen(false)}
            >
              Bekor qilish
            </button>
            <button type="submit" className="btn-primary-gradient">
              <Plus size={16} />
              <span>Maqsadni saqlash</span>
            </button>
          </div>
        </form>
      </Modal>

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
