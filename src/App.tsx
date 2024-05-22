import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export function App() {
  return (
    <>
      <div className="px-64">
        <Header />

        <Home />
      </div>

      <footer className="fixed bottom-0 flex justify-between w-full px-64 bg-secondary h-14 items-center">
        <p>Designed and Developed by Gabriel Ricco 😎</p>

        <div className="flex gap-10">
          <a className="hover:scale-125 transition-transform" href="https://github.com/gabrielricco" target="_blank"><GithubLogo size={26} /></a>
          <a className="hover:scale-125 transition-transform"  href="https://instagram.com/gabrielricco" target="_blank"><InstagramLogo size={26} /></a>
          <a className="hover:scale-125 transition-transform"  href="https://linkedin/in/gabrielricco" target="_blank"><LinkedinLogo size={26} /></a>
        </div>
      </footer>
    </>
  )
}
