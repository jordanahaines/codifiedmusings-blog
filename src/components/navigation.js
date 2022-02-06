import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/about#about">About Jordan</Link>
    <Link to="/about#contact">Contact</Link>
    <a href="https://prompt.com" target="_blank">Prompt</a>
    <ThemeChanger/>
  </nav>
  
)