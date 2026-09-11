export default function Home({ setCurrentView }) {
  const handleProjectClick = (category) => {
    setCurrentView(category);
  };
  return (
    <div className="collage-container">
      <div className="arch-line line-1"></div>
      <div className="arch-line line-2"></div>
      <div className="arch-line line-3"></div>
      <div className="arch-line line-4"></div>
      <div className="arch-line line-5"></div>
      <div className="arc-1"></div>
      <div className="arc-2"></div>
      <div className="arch-dot dot-1"></div>
      <div className="arch-dot dot-2"></div>
      <div className="arch-dot dot-3"></div>
      <div className="arch-dot dot-4"></div>
      <div className="text-content text-architecture" onClick={() => handleProjectClick('Architecture')}>
        <div className="arch-text-sm">01</div>
        <h2 className="arch-title">ARCHITECTURE</h2>
        <div className="arch-desc">
          ICONIC FORMS.<br />
          EFFICIENT SPACES.<br />
          LASTING IMPACT.
        </div>
      </div>
      <div className="image-wrapper section-architecture" onClick={() => handleProjectClick('Architecture')}>
        <img src="/highrise.png" alt="Architecture" />
      </div>
      <div className="text-content text-interior" onClick={() => handleProjectClick('Interior')}>
        <div className="arch-text-sm">02</div>
        <h2 className="arch-title">INTERIOR</h2>
        <div className="arch-desc">
          THOUGHTFUL DESIGN.<br />
          INTENTIONAL DETAILS.<br />
          BEAUTIFUL LIVING.
        </div>
      </div>
      <div className="image-wrapper section-interior" onClick={() => handleProjectClick('Interior')}>
        <img src="/interior.png" alt="Interior" />
      </div>
      <div className="text-content text-landscape" onClick={() => handleProjectClick('Landscape')}>
        <div className="arch-text-sm">03</div>
        <h2 className="arch-title">LANDSCAPE</h2>
        <div className="arch-desc">
          CONNECTING NATURE.<br />
          CREATING BALANCE.<br />
          ENHANCING LIFE.
        </div>
      </div>
      <div className="image-wrapper section-landscape" onClick={() => handleProjectClick('Landscape')}>
        <img src="/landscape.png" alt="Landscape" />
      </div>
      <div className="text-content text-products" onClick={() => handleProjectClick('Products')}>
        <div className="arch-text-sm">04</div>
        <h2 className="arch-title">PRODUCTS</h2>
        <div className="arch-desc">
          CRAFTED FORMS.<br />
          FUNCTIONAL ART.<br />
          EVERYDAY ELEGANCE.
        </div>
      </div>
      <div className="image-wrapper section-products" onClick={() => handleProjectClick('Products')}>
        <img src="/venus_elegance.png" alt="Products" />
      </div>
    </div>
  );
}
