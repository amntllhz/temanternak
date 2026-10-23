import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarImage,
} from "@/components/ui/avatar"

import av1 from "@/assets/landing/av-1.png"
import av2 from "@/assets/landing/av-2.png"
import av3 from "@/assets/landing/av-3.png"
import av4 from "@/assets/landing/av-4.png"

const AvatarHero = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <AvatarGroup className="">
                    <Avatar size="sm">
                        <AvatarImage src={av1} />
                        <AvatarFallback>av1</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarImage src={av2} />
                        <AvatarFallback>av2</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarImage src={av3} />
                        <AvatarFallback>av3</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarImage src={av4} />
                        <AvatarFallback>av4</AvatarFallback>
                    </Avatar>
                </AvatarGroup>
                <p className="text-lg font-semibold flex items-center justify-center">
                    <span className="inline-flex items-center">50</span>
                    <span className="inline-flex items-center transform -translate-y-0.5">+</span>
                </p>
            </div>
        </>
    )
}

export default AvatarHero