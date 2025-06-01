// App.tsx - Main application component
import HeroSection from './components/HeroSection';
import UIGallery from './components/UIGallery';
import ServicesOffered from './components/ServicesOffered';
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen w-full">
        <HeroSection />
        <UIGallery />
        <ServicesOffered />
        <FloatingContactButton />
      </div>
    </>
  )
}

export default App
