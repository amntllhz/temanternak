
const CardBenefit = ({ icon: Icon, title, description }) => {
    return (
        <div className="p-4 h-40 bg-gray-100 ring ring-gray-200 rounded-2xl flex flex-col justify-between">

            <div className="bg-white ring ring-gray-200 p-2 rounded-md items-center w-8 h-8">
                <Icon className="size-4 text-grad2" />
            </div>

            <div className="flex flex-col space-y-1">
                <h1 className="text-sm font-semibold tracking-tight">{title}</h1>
                <p className="text-[11px] text-neutral-400 leading-snug max-w-60">{description}</p>
            </div>

        </div>
    )
}

export default CardBenefit