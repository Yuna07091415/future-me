import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { calculateQuizResults } from '../utils/quizCalculator';
import { CAREERS_DATA } from '../data/careersData';

const AppContext = createContext();

const INITIAL_GOALS = [
  {
    id: 'goal-1',
    title: 'Ingliz tili darajasini IELTS 7.0+ yoki B2 ga ko‘tarish',
    category: 'Til o‘rganish',
    priority: 'Yuqori',
    deadline: '2027-05-30',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'goal-2',
    title: 'Haftasiga kamida 5 ta mantiqiy yoki amaliy masala yechish',
    category: 'Mantiqiy rivojlanish',
    priority: 'O‘rta',
    deadline: '2026-12-31',
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'goal-3',
    title: 'Shaxsiy portfolioda 1 ta xalqaro darajadagi keys yaratish',
    category: 'Karyera',
    priority: 'Yuqori',
    deadline: '2027-09-01',
    completed: false,
    createdAt: new Date().toISOString()
  }
];

export function AppProvider({ children }) {
  // Theme state: dark is default futuristic theme
  const [theme, setTheme] = useLocalStorage('future_me_theme', 'dark');

  // Favorites state: array of career IDs
  const [favorites, setFavorites] = useLocalStorage('future_me_favorites', ['dasturchi', 'ui-ux-dizayner']);

  // Quiz state: answers map { [qId]: optionIndex }
  const [quizAnswers, setQuizAnswers] = useLocalStorage('future_me_quiz_answers', {});

  // Personal Goals state
  const [goals, setGoals] = useLocalStorage('future_me_goals', INITIAL_GOALS);

  // Selected Career for 2030 Roadmap
  const [selectedCareerId, setSelectedCareerId] = useLocalStorage('future_me_selected_career', 'dasturchi');

  // Completed Roadmap Milestones IDs
  const [roadmapMilestones, setRoadmapMilestones] = useLocalStorage('future_me_roadmap_milestones', []);

  // Toasts
  const [toasts, setToasts] = useState([]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Favorites handlers
  const isFavorite = (careerId) => favorites.includes(careerId);

  const toggleFavorite = (careerId) => {
    if (favorites.includes(careerId)) {
      setFavorites(favorites.filter(id => id !== careerId));
      showToast('Kasb sevimlilardan o‘chirildi', 'info');
    } else {
      setFavorites([...favorites, careerId]);
      showToast('Kasb sevimlilarga qo‘shildi! ⭐', 'success');
    }
  };

  // Quiz handlers
  const saveAnswer = (questionId, optionIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    showToast('Test yangitdan boshlash uchun tozalandi', 'info');
  };

  // Quiz results calculation
  const quizResults = useMemo(() => {
    const answeredCount = Object.keys(quizAnswers).length;
    if (answeredCount === 0) return null;
    return calculateQuizResults(quizAnswers);
  }, [quizAnswers]);

  // Sync selected roadmap career with top quiz result if available
  useEffect(() => {
    if (quizResults?.topCareers?.[0]?.id && !selectedCareerId) {
      setSelectedCareerId(quizResults.topCareers[0].id);
    }
  }, [quizResults, selectedCareerId, setSelectedCareerId]);

  // Goals handlers
  const addGoal = (newGoal) => {
    const goalItem = {
      id: 'goal-' + Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
      ...newGoal
    };
    setGoals(prev => [goalItem, ...prev]);
    showToast('Yangi maqsad rejangizga muvaffaqiyatli qo‘shildi! 🎯', 'success');
  };

  const updateGoal = (id, updatedFields) => {
    setGoals(prev => prev.map(g => g.id === id ? { ...g, ...updatedFields } : g));
    showToast('Maqsad yangilandi ✍️', 'success');
  };

  const deleteGoal = (id) => {
    setGoals(prev => prev.filter(g => g.id !== id));
    showToast('Maqsad o‘chirildi', 'info');
  };

  const toggleGoal = (id) => {
    setGoals(prev => prev.map(g => {
      if (g.id === id) {
        const nextState = !g.completed;
        if (nextState) {
          showToast('Ajoyib natija! Maqsad bajarildi! 🚀', 'success');
        }
        return { ...g, completed: nextState };
      }
      return g;
    }));
  };

  // Roadmap Milestones handlers
  const isMilestoneCompleted = (mId) => roadmapMilestones.includes(mId);

  const toggleMilestone = (mId) => {
    if (roadmapMilestones.includes(mId)) {
      setRoadmapMilestones(prev => prev.filter(id => id !== mId));
    } else {
      setRoadmapMilestones(prev => [...prev, mId]);
      showToast('Bosqich bajarildi deb belgilandi! 🌟', 'success');
    }
  };

  const selectedCareer = useMemo(() => {
    return CAREERS_DATA.find(c => c.id === selectedCareerId) || CAREERS_DATA[0];
  }, [selectedCareerId]);

  const value = {
    theme,
    toggleTheme,
    favorites,
    isFavorite,
    toggleFavorite,
    quizAnswers,
    saveAnswer,
    resetQuiz,
    quizResults,
    goals,
    addGoal,
    updateGoal,
    deleteGoal,
    toggleGoal,
    selectedCareerId,
    setSelectedCareerId,
    selectedCareer,
    roadmapMilestones,
    isMilestoneCompleted,
    toggleMilestone,
    toasts,
    showToast,
    removeToast
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
