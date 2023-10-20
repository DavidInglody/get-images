import { useContext, useEffect, useState } from "react"
import { createContext } from "react"

const createGlobalContext = createContext()

export const useGlobalContext= () => useContext(createGlobalContext)

  const getInitialDarkMode = ()=>{
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches
    const storedDarkMode= localStorage.getItem("darkTheme") === "true"
    return prefersDarkMode || storedDarkMode
  }

const AppContext = ({children}) => {
  const[isDarkTheme,setIsDarkTheme]=useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState("cat")

  const toggleDarkTheme =()=>{
    const newDarkTheme= !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    const body = document.querySelector("body")
    body.classList.toggle("dark-theme", newDarkTheme)
    localStorage.setItem("darkTheme",newDarkTheme )
  }

  useEffect(()=>{
    document.body.classList.toggle("dark-theme", isDarkTheme)
  },[isDarkTheme])
  return <createGlobalContext.Provider value={{toggleDarkTheme,isDarkTheme,searchTerm, setSearchTerm}}>
    {children}
  </createGlobalContext.Provider>
}
export default AppContext