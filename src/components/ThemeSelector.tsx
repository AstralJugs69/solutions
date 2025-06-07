import React from 'react';
import { themeOptionsData, type ThemeOption } from '../data/themes';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useTheme();

  const handleApplyTheme = (theme: ThemeOption) => {
    setCurrentTheme(theme);
  };

  return (
    <section id="theme-selector" className="py-16 md:py-24 bg-background text-text">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Choose Your Theme
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {themeOptionsData.map((theme) => (
            <div
              key={theme.id}
              className={`bg-accent/5 dark:bg-accent/10 p-6 rounded-lg shadow-lg flex flex-col border ${
                currentTheme.id === theme.id
                  ? 'border-primary border-2'
                  : 'border-accent/20'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-text">{theme.name}</h3>

              <div className="mb-4 space-y-2">
                <p className="text-sm text-text/80">Color Palette:</p>
                <div className="flex space-x-2 items-center">
                  <span
                    className="block w-6 h-6 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.colors.primary }}
                    title={`Primary: ${theme.colors.primary}`}
                  ></span>
                  <span
                    className="block w-6 h-6 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.colors.secondary }}
                    title={`Secondary: ${theme.colors.secondary}`}
                  ></span>
                  <span
                    className="block w-6 h-6 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.colors.background }}
                    title={`Background: ${theme.colors.background}`}
                  ></span>
                  <span className="text-xs text-text/70 ml-1">(Primary, Secondary, Background)</span>
                </div>
              </div>

              <p className="text-sm text-text/70 mb-4 flex-grow line-clamp-3">
                {theme.description || 'A beautifully crafted theme option.'}
              </p>

              <button
                type="button"
                onClick={() => handleApplyTheme(theme)}
                className={`btn w-full mt-auto ${
                  currentTheme.id === theme.id
                    ? 'bg-primary/70 text-white cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
                disabled={currentTheme.id === theme.id}
              >
                {currentTheme.id === theme.id ? 'Applied' : 'Apply Theme'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeSelector;
