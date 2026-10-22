import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Navbar />
            <Hero />
        </div>
    )
}

export default LandingPage
