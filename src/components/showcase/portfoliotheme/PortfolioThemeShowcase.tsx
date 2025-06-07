import React from 'react';
import { FiArrowRight, FiLayout, FiGrid, FiList, FiSquare, FiStar, FiImage, FiMaximize } from 'react-icons/fi'; // Added more icons

const PortfolioThemeShowcase: React.FC = () => {

  // Helper for placeholder project items
  const PlaceholderProjectItem: React.FC<{ aspect?: string, height?: string, isListItem?: boolean }> = ({ aspect, height, isListItem }) => (
    <div
      className={`rounded-lg flex items-center justify-center text-center p-4 ${isListItem ? 'flex-row space-x-4 items-start' : 'flex-col'}`}
      style={{
        backgroundColor: '#86198f', // secondary showcase color for item background
        color: '#f3e8ff',
        aspectRatio: isListItem ? undefined : aspect,
        height: isListItem ? undefined : height
      }}
    >
      {isListItem && <FiImage className="w-16 h-16 text-[#c084fc]" />}
      <div className={isListItem ? 'text-left' : ''}>
        <FiStar className={`mx-auto mb-2 ${isListItem ? 'hidden' : ''}`} />
        <p className="text-xs font-semibold">{isListItem ? 'Project Title' : 'Project'}</p>
        {isListItem && <p className="text-xs opacity-70 mt-1">Short description of the work...</p>}
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#581c87', color: '#f3e8ff' }} className="py-12 md:py-20 showcase-portfolio-theme font-sans">
      <div className="container mx-auto px-4">
        {/* Main Showcase Header */}
        <header className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            ShowcaseX - The Ultimate Portfolio Theme
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-85">
            Versatile, modern, and visually stunning. Perfect for creatives to showcase their best work.
          </p>
        </header>

        {/* Hero/Landing Section Variations */}
        <section id="pt-hero-variations" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 md:mb-12 text-center" style={{ color: '#c7d2fe' }}>
            Dynamic Hero Sections
          </h2>
          <div className="space-y-12 md:space-y-16">
            {/* Mockup 1: Full-Screen Image/Video */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4 text-center md:text-left" style={{color: '#e879f9'}}>Style 1: Immersive Visual Background</h3>
              <div
                className="relative flex items-center justify-center text-center p-10 md:p-20 min-h-[300px] md:min-h-[400px] rounded-lg shadow-xl bg-cover bg-center"
                style={{ backgroundImage: "url('https://via.placeholder.com/1200x600/2d0c57/f3e8ff?text=Your+Stunning+Visual')" }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                <div className="relative z-10">
                  <h4 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{color: '#f3e8ff'}}>Bold Visuals. Big Impact.</h4>
                  <p className="text-md md:text-lg mb-6 max-w-md mx-auto" style={{color: '#f3e8ff', opacity: 0.9}}>
                    Capture attention instantly with a full-screen image or video background.
                  </p>
                  <button type="button" className="font-display font-semibold py-2.5 px-6 rounded-lg text-sm transition-opacity hover:opacity-90" style={{backgroundColor: '#e879f9', color: '#581c87'}}>
                    View Demo <FiArrowRight className="inline ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mockup 2: Text-Focused with Animation */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4 text-center md:text-left" style={{color: '#e879f9'}}>Style 2: Animated Typography Focus</h3>
              <div
                className="flex flex-col items-center justify-center text-center p-10 md:p-20 min-h-[300px] md:min-h-[400px] rounded-lg shadow-xl"
                style={{ backgroundColor: '#86198f' /* secondary showcase color */ }}
              >
                <div className="font-display text-3xl md:text-5xl font-bold" style={{color: '#f3e8ff'}}>
                  <span className="block animate-fadeInLeft [animation-delay:0.2s]">Creative.</span> {/* Conceptual animation class */}
                  <span className="block animate-fadeInRight [animation-delay:0.5s]" style={{color: '#c084fc'}}>Developer.</span>
                  <span className="block animate-fadeInUp [animation-delay:0.8s]">Innovator.</span>
                </div>
                <p className="text-md md:text-lg mt-6 mb-8 max-w-md" style={{color: '#f3e8ff', opacity: 0.8}}>
                  Make a statement with dynamic text animations that tell your story.
                </p>
                <button type="button" className="font-display font-semibold py-2.5 px-6 rounded-lg text-sm border-2 transition-colors hover:bg-[#e879f9] hover:text-[#581c87]" style={{borderColor: '#e879f9', color: '#e879f9'}}>
                  Learn More <FiMaximize className="inline ml-1" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* END Hero/Landing Section Variations */}

        {/* Project Grid/List Layouts Section */}
        <section id="pt-project-layouts" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 md:mb-12 text-center" style={{ color: '#c7d2fe' }}>
            Showcase Your Work, Your Way
          </h2>
          <div className="space-y-10">
            {/* Masonry Grid */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4" style={{color: '#e879f9'}}>Masonry Grid Layout</h3>
              <div className="columns-2 sm:columns-3 md:columns-4 gap-4 p-4 rounded-lg" style={{backgroundColor: '#86198f'}}>
                {[ '200px', '300px', '250px', '200px', '280px', '220px', '310px', '240px'].map((h, i) => (
                  <div key={`masonry-${i}`} className="mb-4 break-inside-avoid">
                    <PlaceholderProjectItem height={h} />
                  </div>
                ))}
              </div>
            </div>
            {/* Uniform Grid */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4" style={{color: '#e879f9'}}>Uniform Grid Layout</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-lg" style={{backgroundColor: '#86198f'}}>
                {Array.from({length: 4}).map((_, i) => <PlaceholderProjectItem key={`uniform-${i}`} aspect="4/3" />)}
              </div>
            </div>
            {/* List View */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4" style={{color: '#e879f9'}}>List View Layout</h3>
              <div className="space-y-4 p-4 rounded-lg" style={{backgroundColor: '#86198f'}}>
                {Array.from({length: 2}).map((_, i) => <PlaceholderProjectItem key={`list-${i}`} isListItem={true} />)}
              </div>
            </div>
          </div>
        </section>
        {/* END Project Grid/List Layouts Section */}

        {/* About Me/Service Page Snippet Section */}
        <section id="pt-about-services" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 md:mb-12 text-center" style={{ color: '#c7d2fe' }}>
            Tell Your Story. Offer Your Expertise.
          </h2>
          <div className="p-6 md:p-8 rounded-lg shadow-xl" style={{backgroundColor: '#86198f' /* secondary showcase color */}}>
            <h3 className="text-2xl font-display font-medium mb-6 text-center md:text-left" style={{color: '#e879f9'}}>About Me Page Layout</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center" style={{color: '#f3e8ff'}}>
              {/* Left Column: Avatar */}
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-cover bg-center mb-4 shadow-lg" style={{backgroundImage: "url('https://via.placeholder.com/200x200/c084fc/f3e8ff?text=Avatar')", borderColor: '#c084fc'}}></div>
                <h4 className="font-display text-xl font-semibold" style={{color: '#f3e8ff'}}>[Your Name]</h4>
                <p className="text-sm opacity-80">[Your Title / Tagline]</p>
              </div>
              {/* Right Column: Bio, Skills, Testimonials */}
              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h5 className="font-display text-lg font-semibold mb-2" style={{color: '#c7d2fe'}}>About Me</h5>
                  <p className="font-sans text-sm leading-relaxed opacity-90">
                    This is where a compelling bio would go, highlighting your journey, passion, and unique approach. It should be engaging and give visitors a sense of who you are beyond your work. (Placeholder text for the showcased portfolio theme).
                  </p>
                </div>
                <div>
                  <h5 className="font-display text-lg font-semibold mb-2" style={{color: '#c7d2fe'}}>Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {['UI Design', 'UX Research', 'Prototyping', 'React', 'Next.js', 'Figma', 'Illustration'].map(skill => (
                      <span key={skill} className="text-xs px-3 py-1 rounded-full" style={{backgroundColor: '#c084fc', color: '#581c87'}}>{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-display text-lg font-semibold mb-2" style={{color: '#c7d2fe'}}>Testimonials (Snippet)</h5>
                  <div className="italic p-3 rounded text-sm opacity-90" style={{backgroundColor: 'rgba(0,0,0,0.1)', borderColor: '#c084fc', borderWidth: '1px'}}>
                    <p>"Working with [Your Name] was a fantastic experience. Their creativity and attention to detail are unmatched." - Happy Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END About Me/Service Page Snippet Section */}

        {/* Contact Form/Footer Variations Section */}
        <section id="pt-contact-footer" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 md:mb-12 text-center" style={{ color: '#c7d2fe' }}>
            Connect & Conclude
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Form Mockup */}
            <div className="p-6 md:p-8 rounded-lg shadow-xl" style={{backgroundColor: '#86198f'}}>
              <h3 className="text-2xl font-display font-medium mb-6 text-center md:text-left" style={{color: '#e879f9'}}>Minimal Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="pt-name" className="block text-xs font-sans font-medium mb-1" style={{color: '#f3e8ff', opacity:0.9}}>Name</label>
                  <input type="text" id="pt-name" className="w-full p-2.5 rounded-md text-sm border" style={{backgroundColor: '#f3e8ff', color: '#581c87', borderColor: '#c084fc', caretColor: '#e879f9'}} placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="pt-email" className="block text-xs font-sans font-medium mb-1" style={{color: '#f3e8ff', opacity:0.9}}>Email</label>
                  <input type="email" id="pt-email" className="w-full p-2.5 rounded-md text-sm border" style={{backgroundColor: '#f3e8ff', color: '#581c87', borderColor: '#c084fc', caretColor: '#e879f9'}} placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="pt-message" className="block text-xs font-sans font-medium mb-1" style={{color: '#f3e8ff', opacity:0.9}}>Message</label>
                  <textarea id="pt-message" rows={4} className="w-full p-2.5 rounded-md text-sm border" style={{backgroundColor: '#f3e8ff', color: '#581c87', borderColor: '#c084fc', caretColor: '#e879f9'}} placeholder="Your message..."></textarea>
                </div>
                <button type="button" className="w-full font-display font-semibold py-2.5 px-5 rounded-md text-sm transition-opacity hover:opacity-90" style={{backgroundColor: '#e879f9', color: '#581c87'}}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Footer Mockup */}
            <div className="space-y-8">
              <div className="p-6 md:p-8 rounded-lg shadow-xl" style={{backgroundColor: '#86198f'}}>
                <h3 className="text-2xl font-display font-medium mb-6 text-center md:text-left" style={{color: '#e879f9'}}>Simple Footer</h3>
                <div className="text-center py-8 border-t border-b" style={{borderColor: '#c084fc', color: '#f3e8ff'}}>
                  <div className="flex justify-center space-x-5 mb-3">
                    <FiGithub className="w-5 h-5 hover:opacity-70 cursor-pointer"/>
                    <FiLinkedin className="w-5 h-5 hover:opacity-70 cursor-pointer"/>
                    <FiTwitter className="w-5 h-5 hover:opacity-70 cursor-pointer"/>
                  </div>
                  <p className="text-xs opacity-80">&copy; {new Date().getFullYear()} [Your Name/Brand]. All rights reserved.</p>
                  <p className="text-xs opacity-60 mt-1">Powered by ShowcaseX Theme</p>
                </div>
              </div>
               {/* Optional: More comprehensive footer could be added here if needed */}
            </div>
          </div>
        </section>
        {/* END Contact Form/Footer Variations Section */}

        {/* Theme Customization Mockup Section */}
        <section id="pt-customization" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10 md:mb-12 text-center" style={{ color: '#c7d2fe' }}>
            Make It Yours
          </h2>
          <div className="p-6 md:p-8 rounded-lg shadow-xl" style={{backgroundColor: '#86198f' /* secondary showcase color */}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Customization Controls */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-display font-semibold mb-3" style={{color: '#e879f9'}}>Color Palette</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Primary Color', defaultColor: '#007BFF' },
                      { label: 'Accent Color', defaultColor: '#FFC107' },
                      { label: 'Background Color', defaultColor: '#FFFFFF' },
                    ].map(item => (
                      <div key={item.label} className="flex items-center justify-between p-2 rounded-md" style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                        <label className="text-sm font-sans" style={{color: '#f3e8ff', opacity: 0.9}}>{item.label}</label>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs" style={{color: '#c084fc'}}>{item.defaultColor}</span>
                          <div className="w-6 h-6 rounded border border-white/20 shadow-sm" style={{backgroundColor: item.defaultColor}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-display font-semibold mb-3" style={{color: '#e879f9'}}>Typography</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Heading Font', defaultFont: 'Poppins' },
                      { label: 'Body Font', defaultFont: 'Inter' },
                    ].map(item => (
                       <div key={item.label} className="flex items-center justify-between p-2.5 rounded-md text-sm" style={{backgroundColor: 'rgba(0,0,0,0.1)', color: '#f3e8ff'}}>
                        <label className="font-sans opacity-90">{item.label}</label>
                        <div className="flex items-center space-x-2 px-3 py-1 rounded" style={{backgroundColor: '#581c87', color: '#c084fc'}}>
                          <span>{item.defaultFont}</span>
                          <FiChevronDown className="w-4 h-4 opacity-70"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-display font-semibold mb-3" style={{color: '#e879f9'}}>Layout Options</h4>
                  <div className="space-y-3">
                    {[
                        { label: 'Dark Mode', defaultState: false },
                        { label: 'Boxed Layout', defaultState: true },
                    ].map(item => (
                        <div key={item.label} className="flex items-center justify-between p-2.5 rounded-md text-sm" style={{backgroundColor: 'rgba(0,0,0,0.1)', color: '#f3e8ff'}}>
                            <label htmlFor={`toggle-${item.label}`} className="font-sans opacity-90 flex-grow">{item.label}</label>
                            <button id={`toggle-${item.label}`} role="switch" aria-checked={item.defaultState} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#86198f] focus:ring-[#e879f9] ${item.defaultState ? 'bg-[#e879f9]' : 'bg-[#581c87]'}`}>
                                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${item.defaultState ? 'translate-x-6' : 'translate-x-1'}`}/>
                            </button>
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mini-Preview Area */}
              <div className="h-full min-h-[250px] md:min-h-[350px] flex flex-col items-center justify-center p-6 rounded-lg" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
                <FiMaximize className="w-16 h-16 mb-4" style={{color: '#c084fc', opacity: 0.5}} />
                <p className="font-display text-lg font-semibold mb-2" style={{color: '#c7d2fe'}}>Live Preview (Conceptual)</p>
                <p className="text-xs text-center max-w-xs" style={{color: '#f3e8ff', opacity:0.7}}>
                  Changes made to colors, typography, and layout would be reflected here instantly.
                </p>
                <div className="w-3/4 h-0.5 mt-4 rounded-full" style={{backgroundColor: '#e879f9' /* Primary from showcase theme */}}></div>
                <div className="flex space-x-2 mt-2">
                    <div className="w-1/3 h-8 rounded" style={{backgroundColor: '#c084fc' /* Accent from showcase theme */}}></div>
                    <div className="w-2/3 h-8 rounded" style={{backgroundColor: 'rgba(255,255,255,0.1)'}}></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-center mt-6" style={{color: '#f3e8ff', opacity:0.6}}>
                Note: Customization controls are for demonstration purposes only and are not functional.
            </p>
          </div>
        </section>
        {/* END Theme Customization Mockup Section */}

      </div>
    </div>
  );
};

export default PortfolioThemeShowcase;
