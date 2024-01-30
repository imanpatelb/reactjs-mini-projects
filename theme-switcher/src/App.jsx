import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme.js'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    // actual change in theme

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])


    return (
        <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
            <div className='overflow-x-hidden overflow-hidden'>

                <div className="flex justify-center items-center transform -translate-y-[-150px] -translate-x-[-250px]">
                    <ThemeBtn />
                </div>

                <div>
                    <Card />
                </div>

            </div>
        </ThemeProvider>
    )
}

export default App