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

            <div className="grid grid-cols-3 gap-4">
                {benefits.map((b) => (
                    <CardBenefit key={b.title} {...b} />
                ))}
            </div>
        </div>
    )
}

export default Benefit