import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="px-28">
      <Header />

      <div className="h-[500px] w-full flex items-center justify-between p-48">
        <section>
          <h1 className="text-5xl">Hi Everyone! 👋</h1>
          <h2 className="text-6xl">I'm <span className="text-blue-800">Web Development</span></h2>
        </section>

        <section>
          <Avatar>
            <AvatarImage className="rounded-full w-64" src="https://github.com/gabrielricco.png" />
            <AvatarFallback className="rounded-full w-64">GR</AvatarFallback>
          </Avatar>
        </section>
      </div>
    </div>
  )
}
