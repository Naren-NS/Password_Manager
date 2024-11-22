import React, {useState} from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./Context/Theme";
import Home from "./Home";
import Tips from "./Tips";

export default function Homepage() {
  const [theme, setTheme] = useState("light");
  return (
  
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
      <Navbar/>
      <div className="flex-column d-flex w-60 align-items-center p-5">
            <ThemeToggle/>
            <br />
            <br />
            <Home/>
            <br />
            <br />
            <Tips/>
            </div>
      <Footer/>
      </div>
    </ThemeContext.Provider>
    
    </>
  )
}
