import { FaCss3, FaGitAlt, FaHtml5, FaJava, FaJsSquare, FaReact, FaVuejs } from "react-icons/fa";
import { Button } from "./ui/button";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSpring } from "react-icons/si";

export function Techs() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-3/4">
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><FaReact size={50} /> React</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><FaVuejs size={50} /> Vue</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><FaHtml5 size={50} /> HTML</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><FaCss3 size={50} /> CSS</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><RiTailwindCssFill size={50} /> TailwindCSS</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><FaJsSquare size={50} /> JavaScript</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><BiLogoTypescript size={50} /> TypeScript</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><FaGitAlt size={50} /> Git</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><FaJava size={50} /> Java</Button>
            <Button className="hover:scale-110 transition-transform h-28 w-36 flex flex-col" size="icon" variant='secondary'><SiSpring size={50} /> Spring</Button>
        </div>
    )
}