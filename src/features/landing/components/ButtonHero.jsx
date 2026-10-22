import { Button } from "@/components/ui/button"

const ButtonHero = () => {
    return (
        <Button className="pl-3.5 pr-1.5 bg-primary flex text-xs gap-6 justify-between text-white rounded-lg bg-linear-to-b from-grad2 to-grad1">
            Coba Analisis Usaha
            <span className="bg-white/20 flex items-center justify-center gap-1.5 text-white text-[10px] py-1 px-2 rounded-sm">
                <span className="relative flex size-1.25">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex size-1.25 rounded-full bg-white"></span>
                </span>
                Gratis
            </span>
        </Button>
    )
}

export default ButtonHero