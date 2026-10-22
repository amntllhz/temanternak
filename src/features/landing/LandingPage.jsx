import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Proof from "./sections/Proof"
import Solution from "./sections/Solution"

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Navbar />
            <Hero />
            <Proof />
            <Solution />
        </div>
    )
}

export default LandingPage
