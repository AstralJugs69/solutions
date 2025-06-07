import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    // Base configurations
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked, // Use type-aware linting
      // Consider ...tseslint.configs.strictTypeChecked for stricter rules
      // Consider ...tseslint.configs.stylisticTypeChecked for stylistic rules
    ],
    files: ['**/*.{ts,tsx}'], // Apply to TypeScript/TSX files
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Add browser globals
        ...globals.node,    // Add Node.js globals if needed for configs like this one
      },
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'], // Specify project tsconfigs
        tsconfigRootDir: import.meta.dirname, // Root directory for tsconfig
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin, // Ensure the TypeScript ESLint plugin is explicitly available
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-x': reactX,       // Add react-x plugin
      'react-dom': reactDom,   // Add react-dom plugin
    },
    rules: {
      // Existing rules
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Add recommended rules from new plugins
      ...(reactX.configs?.['recommended-typescript']?.rules || {}), // Use optional chaining for safety
      ...(reactDom.configs?.recommended?.rules || {}), // Use optional chaining for safety

      // Example: Disable a specific rule if needed (generally not recommended without reason)
      // '@typescript-eslint/no-unused-vars': 'warn',

      // You can add more custom rules here
    },
  },
  // Configuration for JS files like vite.config.js, postcss.config.js, tailwind.config.js etc.
  {
    files: ['**/*.{js,cjs,mjs}'], // Target JS configuration files
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node, // Node.js globals for config files
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off', // Allow require statements in JS config files
    }
  }
);
