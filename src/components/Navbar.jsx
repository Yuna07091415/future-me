import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Bookmark, 
  Menu, 
  X, 
  Compass, 
  BarChart3, 
  Briefcase, 
  MapPin,
  Globe
} from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, language, setLanguage, t, favorites } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { to: '/', label: t('home'), icon: Sparkles },
    { to: '/discover', label: t('discover'), icon: Compass },
    { to: '/results', label: t('results'), icon: BarChart3 },
    { to: '/careers', label: t('careers'), icon: Briefcase },
    { to: '/roadmap', label: t('roadmap'), icon: MapPin },
  ];

  const languages = [
    { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' }
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="navbar-root">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="logo-badge">
            <Sparkles className="logo-icon" size={20} />
            <div className="logo-glow"></div>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-title">FUTURE <span className="logo-highlight">ME</span></span>
            <span className="logo-subtitle">2030 PLATFORM</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                <Icon size={16} className="nav-icon" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Language Selector Dropdown */}
          <div className="lang-dropdown-wrapper">
            <button
              type="button"
              className="lang-select-btn"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              title={t('switchLang')}
              aria-label={t('switchLang')}
            >
              <span className="lang-flag">{currentLang.flag}</span>
              <span className="lang-code">{currentLang.code.toUpperCase()}</span>
            </button>

            {langMenuOpen && (
              <div className="lang-dropdown-menu">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    className={`lang-option-btn ${language === l.code ? 'active-lang' : ''}`}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                  >
                    <span className="lang-flag">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Favorites quick badge */}
          <Link 
            to="/roadmap" 
            className="favorites-btn" 
            title={t('favoritesTitle')}
            aria-label={t('favoritesTitle')}
          >
            <Bookmark size={18} />
            {favorites.length > 0 && (
              <span className="favorites-counter">{favorites.length}</span>
            )}
          </Link>

          {/* Theme Toggle Button (Dark / Light) */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? t('lightMode') : t('darkMode')}
            aria-label="Darkmode rejimi"
          >
            {theme === 'dark' ? (
              <Sun size={19} className="theme-icon sun-icon" />
            ) : (
              <Moon size={19} className="theme-icon moon-icon" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-list">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
                    }
                  >
                    <Icon size={19} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
            <div className="mobile-drawer-footer">
              <div className="mobile-theme-row">
                <span>{t('switchLang')}:</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      className={`lang-option-btn ${language === l.code ? 'active-lang' : ''}`}
                      onClick={() => {
                        setLanguage(l.code);
                        closeMenu();
                      }}
                      style={{ padding: '6px 12px' }}
                    >
                      <span>{l.flag} {l.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mobile-theme-row" style={{ marginTop: '14px' }}>
                <span>{theme === 'dark' ? t('lightMode') : t('darkMode')}:</span>
                <button 
                  type="button" 
                  className="mobile-theme-pill-btn" 
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                  <span>{theme === 'dark' ? t('lightMode') : t('darkMode')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
