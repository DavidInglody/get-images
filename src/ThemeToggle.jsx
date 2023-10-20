import { useGlobalContext } from "./context"
import {PiSunFill,PiMoonFill} from "react-icons/pi"


const ThemeToggle = () => {
  const{toggleDarkTheme,isDarkTheme}=useGlobalContext()

  return <section className="toggle-container">
    <button className="dark-toggle" onClick={toggleDarkTheme}>
    {isDarkTheme ? <PiMoonFill className="toggle-icon"/>  
                 : <PiSunFill className="toggle-icon"/> }
  </button>
    </section>
}
export default ThemeToggle