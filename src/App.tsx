import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <div className="px-64 max-md:p-0">
        <Header />

        <Home />
      </div>

        <Footer />
    </>
  )
}
