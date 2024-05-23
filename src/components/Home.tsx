import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { FileArrowDown, GitBranch } from "phosphor-react";

export function Home() {
    return (
        <div className="h-[500px] w-full flex items-center justify-between p-6 mt-7 max-lg:flex-col max-lg:h-full max-lg:order-last">
            <section className="flex flex-col h-5/6 justify-between p-8 mt-20 max-lg:order-2">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl max-lg:text-2xl">Hi Everyone! 👋</h1>
                    <h2 className="text-6xl max-lg:text-4xl">I'm <span className="text-blue-800">Gabriel Ricco</span></h2>
                </div>

                <div className="mt-20">
                    <h3 className="text-blue-600 font-bold text-6xl max-lg:text-4xl">Web Development</h3>
                    <h4 className="text-4xl">Front-end | Back-end</h4>
                    <div className="flex mt-7 gap-4">
                        <Button className="hover:scale-105 transition-transform"><FileArrowDown size={22} />Download CV</Button>
                        <a href="https://github.com/gabrielricco" target="_blank">
                            <Button className="hover:scale-105 transition-transform" variant='secondary'><GitBranch size={22} />Github</Button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="max-lg:order-1">
                <Avatar>
                    <AvatarImage className="rounded-full w-72 max-lg:w-[200px]" src="https://github.com/gabrielricco.png" />
                    <AvatarFallback className="rounded-full w-72">GR</AvatarFallback>
                </Avatar>
            </section>
        </div>
    )
}