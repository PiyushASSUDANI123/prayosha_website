import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './Header'
import Home from './Home'
import ProjectsList from './ProjectsList'
import About from './About'
import './App.css'
function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Architecture');
  const handleProjectClick = (projectId) => {
  };
  const handleHomeCategoryClick = (category) => {
    setActiveCategory(category);
    setCurrentView('projectsList');
  };
  return (
    <div className="app-container">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onProjectClick={handleProjectClick}
      />
      <main className="main-content">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Home setCurrentView={handleHomeCategoryClick} />
            </motion.div>
          )}
          {currentView === 'projectsList' && (
            <motion.div key="projectsList" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <ProjectsList 
                onProjectClick={handleProjectClick} 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </motion.div>
          )}
          {currentView === 'about' && (
            <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <About onNavigate={setCurrentView} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <footer className="global-footer">
        <p>
          Designed and developed by <strong>Piyush Assudani</strong> &bull; 9413879444 &bull; <a href="https://piyushassudani.in" target="_blank" rel="noopener noreferrer">piyushassudani.in</a>
        </p>
      </footer>
    </div>
  );
}
export default App
