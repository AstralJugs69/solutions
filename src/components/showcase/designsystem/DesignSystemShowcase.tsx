import React from 'react';
import { FiCopy } from 'react-icons/fi';

interface ColorInfo {
  name: string;
  hex: string;
  description?: string;
}

interface ColorCategory {
  name: string;
  colors: ColorInfo[];
}

const designSystemColors: ColorCategory[] = [
  {
    name: 'Primary Colors',
    colors: [
      { name: 'Primary-500', hex: '#007BFF', description: 'Main brand color for CTAs' },
      { name: 'Primary-700', hex: '#0056b3', description: 'Darker shade for hover states' },
      { name: 'Primary-100', hex: '#cce5ff', description: 'Light shade for backgrounds' },
    ],
  },
  {
    name: 'Secondary Colors',
    colors: [
      { name: 'Secondary-500', hex: '#6C757D', description: 'Supporting actions, borders' },
      { name: 'Secondary-700', hex: '#495057', description: 'Darker shade' },
    ],
  },
  {
    name: 'Accent Colors',
    colors: [
      { name: 'Accent-Yellow', hex: '#FFC107', description: 'Highlights, callouts' },
      { name: 'Accent-Teal', hex: '#17A2B8', description: 'Secondary highlights' },
    ],
  },
  {
    name: 'Neutral Colors',
    colors: [
      { name: 'Gray-900', hex: '#212529', description: 'Dark text, backgrounds' },
      { name: 'Gray-500', hex: '#ADB5BD', description: 'Medium emphasis text, borders' },
      { name: 'Gray-100', hex: '#F8F9FA', description: 'Light backgrounds, off-white text' },
      { name: 'White', hex: '#FFFFFF', description: 'Pure white' },
    ],
  },
  {
    name: 'Semantic Colors',
    colors: [
      { name: 'Success', hex: '#28A745', description: 'Success states, confirmations' },
      { name: 'Error', hex: '#DC3545', description: 'Error messages, destructive actions' },
      { name: 'Warning', hex: '#FFC107', description: 'Warnings, alerts' },
      { name: 'Info', hex: '#17A2B8', description: 'Informational messages' },
    ],
  },
];

