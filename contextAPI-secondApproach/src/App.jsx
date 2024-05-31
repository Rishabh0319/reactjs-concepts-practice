import React, { useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'

const App = () => {
  const [themeMode,setThemeMode]= useState('light');
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App