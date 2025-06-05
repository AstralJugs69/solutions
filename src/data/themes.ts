/**
 * Theme data structure and sample themes for the UI Gallery
 */

export type Category = 'web' | 'mobile' | 'design';

export interface ThemeOption {
  id: string;
  name: string;
  previewImageUrl: string;
  category: Category;
  description?: string;
  year?: string | number;
  technologies?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    [key: string]: string; // Allow additional color keys
  };
}

export const themeOptionsData: ThemeOption[] = [
  {
    id: "ecommerce-platform",
    name: "E-Commerce Platform",
    previewImageUrl: "https://via.placeholder.com/600x400/1a1a2e/e94560?text=E-Commerce+Platform",
    category: "web",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.",
    year: 2023,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "#",
    sourceUrl: "#",
    colors: {
      background: "#1a1a2e",
      text: "#f8f9fa",
      primary: "#e94560",
      secondary: "#16213e",
      accent: "#0f3460"
    }
  },
  {
    id: "fitness-app",
    name: "Fitness Tracker",
    previewImageUrl: "https://via.placeholder.com/600x400/1e3a8a/93c5fd?text=Fitness+Tracker",
    category: "mobile",
    description: "A mobile app for tracking workouts, nutrition, and fitness progress with personalized plans.",
    year: 2023,
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    demoUrl: "#",
    sourceUrl: "#",
    colors: {
      background: "#1e3a8a",
      text: "#f8fafc",
      primary: "#93c5fd",
      secondary: "#1e40af",
      accent: "#3b82f6"
    }
  },
  {
    id: "design-system",
    name: "Design System",
    previewImageUrl: "https://via.placeholder.com/600x400/312e81/c7d2fe?text=Design+System",
    category: "design",
    description: "A comprehensive design system with reusable components, patterns, and design tokens.",
    year: 2023,
    technologies: ["Figma", "Storybook", "React", "Styled Components"],
    demoUrl: "#",
    sourceUrl: "#",
    colors: {
      background: "#312e81",
      text: "#eef2ff",
      primary: "#c7d2fe",
      secondary: "#4f46e5",
      accent: "#818cf8"
    }
  },
  {
    id: "task-manager",
    name: "Task Manager",
    previewImageUrl: "https://via.placeholder.com/600x400/164e63/67e8f9?text=Task+Manager",
    category: "web",
    description: "A collaborative task management application with real-time updates and team features.",
    year: 2022,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
    demoUrl: "#",
    sourceUrl: "#",
    colors: {
      background: "#164e63",
      text: "#f0f9ff",
      primary: "#67e8f9",
      secondary: "#0e7490",
      accent: "#22d3ee"
    }
  },
  {
    id: "recipe-app",
    name: "Recipe Finder",
    previewImageUrl: "https://via.placeholder.com/600x400/1e3e1b/84cc16?text=Recipe+Finder",
    category: "mobile",
    description: "Discover and save recipes with dietary filters, shopping lists, and meal planning.",
    year: 2022,
    technologies: ["Flutter", "Firebase", "Dart", "BLoC"],
    demoUrl: "#",
    sourceUrl: "#",
    colors: {
      background: "#1e3e1b",
      text: "#f7fee7",
      primary: "#84cc16",
      secondary: "#3f6212",
      accent: "#a3e635"
    }
  },
  {
    id: "portfolio-theme",
    name: "Portfolio Theme",
    previewImageUrl: "https://via.placeholder.com/600x400/581c87/e879f9?text=Portfolio+Theme",
    category: "design",
    description: "A modern and customizable portfolio theme for designers and developers.",
    year: 2023,
    technologies: ["Figma", "React", "GSAP", "Tailwind CSS"],
    demoUrl: "#",
    sourceUrl: "#",
    colors: {
      background: "#581c87",
      text: "#f3e8ff",
      primary: "#e879f9",
      secondary: "#86198f",
      accent: "#c084fc"
    }
  }
]; 