import { Techs } from "./Techs";

export function About() {
    return (
        <div className="flex flex-col gap-16">
            <section className="w-full h-full justify-center items-center flex flex-col gap-5">
                <h1 className="font-bold text-blue-600 text-3xl">ABOUT ME</h1>
                <div className="flex flex-col items-center gap-5 w-2/3">
                    <p className="leading-relaxed">I'm a guy who loves technology and the environment, and I believe that both can evolve together, I'm very focused on what I like and I always try to reach the top, without knocking anyone down along the way, of course</p>
                    <p className="leading-relaxed">My hobby since I was a child is playing tennis, with that I learned focus, concentration, discipline, responsibility and quick decisions</p>
                </div>
            </section>
            <section className="w-full h-full justify-center items-center flex flex-col gap-5">
                <h1 className="font-bold text-blue-600 text-3xl">SKILLS</h1>
                <Techs />
            </section>
        </div>
    )
}