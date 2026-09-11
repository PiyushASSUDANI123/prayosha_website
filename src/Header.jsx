import { useState, useEffect } from 'react';
import { DUMMY_PROJECTS } from './projectsData';
export default function Header({ currentView, setCurrentView, activeCategory, setActiveCategory, onProjectClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['Architecture', 'Interior', 'Landscape', 'Products'];
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : DUMMY_PROJECTS.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  const handleSearchResultClick = (projectId) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    if (onProjectClick) {
      onProjectClick(projectId);
    }
  };
  return (
    <header className="top-nav">
      <div className="nav-left" style={{ display: 'flex', justifyContent: 'flex-start', flex: 1, position: 'relative' }}>
        <div className={`brand-toggle ${isMenuOpen ? 'menu-mode' : 'logo-mode'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ justifyContent: 'flex-start' }}>
          <span className="brand-text" style={{ left: 0, right: 'auto' }}>PRAYOSHA</span>
          <div className="brand-dots" style={{ left: 0, right: 'auto' }}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className={`inline-menu ${isMenuOpen ? 'open' : ''}`} style={{ left: 0, right: 'auto', alignItems: 'flex-start' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('projectsList'); setActiveCategory('Architecture'); setIsMenuOpen(false); }} style={{ textAlign: 'left' }}>PROJECTS</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('about'); setIsMenuOpen(false); }} style={{ textAlign: 'left' }}>ABOUT US</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('projectsList'); setActiveCategory('Interior'); setIsMenuOpen(false); }} style={{ textAlign: 'left' }}>INTERIOR</a>
            <a href="#" onClick={(e) => { e.preventDefault();  setIsMenuOpen(false); }} style={{ textAlign: 'left' }}>CONTACT</a>
        </div>
      </div>
      <div className="nav-center" style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <div className="header-main-nav" style={{ position: 'static', transform: 'none', display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <button 
            className={`header-nav-btn ${activeCategory === 'Architecture' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('Architecture'); setCurrentView('projectsList'); }}
          >
            ARCHITECTURE
          </button>
          <button 
            className={`header-nav-btn ${activeCategory === 'Interior' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('Interior'); setCurrentView('projectsList'); }}
          >
            INTERIOR
          </button>
          <button 
            className={`header-nav-btn ${activeCategory === 'Landscape' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('Landscape'); setCurrentView('projectsList'); }}
          >
            LANDSCAPE
          </button>
          <button 
            className={`header-nav-btn ${activeCategory === 'Products' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('Products'); setCurrentView('projectsList'); }}
          >
            PRODUCTS
          </button>
        </div>
      </div>
      <div className="nav-right" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <div className="nav-search-container" style={{ position: 'relative' }}>
          <div className="nav-search" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', marginLeft: '0.5rem', color: '#999', textTransform: 'uppercase' }}>Search</span>
          </div>
          {isSearchOpen && (
            <>
              <div className="search-click-outside" onClick={() => setIsSearchOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 90 }}></div>
              <div className="search-dropdown" style={{ zIndex: 100, right: 0, left: 'auto', top: '100%', marginTop: '1rem' }}>
                <input 
                  type="text" 
                  className="search-dropdown-input" 
                  placeholder="Search projects..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <div className="search-dropdown-results">
                  {searchQuery && searchResults.length === 0 && (
                    <div className="search-no-results" style={{ padding: '1rem', fontSize: '0.8rem' }}>No projects found.</div>
                  )}
                  {searchResults.map(project => (
                    <div key={project.id} className="search-dropdown-item" onClick={() => handleSearchResultClick(project.id)}>
                      <img src={project.thumbnail} alt={project.title} className="search-dropdown-img" />
                      <div className="search-dropdown-info">
                        <h4 className="search-dropdown-title">{project.title}</h4>
                        <p className="search-dropdown-cat">{project.category} / {project.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
