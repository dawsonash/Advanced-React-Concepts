

function MainCTA (title, icon ) {
        return (
    <button className="flex py-5 px-8 justify-center h-12 items-center gap-2 flex-[1-0-0%]
    border-r-8 bg-[#FA9F42]">
        <span className="font-heading text-black">{title}</span>
        {icon}
    </button>
        )

} export default MainCTA