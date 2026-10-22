import AvatarHero from "../components/AvatarHero"
import ButtonHero from "../components/ButtonHero"
import CustomBadge from "../components/CustomBadge"

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 min-h-screen">
            <CustomBadge
                text="Peternakan Modern Berbasis IoT"
                icon={
                    <svg className="size-3 mr-1.5" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2426 7.75738C18.5858 10.1005 18.5858 13.8995 16.2426 16.2427M7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75735M4.92893 19.0711C1.02369 15.1658 1.02369 8.8342 4.92893 4.92896M19.0711 4.929C22.9763 8.83424 22.9763 15.1659 19.0711 19.0711M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
            />
            <h1 className="text-4xl text-center font-semibold tracking-tighter max-w-md">Bangun Peternakan Cerdas Praktis dan Efisien</h1>
            <p className="text-sm max-w-md text-neutral-400 text-center mt-1">Pemantauan dan manajemen kandang berbasis IoT untuk membantu  menekan risiko kerugian serta meningkatkan hasil panen </p>
            <div className="flex items-center justify-center space-x-5 mt-4">
                <ButtonHero />
                <AvatarHero />
            </div>
        </div>
    )
}

export default Hero