import { House, Moon, ProjectorScreenChart, Sun, User } from "phosphor-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark', !isDarkMode)
  };

  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="font-bold text-3xl text-blue-800">GR.</h1>

      <div className="flex gap-6">
        <nav className="flex">
          <Link to="/">
            <Button className="text-xl flex gap-1 hover:scale-105 transition-transform" variant="link">
              <House size={22} /> Home
            </Button>
          </Link>
          <Link to="/about">
          <Button className="text-xl flex gap-1 hover:scale-105 transition-transform" variant="link">
            <User size={22} />About
          </Button>
          </Link>
          <Link to="/projects">
          <Button className="text-xl flex gap-1 hover:scale-105 transition-transform" variant="link">
            <ProjectorScreenChart size={22} />Projets
          </Button>
          </Link>
        </nav>
        <Button className="rounded-full hover:scale-105 transition-transform" size="icon" variant="outline" onClick={toggleTheme}>
          {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
        </Button>
      </div>
    </header>
  )
}