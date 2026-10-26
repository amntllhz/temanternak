import BlurText from "@/components/BlurText"
import FadeIn from "@/components/FadeIn"

const HeadingSection = ({ title = "Judul Section", description = "Deskripsi Section" }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <BlurText
                text={title}
                effect="blur"
                animateBy="words"
                direction="bottom"
                staggerFrom="start"
                trigger="view"
                delay={50}
                stepDuration={0.30}
                blur={10}
                distance={20}
                className="font-semibold text-xl tracking-tight w-full max-w-2xl text-center justify-center"
                loop={false}
                loopDelay={2}
                focusOnHover={false}
            />
            <FadeIn delay={0.1} >
                <p className="text-xs text-neutral-400 w-full max-w-sm text-center">{description}</p>
            </FadeIn>
        </div>
    )
}

export default HeadingSection