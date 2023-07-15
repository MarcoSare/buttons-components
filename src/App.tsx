//import { useState } from 'react'
import Home from './pages/home'
import SideBar from './components/side_bar'
import './App.css'
import './styles/home.css'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '')

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? '' : 'dark-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <>
    <div className= {`section-main ${theme? 'dark-theme': ''}`}>
    <SideBar toggleTheme={toggleTheme} theme={theme}/>
    <Home/>
    </div>
    </>
  )
}

export default App