const DesignSystemShowcase: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#312e81', color: '#eef2ff' }} className="py-12 md:py-20 showcase-design-system font-sans">
      <div className="container mx-auto px-4">
        {/* Main Showcase Header */}
        <header className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4" style={{ color: '#eef2ff' }}>
            Aurora Design System
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#eef2ff', opacity: 0.85 }}>
            Building consistent, accessible, and delightful user experiences with a unified visual language.
          </p>
        </header>

        {/* Introduction/Overview Section */}
        <section id="ds-introduction" className="mb-16 md:mb-24 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6" style={{ color: '#c7d2fe' }}>
              Guiding Principles
            </h2>
            <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: '#eef2ff', opacity: 0.9 }}>
              The Aurora Design System provides a comprehensive set of guidelines, reusable components, and clear standards
              to ensure consistency and quality across all our products. Our philosophy is rooted in creating intuitive,
              efficient, and aesthetically pleasing interfaces that empower users and reflect our brand's commitment to excellence.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#eef2ff', opacity: 0.9 }}>
              By leveraging this system, teams can accelerate development, reduce design debt, and collaborate more effectively,
              ultimately delivering a cohesive and high-quality user experience.
            </p>
          </div>
        </section>

        {/* Color Palette Section */}
        <section id="ds-colors" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-10 md:mb-12 text-center md:text-left" style={{ color: '#c7d2fe' }}>
            Color Palette
          </h2>
          {designSystemColors.map((category) => (
            <div key={category.name} className="mb-10">
              <h3 className="text-2xl font-heading font-medium mb-6" style={{ color: '#eef2ff', opacity: 0.95 }}>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.colors.map((color) => (
                  <div
                    key={color.name}
                    className="rounded-lg p-4 shadow-lg flex flex-col justify-between h-40"
                    style={{ backgroundColor: '#4f46e5' /* secondary showcase color for card bg */ }}
                  >
                    <div>
                      <div
                        className="w-full h-16 rounded mb-2 border border-white/10"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="font-heading font-semibold text-sm" style={{ color: '#eef2ff' }}>{color.name}</p>
                      <p className="font-mono text-xs" style={{ color: '#c084fc' }}>{color.hex}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Copy hex code ${color.hex}`}
                      className="mt-2 text-xs p-1 rounded self-start hover:opacity-80"
                      style={{ color: '#c7d2fe' }}
                      onClick={() => navigator.clipboard?.writeText(color.hex)} // Basic copy, no feedback
                    >
                      <FiCopy className="inline mr-1" /> Copy Hex
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* END Color Palette Section */}

        {/* Typography Section */}
        <section id="ds-typography" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-10 md:mb-12 text-center md:text-left" style={{ color: '#c7d2fe' }}>
            Typography
          </h2>
          <div className="space-y-12">
            {/* Font Families */}
            <div>
              <h3 className="text-2xl font-heading font-medium mb-6" style={{ color: '#eef2ff', opacity: 0.95 }}>Font Families</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg" style={{backgroundColor: '#4f46e5'}}>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2" style={{color: '#c7d2fe'}}>Poppins (Headings)</h4>
                  <p className="font-heading text-4xl font-bold mb-1" style={{color: '#eef2ff'}}>Aa</p>
                  <p className="font-heading" style={{color: '#eef2ff', opacity: 0.9}}>Used for impactful headings and titles.</p>
                  <p className="font-heading text-sm mt-1" style={{color: '#eef2ff', opacity: 0.7}}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</p>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2" style={{color: '#c7d2fe'}}>Inter (Body & UI)</h4>
                  <p className="font-sans text-4xl mb-1" style={{color: '#eef2ff'}}>Aa</p>
                  <p className="font-sans" style={{color: '#eef2ff', opacity: 0.9}}>Optimized for readability in paragraphs and UI elements.</p>
                  <p className="font-sans text-sm mt-1" style={{color: '#eef2ff', opacity: 0.7}}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</p>
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div>
              <h3 className="text-2xl font-heading font-medium mb-6" style={{ color: '#eef2ff', opacity: 0.95 }}>Type Scale</h3>
              {[
                { name: 'Heading 1', font: 'Poppins', weight: 'Bold', size: '48px (3rem)', lineHeight: '1.2', exampleText: 'Major Page Titles' },
                { name: 'Heading 2', font: 'Poppins', weight: 'Semibold', size: '36px (2.25rem)', lineHeight: '1.3', exampleText: 'Section Headers' },
                { name: 'Heading 3', font: 'Poppins', weight: 'Medium', size: '24px (1.5rem)', lineHeight: '1.4', exampleText: 'Sub-Section Titles' },
                { name: 'Body Large', font: 'Inter', weight: 'Regular', size: '18px (1.125rem)', lineHeight: '1.7', exampleText: 'Lead paragraphs, important text.' },
                { name: 'Body Default', font: 'Inter', weight: 'Regular', size: '16px (1rem)', lineHeight: '1.6', exampleText: 'The quick brown fox jumps over the lazy dog. Used for most text content.' },
                { name: 'Body Small / Caption', font: 'Inter', weight: 'Regular', size: '14px (0.875rem)', lineHeight: '1.5', exampleText: 'Helper text, captions, and metadata.' },
                { name: 'Label / Button Text', font: 'Inter', weight: 'Medium', size: '16px (1rem)', lineHeight: '1.5', exampleText: 'Interactive Elements' },
              ].map(style => (
                <div key={style.name} className="mb-6 pb-4 border-b" style={{borderColor: '#4f46e5'}}>
                  <p className={`font-${style.font === 'Poppins' ? 'display' : 'sans'} text-lg md:text-xl`} style={{ fontWeight: style.weight.toLowerCase(), fontSize: style.size, lineHeight: style.lineHeight, color: '#eef2ff' }}>
                    {style.exampleText}
                  </p>
                  <p className="text-sm mt-1 font-mono" style={{color: '#c084fc'}}>{style.name} - {style.font} {style.weight} / {style.size} / Line Height: {style.lineHeight}</p>
                </div>
              ))}
            </div>
            {/* Usage Notes */}
            <div>
                <h3 className="text-2xl font-heading font-medium mb-4" style={{ color: '#eef2ff', opacity: 0.95 }}>Usage Notes</h3>
                <p className="text-base leading-relaxed" style={{ color: '#eef2ff', opacity: 0.9 }}>
                    Maintain a clear hierarchy using the defined type scale. Ensure sufficient contrast for readability. Poppins is generally reserved for headings to provide strong visual anchors, while Inter is used for body text due to its excellent legibility at various sizes.
                </p>
            </div>
          </div>
        </section>
        {/* END Typography Section */}

        {/* Component Library Section */}
        <section id="ds-components" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-10 md:mb-12 text-center md:text-left" style={{ color: '#c7d2fe' }}>
            Component Library
          </h2>

          {/* Buttons Showcase */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-medium mb-6" style={{ color: '#eef2ff', opacity: 0.95 }}>Buttons</h3>
            <div className="p-6 rounded-lg space-y-8" style={{backgroundColor: '#4f46e5'}}>
              {(['Primary', 'Secondary'] as const).map(variant => (
                <div key={variant}>
                  <h4 className="text-lg font-heading font-semibold mb-3" style={{color: '#c7d2fe'}}>{variant} Button</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <button type="button" className={`px-5 py-2.5 rounded-md text-sm font-medium shadow-md transition-opacity hover:opacity-80 active:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 motion-reduce:transition-none ${variant === 'Primary' ? 'text-white' : 'text-[#eef2ff]'}`} style={{backgroundColor: variant === 'Primary' ? '#007BFF' : '#6C757D', color: variant === 'Primary' ? '#FFFFFF' : '#eef2ff', ringColor: variant === 'Primary' ? '#0056b3' : '#495057', ringOffsetColor: '#4f46e5'}}>Default</button>
                    <button type="button" className={`px-5 py-2.5 rounded-md text-sm font-medium shadow-md opacity-80 transition-opacity hover:opacity-70 active:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 motion-reduce:transition-none ${variant === 'Primary' ? 'text-white' : 'text-[#eef2ff]'}`} style={{backgroundColor: variant === 'Primary' ? '#0069d9' : '#5a6268', color: variant === 'Primary' ? '#FFFFFF' : '#eef2ff', ringColor: variant === 'Primary' ? '#0056b3' : '#495057', ringOffsetColor: '#4f46e5'}}>Hover (Simulated)</button>
                    <button type="button" className={`px-5 py-2.5 rounded-md text-sm font-medium shadow-md opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 motion-reduce:transition-none ${variant === 'Primary' ? 'text-white' : 'text-[#eef2ff]'}`} style={{backgroundColor: variant === 'Primary' ? '#0056b3' : '#495057', color: variant === 'Primary' ? '#FFFFFF' : '#eef2ff', ringColor: variant === 'Primary' ? '#0056b3' : '#495057', ringOffsetColor: '#4f46e5'}}>Active (Simulated)</button>
                    <button type="button" className={`px-5 py-2.5 rounded-md text-sm font-medium shadow-md opacity-50 cursor-not-allowed motion-reduce:transition-none ${variant === 'Primary' ? 'text-white' : 'text-[#eef2ff]'}`} style={{backgroundColor: variant === 'Primary' ? '#007BFF' : '#6C757D', color: variant === 'Primary' ? '#FFFFFF' : '#eef2ff'}} disabled>Disabled</button>
                  </div>
                </div>
              ))}
              <div>
                 <h4 className="text-lg font-heading font-semibold mb-3" style={{color: '#c7d2fe'}}>Outline Button</h4>
                 <div className="flex flex-wrap items-center gap-4">
                    <button type="button" className="px-5 py-2.5 rounded-md text-sm font-medium border shadow-sm transition-colors hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 motion-reduce:transition-none" style={{borderColor: '#007BFF', color: '#007BFF', ringColor: '#007BFF', ringOffsetColor: '#4f46e5'}}>Default</button>
                    <button type="button" className="px-5 py-2.5 rounded-md text-sm font-medium border shadow-sm bg-white/10 transition-colors active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 motion-reduce:transition-none" style={{borderColor: '#007BFF', color: '#007BFF', ringColor: '#007BFF', ringOffsetColor: '#4f46e5'}}>Hover</button>
                    <button type="button" className="px-5 py-2.5 rounded-md text-sm font-medium border shadow-sm bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 motion-reduce:transition-none" style={{borderColor: '#007BFF', color: '#007BFF', ringColor: '#007BFF', ringOffsetColor: '#4f46e5'}}>Active</button>
                    <button type="button" className="px-5 py-2.5 rounded-md text-sm font-medium border shadow-sm opacity-50 cursor-not-allowed motion-reduce:transition-none" style={{borderColor: '#007BFF', color: '#007BFF'}} disabled>Disabled</button>
                 </div>
              </div>
            </div>
          </div>

          {/* Card Showcase */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-medium mb-6" style={{ color: '#eef2ff', opacity: 0.95 }}>Cards</h3>
            <div className="p-6 rounded-lg" style={{backgroundColor: '#4f46e5'}}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg shadow-xl overflow-hidden" style={{backgroundColor: '#FFFFFF' /* Documented DS Card BG */}}>
                  <img src="https://via.placeholder.com/400x200/007BFF/FFFFFF?text=Card+Image" alt="Placeholder Card Image" className="w-full h-32 object-cover"/>
                  <div className="p-5">
                    <h4 className="font-heading text-lg font-semibold mb-2" style={{color: '#212529' /* Documented DS Text */}}>Card Title Here</h4>
                    <p className="font-sans text-sm mb-4" style={{color: '#495057' /* Documented DS Text Muted */}}>
                      This is a brief description of the card content. It can span a few lines.
                    </p>
                    <button type="button" className="px-4 py-2 text-sm font-medium rounded-md" style={{backgroundColor: '#007BFF', color: '#FFFFFF'}}>Read More</button>
                  </div>
                </div>
                <div>
                    <h4 className="text-lg font-heading font-semibold mb-3" style={{color: '#c7d2fe'}}>Simple Card</h4>
                    <p className="text-sm" style={{color: '#eef2ff', opacity:0.8}}>Cards are used to group related content and actions. They typically include an image (optional), a title, descriptive text, and calls to action. This example uses the documented design system's light theme style.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Field Showcase */}
          <div>
            <h3 className="text-2xl font-heading font-medium mb-6" style={{ color: '#eef2ff', opacity: 0.95 }}>Input Fields</h3>
            <div className="p-6 rounded-lg space-y-6" style={{backgroundColor: '#4f46e5'}}>
              <div>
                <label htmlFor="ds-input-default" className="block text-sm font-medium mb-1" style={{color: '#c7d2fe'}}>Default Input</label>
                <input type="text" id="ds-input-default" placeholder="Enter text here..." className="w-full md:w-1/2 p-2.5 rounded-md border text-sm" style={{backgroundColor: '#FFFFFF', borderColor: '#ADB5BD', color: '#212529', caretColor: '#007BFF'}} />
              </div>
              <div>
                <label htmlFor="ds-input-focused" className="block text-sm font-medium mb-1" style={{color: '#c7d2fe'}}>Focused Input (Simulated)</label>
                <input type="text" id="ds-input-focused" placeholder="Enter text here..." className="w-full md:w-1/2 p-2.5 rounded-md border-2 text-sm" style={{backgroundColor: '#FFFFFF', borderColor: '#007BFF', color: '#212529', caretColor: '#007BFF'}} />
              </div>
              <div>
                <label htmlFor="ds-input-error" className="block text-sm font-medium mb-1" style={{color: '#c7d2fe'}}>Error Input (Simulated)</label>
                <input type="text" id="ds-input-error" defaultValue="Invalid input" className="w-full md:w-1/2 p-2.5 rounded-md border-2 text-sm" style={{backgroundColor: '#FFFFFF', borderColor: '#DC3545', color: '#DC3545', caretColor: '#DC3545'}} />
                 <p className="text-xs mt-1" style={{color: '#FFC107'}}>Error message appears here.</p>
              </div>
            </div>
          </div>
        </section>
        {/* END Component Library Section */}

        {/* Usage Guidelines Section */}
        <section id="ds-guidelines" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-10 md:mb-12 text-center md:text-left" style={{ color: '#c7d2fe' }}>
            Usage Guidelines
          </h2>
          <div className="p-6 rounded-lg" style={{backgroundColor: '#4f46e5'}}> {/* Card-like background for the whole guidelines section */}
            <h3 className="text-2xl font-heading font-medium mb-6" style={{ color: '#eef2ff', opacity: 0.95 }}>Button Usage: Do's and Don'ts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* "Do" Example */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(40, 167, 69, 0.1)' /* Subtle green tint for Do */ }}>
                <div className="flex items-center mb-3">
                  <FiCheckCircle className="w-6 h-6 mr-2" style={{ color: '#28A745' }} />
                  <h4 className="text-lg font-heading font-semibold" style={{color: '#eef2ff'}}>DO: Use for Primary Actions</h4>
                </div>
                <p className="text-sm mb-4" style={{ color: '#eef2ff', opacity: 0.85 }}>
                  Use the primary button for the main call to action on a page or within a component. It should guide users to the most important next step.
                </p>
                <div className="p-4 border border-dashed rounded-md flex justify-center items-center" style={{ borderColor: 'rgba(40, 167, 69, 0.3)'}}>
                  <button type="button" className="px-5 py-2.5 rounded-md text-sm font-medium shadow-md text-white" style={{backgroundColor: '#007BFF'}}>
                    Submit Application
                  </button>
                </div>
              </div>

              {/* "Don't" Example */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)' /* Subtle red tint for Don't */ }}>
                <div className="flex items-center mb-3">
                  <FiXCircle className="w-6 h-6 mr-2" style={{ color: '#DC3545' }} />
                  <h4 className="text-lg font-heading font-semibold" style={{color: '#eef2ff'}}>DON'T: Overuse Primary Buttons</h4>
                </div>
                <p className="text-sm mb-4" style={{ color: '#eef2ff', opacity: 0.85 }}>
                  Avoid using multiple primary buttons in the same visual area. It can confuse users about which action is most important. Use secondary or outline buttons for less critical actions.
                </p>
                <div className="p-4 border border-dashed rounded-md flex justify-center items-center space-x-4" style={{ borderColor: 'rgba(220, 53, 69, 0.3)'}}>
                  <button type="button" className="px-5 py-2.5 rounded-md text-sm font-medium shadow-md text-white" style={{backgroundColor: '#007BFF'}}>
                    Save Changes
                  </button>
                  <button type="button" className="px-5 py-2.5 rounded-md text-sm font-medium shadow-md text-white" style={{backgroundColor: '#007BFF'}}>
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END Usage Guidelines Section */}

      </div>
    </div>
  );
};

export default DesignSystemShowcase;
