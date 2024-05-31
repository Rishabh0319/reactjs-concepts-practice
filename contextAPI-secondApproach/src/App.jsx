import React, { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'

const App = () => {

  const [themeMode,setThemeMode]= useState('light');

  const lightTheme = ()=>{
    setThemeMode('light');
  }
  const darkTheme = ()=>{
    setThemeMode('dark');
  }
  
  useEffect(()=>{
    const html = document.querySelector("html");
    html.classList.remove("dark","light");

    html.classList.add(themeMode);
  },[themeMode])

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

export default App;