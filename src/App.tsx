// App.tsx - Main application component
import React, { useEffect, useState } from 'react'; // Added React import
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UIGallery from './components/UIGallery';
import ServicesOffered from './components/ServicesOffered';
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

// Import all showcase components
import EcommerceShowcase from './components/showcase/ecommerce/EcommerceShowcase';
import FitnessTrackerShowcase from './components/showcase/fitness/FitnessTrackerShowcase';
import DesignSystemShowcase from './components/showcase/designsystem/DesignSystemShowcase';
import TaskManagerShowcase from './components/showcase/taskmanager/TaskManagerShowcase';
import RecipeFinderShowcase from './components/showcase/recipefinder/RecipeFinderShowcase';
import PortfolioThemeShowcase from './components/showcase/portfoliotheme/PortfolioThemeShowcase';
import { FiArrowLeft } from 'react-icons/fi';

function App() {
  const [mounted, setMounted] = useState(false);
  const [selectedShowcaseId, setSelectedShowcaseId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShowcaseSelect = (showcaseId: string): void => {
    setSelectedShowcaseId(showcaseId);
    window.scrollTo(0, 0); // Scroll to top when a showcase is selected
  };

  const handleCloseShowcase = (): void => {
    setSelectedShowcaseId(null);
    window.scrollTo(0, 0); // Scroll to top when closing
  };

  if (!mounted) {
    return null; // Avoid hydration issues
  }

  const renderSelectedShowcase = () => {
    switch (selectedShowcaseId) {
      case 'ecommerce-platform':
        return <EcommerceShowcase />;
      case 'fitness-app':
        return <FitnessTrackerShowcase />;
      case 'design-system':
        return <DesignSystemShowcase />;
      case 'task-manager':
        return <TaskManagerShowcase />;
      case 'recipe-app':
        return <RecipeFinderShowcase />;
      case 'portfolio-theme':
        return <PortfolioThemeShowcase />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text w-full overflow-x-hidden max-w-[100vw]">
      <Navbar />

      {selectedShowcaseId ? (
        <main className="flex-grow pt-16 md:pt-20">
          <div className="container mx-auto px-4 py-6 md:py-8"> {/* Consistent padding */}
            <button
              type="button"
              onClick={handleCloseShowcase}
              className="inline-flex items-center font-sans text-sm font-medium rounded-lg shadow-sm transition-colors duration-200 mb-6 md:mb-8 py-2 px-4 border hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ color: 'var(--color-theme-accent)', borderColor: 'var(--color-theme-accent)', ringOffsetColor: 'var(--color-theme-background)', ringColor: 'var(--color-theme-accent)' }}
            >
              <FiArrowLeft className="mr-2 h-4 w-4" />
              Back to Main Portfolio
            </button>
          </div>
          {/* Specific showcase components will have their own top-level background styling */}
          {renderSelectedShowcase()}
        </main>
      ) : (
        <main className="flex-grow pt-16 md:pt-20">
          <section id="home" className="section">
            <div className="container mx-auto px-4">
              <HeroSection />
            </div>
          </section>
          <section id="services" className="section bg-accent/5 dark:bg-accent/10 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <ServicesOffered />
            </div>
          </section>
          <section id="portfolio" className="section py-12 md:py-20">
            <div className="container mx-auto px-4">
              {/* Pass handleShowcaseSelect to UIGallery */}
              {/* UIGallery will need to be modified to use this instead of its internal modal logic directly for this flow */}
              <UIGallery onSelectShowcase={handleShowcaseSelect} />
            </div>
          </section>
          <section id="theme-selector-section" className="section">
            <ThemeSelector />
          </section>
          <section id="contact" className="section bg-accent/5 dark:bg-accent/10 py-12 md:py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Have a Project in Mind? Let's Collaborate!</h2>
              <p className="text-xl text-text/80 mb-8 max-w-2xl mx-auto">
                I'm excited to hear about your ideas and help bring them to fruition. Whether you have a question or a detailed proposal, feel free to reach out. Use the floating contact button to send a message directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="btn bg-primary text-white hover:bg-primary/90 px-6 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <span>Send a Message</span>
                </a>
                <a
                  href="#portfolio"
                  className="btn border border-accent text-accent hover:bg-accent/10 px-6 py-3 text-base transition-all duration-300 flex items-center justify-center"
                >
                  <span>View My Work</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default App;
