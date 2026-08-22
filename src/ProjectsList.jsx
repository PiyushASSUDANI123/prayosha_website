import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsList.css';
import { DUMMY_PROJECTS, DUMMY_CREDITS } from './projectsData';

const ProjectRow = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rowRef = useRef(null);
  const galleryRef = useRef(null);

  // Removed vertical-to-horizontal wheel scroll translation to allow normal vertical scrolling.

  // Slower, cinematic ease transition for a smooth zoom in/out effect
  const premiumTransition = { duration: 1.2, ease: [0.76, 0, 0.24, 1] };

  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      // Start scrolling almost immediately so the user sees it coming up smoothly while expanding
      setTimeout(() => {
        if (rowRef.current) {
          const headerOffset = 140; // Increased offset to account for sticky header
          const elementPosition = rowRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // The user requested that clicking again should NOT close it.
      // setIsExpanded(false);
    }
  };

  return (
    <motion.div
      layout
      transition={premiumTransition}
      ref={rowRef}
      className={`project-row ${isExpanded ? 'expanded' : ''}`}
      onClick={handleToggle}
    >
      <motion.div layout transition={premiumTransition} className="project-info">
        <div className="project-info-top">
          <div 
            className="project-icon" 
            dangerouslySetInnerHTML={{ __html: project.icon }}
          />
          <h3 className="project-name">{project.title}</h3>
          <p className="project-location">{project.location.toUpperCase()}</p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                className="project-meta"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
              >
                {project.year && (
                  <div className="meta-item year-item">
                    <span className="meta-value">{project.year}</span>
                  </div>
                )}
                <div className="meta-item">
                  <span className="meta-label">CLIENT</span>
                  <span className="meta-value">PRAYOSHA INC.</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">TYPOLOGY</span>
                  <span className="meta-value">{project.typology}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">SIZE M2/FT2</span>
                  <span className="meta-value">4,181 / 45,260</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">STATUS</span>
                  <span className="meta-value">{project.status}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="share-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.83, 0, 0.17, 1] }}
            >
              <span className="share-text">SHARE</span>
              <div className="share-icons">
                <span className="icon">✉</span>
                <span className="icon">f</span>
                <span className="icon">in</span>
                <span className="icon">𝕏</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div 
        layout 
        transition={premiumTransition} 
        className={`project-image-wrap ${isExpanded ? 'horizontal-gallery' : ''}`}
        ref={galleryRef}
      >
        <motion.img 
          layout
          transition={premiumTransition}
          src={project.thumbnail} 
          alt={project.title} 
          className={isExpanded ? "gallery-main-image" : "project-image"} 
        />
        
        <AnimatePresence mode="popLayout">
          {isExpanded && (
            <motion.div 
              className="gallery-additional-content" 
              style={{ display: 'flex', gap: '20px' }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.83, 0, 0.17, 1] }}
            >
              <div className="gallery-text-block">
                 <p className="gallery-desc">{project.desc}</p>
              </div>

              {project.images.slice(1).map((imgSrc, idx) => (
                <div key={idx} className="gallery-block">
                  <img src={imgSrc} alt={`${project.title} - ${idx}`} className="gallery-image" />
                  
                  {project.texts && project.texts[idx+1] && (
                    <div className="gallery-text-block inline-text">
                      <p className="gallery-desc">{project.texts[idx+1]}</p>
                    </div>
                  )}
                </div>
              ))}

              <div className="gallery-text-block credits-block">
                 <div className="meta-item">
                   <span className="meta-label">CREATIVE DIRECTOR</span>
                   <span className="meta-value">{DUMMY_CREDITS.creativeDirector}</span>
                 </div>
                 <div className="meta-item">
                   <span className="meta-label">PARTNER IN CHARGE</span>
                   <span className="meta-value">{DUMMY_CREDITS.partnerInCharge}</span>
                 </div>
                 <div className="meta-item">
                   <span className="meta-label">PROJECT MANAGER</span>
                   <span className="meta-value">{DUMMY_CREDITS.projectManager}</span>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsList({ activeCategory, setActiveCategory }) {
  const listRef = useRef(null);
  const [activeSubCategory, setActiveSubCategory] = useState('Culture');
  const isUserClicking = useRef(false);

  const architectureSubCategories = ['All', 'Residential', 'Institutional', 'Health', 'Work'];
  const mainCategories = ['Architecture', 'Interior', 'Landscape', 'Products'];

  // Scroll to a section by id
  const scrollToSection = useCallback((targetId) => {
    const element = document.getElementById(`section-${targetId}`);
    if (element) {
      isUserClicking.current = true;
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      // Release lock after scroll completes
      setTimeout(() => {
        isUserClicking.current = false;
      }, 1000);
    }
  }, []);

  // Handle category click from header (scroll to section)
  const handleCategoryClick = useCallback((cat) => {
    setActiveCategory(cat);
    if (cat !== 'Architecture') {
      setActiveSubCategory('All');
    }
    // Small delay to ensure state is set before scrolling
    setTimeout(() => {
      scrollToSection(cat);
    }, 50);
  }, [setActiveCategory, scrollToSection]);

  // Handle subcategory click
  const handleSubCategoryClick = useCallback((subCat) => {
    setActiveSubCategory(subCat);
    setActiveCategory('Architecture');
    if (subCat === 'All') {
      setTimeout(() => scrollToSection('Architecture'), 50);
    } else {
      setTimeout(() => scrollToSection(subCat), 50);
    }
  }, [setActiveCategory, scrollToSection]);

  // Expose handleCategoryClick so the Header can use it
  // We do this by scrolling when activeCategory changes from Header clicks
  const prevCategory = useRef(activeCategory);
  useEffect(() => {
    if (prevCategory.current !== activeCategory) {
      prevCategory.current = activeCategory;
      scrollToSection(activeCategory);
    }
  }, [activeCategory, scrollToSection]);

  // IntersectionObserver: auto-update nav as user scrolls
  useEffect(() => {
    const sections = document.querySelectorAll('[data-category-section]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      if (isUserClicking.current) return; // skip during click-scroll

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cat = entry.target.getAttribute('data-category-section');
          const subCat = entry.target.getAttribute('data-subcategory-section');

          if (cat && mainCategories.includes(cat)) {
            setActiveCategory(cat);
            prevCategory.current = cat;
            if (cat !== 'Architecture') {
              setActiveSubCategory('All');
            }
          }
          if (subCat && architectureSubCategories.includes(subCat)) {
            setActiveCategory('Architecture');
            prevCategory.current = 'Architecture';
            setActiveSubCategory(subCat);
          }
        }
      });
    }, {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, [setActiveCategory]);

  // Fade-in animation removed for strict brutalist feel (and to fix the unmounting bug)

  return (
    <div className="projects-page">
      {/* Sub-nav for Architecture */}
      <div className="sub-nav-bar">
        {activeCategory === 'Architecture' && (
          <nav className="sub-nav">
            {architectureSubCategories.map(subCat => (
              <button
                key={subCat}
                className={`sub-nav-btn ${activeSubCategory === subCat ? 'active' : ''}`}
                onClick={() => handleSubCategoryClick(subCat)}
              >
                {subCat}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* All projects in one continuous list */}
      <div className="projects-feed" ref={listRef}>
        {mainCategories.map(cat => {
          const catProjects = DUMMY_PROJECTS.filter(p => p.category === cat);
          if (catProjects.length === 0) return null;

          if (cat === 'Architecture') {
            const subGroups = architectureSubCategories
              .filter(sc => sc !== 'All')
              .map(sc => ({
                subCat: sc,
                projects: catProjects.filter(p => p.subCategory === sc)
              }))
              .filter(g => g.projects.length > 0);

            // Also get projects with subCategory not in the list (e.g. null)
            const ungrouped = catProjects.filter(
              p => !architectureSubCategories.includes(p.subCategory)
            );

            return (
              <div
                key={cat}
                id={`section-${cat}`}
                data-category-section={cat}
                className="feed-section"
              >
                {subGroups.map(group => (
                  <div
                    key={group.subCat}
                    id={`section-${group.subCat}`}
                    data-category-section="Architecture"
                    data-subcategory-section={group.subCat}
                    className="feed-subsection"
                  >
                    {group.projects.map(p => <ProjectRow key={p.id} project={p} />)}
                  </div>
                ))}
                {ungrouped.map(p => <ProjectRow key={p.id} project={p} />)}
              </div>
            );
          }

          return (
            <div
              key={cat}
              id={`section-${cat}`}
              data-category-section={cat}
              className="feed-section"
            >
              {catProjects.map(p => <ProjectRow key={p.id} project={p} />)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
