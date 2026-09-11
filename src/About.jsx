import React from 'react';
import './About.css';
import { DUMMY_PROJECTS } from './projectsData';
export default function About({ onNavigate }) {
  const gridProjects = DUMMY_PROJECTS.slice(0, 3);
  const gridTitles = [
    "FUTURE OF RESILIENT CITIES",
    "FUTURE OF MULTIMEDIA MEMORIALS",
    "FUTURE OF WORK"
  ];
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-text-columns">
          <div className="about-column">
            <p>
              The escalating complexity of the world and the accelerating speed of change exceed any individual's capacity to comprehend. For architects operating today, the Golden Ratio is no longer the standard - rather, the UN's 17 Sustainable Development Goals are. From a single elegant equation, architects are now held to multidimensional success criteria with almost infinite variables.
            </p>
            <p>
              Since sustainability is inherently a question of complex systems, circular design, and holistic thinking, no single person holds the solution. As architects and urbanists, we must team with scientists, engineers with biologists, politicians with entrepreneurs, to combine skill sets and perspectives, knowledge and sensibility, to match the complexity of the challenges we face. As future formgivers, we aren't defined by our individual talents or singular skill sets - but rather by our capacity to pool the skills of the many to give our future form.
            </p>
          </div>
          <div className="about-column">
            <p>
              BIG has grown organically over the last two decades from a founder, to a family, to a force of 700. Our latest transformation is the BIG LEAP: Bjarke Ingels Group of Landscape, Engineering, Architecture, Planning, and Products. A plethora of in-house perspectives allows us to see what none of us would be able to see on our own. The sum of our individual talents becomes our collective creative genius. A small step for each of us becomes a BIG LEAP for all of us.
            </p>
            <p className="about-author">
              Bjarke Ingels<br />
              Founder & Creative Director
            </p>
          </div>
        </div>
      </div>
      <div className="about-grid-section">
        <div className="about-projects-grid">
          {gridProjects.map((project, index) => (
            <div key={project.id} className="about-grid-item">
              <div className="about-grid-img-wrap">
                <img src={project.thumbnail} alt={gridTitles[index]} />
              </div>
              <div className="about-grid-label">
                <span className="about-grid-icon">■</span>
                <span className="about-grid-text">{gridTitles[index]}</span>
                <span className="about-grid-plus">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="about-footer">
        <div className="footer-links">
          <button className="footer-btn">EMAIL <span className="plus">+</span></button>
          <button className="footer-btn">OFFICE <span className="plus">+</span></button>
          <button className="footer-btn">SOCIAL <span className="plus">+</span></button>
          <button className="footer-btn">LEGAL <span className="plus">+</span></button>
        </div>
        <button 
          className="back-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TO TOP
        </button>
      </footer>
    </div>
  );
}
