// App.tsx - Main application component
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UIGallery from './components/UIGallery';
import ServicesOffered from './components/ServicesOffered';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until component is mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section id="home" className="section">
          <div className="container mx-auto px-4">
            <HeroSection />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <ServicesOffered />
          </div>
        </section>

        {/* Portfolio/Gallery Section */}
        <section id="portfolio" className="section">
          <div className="container mx-auto px-4">
            <UIGallery />
          </div>
        </section>

        {/* Contact Section - Simple CTA */}
        <section id="contact" className="section bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch today and let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact-form"
                className="btn btn-primary px-6 py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <span>Contact Me</span>
              </a>
              <a
                href="#portfolio"
                className="btn btn-outline px-6 py-3 text-base transition-all duration-300 flex items-center justify-center"
              >
                <span>View My Work</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
}

export default App;
