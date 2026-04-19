/*import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './drills/drill-01-counter/App.jsx'
//import App from './drills/drill-02-theme/App'
//import App from './drills/drill-03-reducer/App'
//import App from './drills/drill-04-custom-hooks/App'
//import App from "./drills/drill-06-auth-context/App"
//import App from "./drills/drill-07-language/App"
import App from "./drills/capstone/App"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "./drills/capstone/contexts/ThemeContext"
import { LanguageProvider } from "./drills/capstone/contexts/LanguageContext"
import App from './drills/capstone/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);