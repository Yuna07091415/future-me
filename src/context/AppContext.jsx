import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { calculateQuizResults } from '../utils/quizCalculator';
import { CAREERS_DATA } from '../data/careersData';
import { TRANSLATIONS } from '../data/translations';

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

  // Language state: 'uz' | 'en' | 'ru'
  const [language, setLanguage] = useLocalStorage('future_me_lang', 'uz');

  // Favorites state: array of career IDs
  const [favorites, setFavorites] = useLocalStorage('future_me_favorites', ['dasturchi', 'doktor', 'advokat']);

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

  // Translation helper
  const t = (key) => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['uz']?.[key] || key;
  };

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

  // Favorites handlers (using functional updates to prevent stale state & immediate sync)
  const isFavorite = (careerId) => Array.isArray(favorites) && favorites.includes(careerId);

  const toggleFavorite = (careerId) => {
    setFavorites(prev => {
      const currentList = Array.isArray(prev) ? prev : [];
      if (currentList.includes(careerId)) {
        showToast(language === 'en' ? 'Removed from saved' : language === 'ru' ? 'Удалено из избранного' : 'Kasb sevimlilardan o‘chirildi', 'info');
        return currentList.filter(id => id !== careerId);
      } else {
        showToast(language === 'en' ? 'Saved to favorites! ⭐' : language === 'ru' ? 'Добавлено в избранное! ⭐' : 'Kasb sevimlilarga qo‘shildi! ⭐', 'success');
        return [...currentList, careerId];
      }
    });
  };

  // Quiz handlers (immediate persistence)
  const saveAnswer = (questionId, optionIndex) => {
    setQuizAnswers(prev => ({
      ...(prev && typeof prev === 'object' ? prev : {}),
      [questionId]: optionIndex
    }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    showToast(language === 'en' ? 'Test reset successfully' : language === 'ru' ? 'Тест успешно сброшен' : 'Test yangitdan boshlash uchun tozalandi', 'info');
  };

  // Quiz results calculation
  const quizResults = useMemo(() => {
    const answersObj = quizAnswers && typeof quizAnswers === 'object' ? quizAnswers : {};
    const answeredCount = Object.keys(answersObj).length;
    if (answeredCount === 0) return null;
    return calculateQuizResults(answersObj);
  }, [quizAnswers]);

  // Sync selected roadmap career with top quiz result if available
  useEffect(() => {
    if (quizResults?.topCareers?.[0]?.id && !selectedCareerId) {
      setSelectedCareerId(quizResults.topCareers[0].id);
    }
  }, [quizResults, selectedCareerId, setSelectedCareerId]);

  // Goals handlers (functional updates for rock-solid state)
  const addGoal = (newGoal) => {
    const goalItem = {
      id: 'goal-' + Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
      ...newGoal
    };
    setGoals(prev => [goalItem, ...(Array.isArray(prev) ? prev : [])]);
    showToast(language === 'en' ? 'New goal added! 🎯' : language === 'ru' ? 'Новая цель добавлена! 🎯' : 'Yangi maqsad rejangizga qo‘shildi! 🎯', 'success');
  };

  const updateGoal = (id, updatedFields) => {
    setGoals(prev => (Array.isArray(prev) ? prev : []).map(g => g.id === id ? { ...g, ...updatedFields } : g));
    showToast(language === 'en' ? 'Goal updated ✍️' : language === 'ru' ? 'Цель обновлена ✍️' : 'Maqsad yangilandi ✍️', 'success');
  };

  const deleteGoal = (id) => {
    setGoals(prev => (Array.isArray(prev) ? prev : []).filter(g => g.id !== id));
    showToast(language === 'en' ? 'Goal removed' : language === 'ru' ? 'Цель удалена' : 'Maqsad o‘chirildi', 'info');
  };

  const toggleGoal = (id) => {
    setGoals(prev => (Array.isArray(prev) ? prev : []).map(g => {
      if (g.id === id) {
        const nextState = !g.completed;
        if (nextState) {
          showToast(language === 'en' ? 'Goal completed! 🚀' : language === 'ru' ? 'Цель выполнена! 🚀' : 'Ajoyib! Maqsad bajarildi! 🚀', 'success');
        }
        return { ...g, completed: nextState };
      }
      return g;
    }));
  };

  // Roadmap Milestones handlers (functional updates & immediate persistence)
  const isMilestoneCompleted = (mId) => Array.isArray(roadmapMilestones) && roadmapMilestones.includes(mId);

  const toggleMilestone = (mId) => {
    setRoadmapMilestones(prev => {
      const current = Array.isArray(prev) ? prev : [];
      const exists = current.includes(mId);
      if (exists) {
        return current.filter(id => id !== mId);
      } else {
        showToast(language === 'en' ? 'Milestone achieved! 🌟' : language === 'ru' ? 'Этап выполнен! 🌟' : 'Bosqich bajarildi deb belgilandi! 🌟', 'success');
        return [...current, mId];
      }
    });
  };

  const selectedCareer = useMemo(() => {
    return CAREERS_DATA.find(c => c.id === selectedCareerId) || CAREERS_DATA[0];
  }, [selectedCareerId]);

  const value = {
    theme,
    toggleTheme,
    language,
    setLanguage,
    t,
    favorites: Array.isArray(favorites) ? favorites : [],
    isFavorite,
    toggleFavorite,
    quizAnswers: quizAnswers && typeof quizAnswers === 'object' ? quizAnswers : {},
    saveAnswer,
    resetQuiz,
    quizResults,
    goals: Array.isArray(goals) ? goals : [],
    addGoal,
    updateGoal,
    deleteGoal,
    toggleGoal,
    selectedCareerId,
    setSelectedCareerId,
    selectedCareer,
    roadmapMilestones: Array.isArray(roadmapMilestones) ? roadmapMilestones : [],
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
