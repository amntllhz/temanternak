import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Proof from "./sections/Proof"
import Solution from "./sections/Solution"
import Benefit from "./sections/Benefit"
import Comparison from "./sections/Comparison"

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Navbar />
            <Hero />
            <Proof />
            <Solution />
            <Benefit />
            <Comparison />
        </div>
    )
}

export default LandingPage
