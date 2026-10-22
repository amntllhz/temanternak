

const CustomBadge = ({ text = "Teks Badge", icon = null, textColor = "text-acc" }) => {
    return (
        <span className={`flex items-center font-medium text-[10px] ${textColor} px-3 py-1 rounded-full bg-acc/10 ring ring-acc/30 ring-inset`}>
            {icon}
            {text}
        </span>
    )
}

export default CustomBadge