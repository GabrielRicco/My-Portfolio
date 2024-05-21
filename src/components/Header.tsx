import { Moon, Sun } from "phosphor-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <div className="flex items-center justify-between p-5">
        <h1 className="font-bold">GABRIEL RICCO</h1>
  
        <nav>
          <Button className="text-md" variant="link">Home</Button>
          <Button className="text-md" variant="link">About</Button>
          <Button className="text-md" variant="link">Projets</Button>
        </nav>
  
        <Button className="rounded-full" size="icon" variant="outline" onClick={toggleTheme}>
          {isDarkMode ? <Moon size={24} /> : <Sun size={24} /> }
        </Button>
      </div>
    )
}