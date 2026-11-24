import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import CareerCard from '../components/CareerCard';
import Modal from '../components/Modal';
import CareerDetailContent from '../components/CareerDetailContent';
import EmptyState from '../components/EmptyState';
import DynamicIcon from '../components/DynamicIcon';
import { CAREERS_DATA, CATEGORIES } from '../data/careersData';
import { 
  Search, 
  Briefcase, 
  X,
  ArrowUpDown
} from 'lucide-react';

export default function Careers() {
  const { t } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('default');
  const [selectedCareerModal, setSelectedCareerModal] = useState(null);

  // Sync category state with query params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter and sort careers
  const filteredCareers = useMemo(() => {
    let result = [...CAREERS_DATA];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(c => c.categoryId === selectedCategory);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title, 'uz'));
    } else if (sortBy === 'title-desc') {
      result.sort((a, b) => b.title.localeCompare(a.title, 'uz'));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="careers-page-root">
      <div className="careers-glow-top"></div>

      <div className="page-container">
        {/* Page Top Heading */}
        <div className="careers-header-center">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>{t('careersBadge')}</span>
          </div>
          <h1 className="careers-title">
            {t('careersTitle')} <span className="text-gradient">{t('careersHighlight')}</span>
          </h1>
          <p className="careers-subtitle">
            {t('careersSub')}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="careers-filter-toolbar">
          {/* Search Box */}
          <div className="search-input-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-field"
              placeholder={t('careersSearchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button" 
                className="search-clear-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Qidiruvni tozalash"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="sort-selector-box">
            <ArrowUpDown size={16} className="sort-icon" />
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Saralash"
            >
              <option value="default">{t('careersSortDefault')}</option>
              <option value="title-asc">{t('careersSortAz')}</option>
              <option value="title-desc">{t('careersSortZa')}</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="category-pills-row">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? CAREERS_DATA.length 
              : CAREERS_DATA.filter(c => c.categoryId === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                className={`cat-pill-btn ${isSelected ? 'cat-pill-active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <DynamicIcon name={cat.iconName} size={15} />
                <span>{cat.name}</span>
                <span className="cat-pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Results Counter and Active Filter Info */}
        <div className="careers-count-bar">
          <span>
            {t('careersTotal')} <strong>{filteredCareers.length}</strong> {t('careersShowing')}
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              className="btn-clear-all-filters"
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
            >
              {t('careersClearFilters')}
            </button>
          )}
        </div>

        {/* Careers Grid */}
        {filteredCareers.length > 0 ? (
          <div className="careers-grid-layout">
            {filteredCareers.map((career) => (
              <CareerCard
                key={career.id}
                career={career}
                onOpenDetails={(c) => setSelectedCareerModal(c)}
              />
            ))}
          </div>
        ) : (
          <div className="careers-empty-wrapper">
            <EmptyState
              iconName="Search"
              title="Hech qanday kasb topilmadi"
              description={`"${searchQuery}" so‘rovi bo‘yicha yoki tanlangan filtrda kasblar mavjud emas. Qidiruv so‘zini o‘zgartiring yoki filtrlarni tozalang.`}
              actionText="Barcha kasblarni ko‘rish"
              onActionClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
            />
          </div>
        )}
      </div>

      {/* Career Details Modal */}
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
