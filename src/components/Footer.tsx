/// <reference types="react" />
import React from 'react'; // Added React import for FC
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface SocialLinkItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface FooterLinkItem {
  name: string;
  href: string;
}

interface FooterLinkSection {
  title: string;
  links: FooterLinkItem[];
}

const currentYear = new Date().getFullYear();

const socialLinks: SocialLinkItem[] = [
  {
    name: 'GitHub',
    icon: <FaGithub className="w-5 h-5" />,
    href: 'https://github.com/yourusername', // Placeholder
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/in/yourusername', // Placeholder
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="w-5 h-5" />,
    href: 'https://twitter.com/yourusername', // Placeholder
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="w-5 h-5" />,
    href: 'mailto:your.email@example.com', // Placeholder
  },
];

const footerLinks: FooterLinkSection[] = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Full-Stack Solutions', href: '#services' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' }, // Placeholder
      { name: 'Terms of Service', href: '#' }, // Placeholder
      { name: 'Cookie Policy', href: '#' }, // Placeholder
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-text/80">
              Creating innovative digital experiences that make an impact.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/70 hover:text-primary dark:text-text/60 dark:hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text/80 hover:text-primary dark:text-text/70 dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-text/70">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-text/70 hover:text-text dark:text-text/60 dark:hover:text-text/90 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-text/70 hover:text-text dark:text-text/60 dark:hover:text-text/90 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
