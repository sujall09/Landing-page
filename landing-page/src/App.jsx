import React, { useState } from 'react'
import Home from './components/Home'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen flex flex-col relative ${darkMode && "dark"}`}>
      <div className='flex-grow relative'>
        <Home />
        <button
          className='z-10 fixed cursor-pointer bottom-10 right-10 w-16 h-16 bg-slate-900 dark:bg-white rounded-full text-white dark:text-black'
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  )
}

export default App
