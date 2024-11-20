import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/components.css'
import { Components } from './components/components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Components/>
  </StrictMode>,
)
