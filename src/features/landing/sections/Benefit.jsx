import { Stagger, StaggerItem } from "../../../components/Stagger"
import CardBenefit from "../components/CardBenefit"
import HeadingSection from "../components/HeadingSection"
import { benefits } from "../data/benefits"

const Benefit = () => {
    return (
        <div id="Solution" className="max-w-5xl py-24 w-full flex flex-col space-y-8 mx-auto">
            <HeadingSection
                title="Manfaat Otomatisasi dengan IoT"
                description="Kombinasi sensor pintar dan software analytics untuk menjaga stabilitas ekosistem peternakan"
            />

            <Stagger className="grid grid-cols-3 gap-4" delay={0.1}>
                {benefits.map((b) => (
                    <StaggerItem key={b.title}>
                        <CardBenefit key={b.title} {...b} />
                    </StaggerItem>
                ))}
            </Stagger>
        </div>
    )
}

export default Benefit