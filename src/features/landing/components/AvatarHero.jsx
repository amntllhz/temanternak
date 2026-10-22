import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarImage,
} from "@/components/ui/avatar"
import avatarEx from "@/assets/avatar-ex.png"

const AvatarHero = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <AvatarGroup className="">
                    <Avatar size="sm">
                        <AvatarImage src={avatarEx} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarImage src={avatarEx} />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarImage src={avatarEx} />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarImage src={avatarEx} />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                </AvatarGroup>
                <p class="text-lg font-semibold flex items-center justify-center">
                    <span class="inline-flex items-center">50</span>
                    <span class="inline-flex items-center transform -translate-y-0.5">+</span>
                </p>
            </div>
        </>
    )
}

export default AvatarHero