import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// lets make a variable to hold an instance of queryclient to configure.
// we are wrapping our app with QueryClientProvider so we can use QueryClientProvider
 
const queryclient = new QueryClient

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
