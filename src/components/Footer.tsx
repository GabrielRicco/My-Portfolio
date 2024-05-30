import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
      <footer className="fixed bottom-0 flex justify-between w-full px-64 bg-secondary h-14 items-center max-lg:p-0 max-lg:flex-col max-lg:h-20 max-lg:justify-center max-lg:gap-3 max-2xl:px-40">
        <p>Designed and Developed by Gabriel Ricco 😎</p>

        <div className="flex gap-10">
          <a className="hover:scale-125 transition-transform" href="https://github.com/gabrielricco" target="_blank"><GithubLogo size={26} /></a>
          <a className="hover:scale-125 transition-transform"  href="https://www.instagram.com/gabriel_ricco" target="_blank"><InstagramLogo size={26} /></a>
          <a className="hover:scale-125 transition-transform"  href="https://www.linkedin.com/in/gabrielricco" target="_blank"><LinkedinLogo size={26} /></a>
        </div>
      </footer>
    )
}