export function Navbar() {
    return (
        <>
            <div className="hidden w-full h-16 px-[5%] lg:flex items-center justify-between font-jost">
                <div className="flex w-12">
                    <img src="/img/Senech-white.png" alt="" className="w-full h-full object-cover" />
                </div>

                <ul className="flex gap-10">
                    <li className="text-text text-sm hover:text-hover font-semibold">Home</li>
                    <li className="text-text text-sm hover:text-hover font-semibold">About Me</li>
                    <li className="text-text text-sm hover:text-hover font-semibold">Projects</li>
                    <li className="text-text text-sm hover:text-hover font-semibold">Contact</li>
                </ul>
            </div>
        </>
    )
}