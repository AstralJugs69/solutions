import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { StagewiseToolbar } from '@stagewise/toolbar-react'

// Main application root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
)

// Stagewise toolbar - only in development mode
if (import.meta.env.DEV) {
  const stagewiseConfig = {
    plugins: []
  }
  
  // Create a separate DOM element for the toolbar
  const stagewiseRoot = document.createElement('div')
  stagewiseRoot.id = 'stagewise-root'
  document.body.appendChild(stagewiseRoot)
  
  // Render the toolbar in its own React root
  createRoot(stagewiseRoot).render(
    <StagewiseToolbar config={stagewiseConfig} />
  )
}
