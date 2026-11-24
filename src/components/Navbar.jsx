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
  MapPin 
} from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, favorites } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { to: '/', label: 'Bosh sahifa', icon: Sparkles },
    { to: '/discover', label: 'Qiziqishlar', icon: Compass },
    { to: '/results', label: 'Natijalar', icon: BarChart3 },
    { to: '/careers', label: 'Kasblar', icon: Briefcase },
    { to: '/roadmap', label: 'Mening Rejam', icon: MapPin },
  ];

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
          {/* Favorites quick badge */}
          <Link 
            to="/roadmap" 
            className="favorites-btn" 
            title="Sevimli kasblarim"
            aria-label="Sevimli kasblar"
          >
            <Bookmark size={18} />
            {favorites.length > 0 && (
              <span className="favorites-counter">{favorites.length}</span>
            )}
          </Link>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Yorug‘ rejimga o‘tish' : 'Tungi rejimga o‘tish'}
            aria-label="Rejimni almashtirish"
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
                <span>Interfeys rejimi:</span>
                <button 
                  type="button" 
                  className="theme-toggle-btn" 
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  <span style={{ marginLeft: 8, fontSize: '0.85rem' }}>
                    {theme === 'dark' ? 'Yorug‘ rejim' : 'Tungi rejim'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
