
const HeadingSection = ({ title = "Judul Section", description = "Deskripsi Section" }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-xl tracking-tight w-full max-w-2xl text-center">{title}</p>
            <p className="text-xs text-neutral-400 w-full max-w-md text-center">{description}</p>
        </div>
    )
}

export default HeadingSection