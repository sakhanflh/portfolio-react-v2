export function NavbarM({ onShowNavbar }) {
    return (
        <>
            <div className={`font-jost ${onShowNavbar ? "w-full h-48 bg-background-color flex transition-all duration-500 ease-in-out" : "w-full h-0 bg-background-color transition-all duration-300 ease-in-out"}`}>
                <ul className="w-full flex flex-col h-full justify-around">
                    <div className={`w-full hover:bg-util h-[25%] items-center flex px-5 ${onShowNavbar ? 'visible' : 'hidden'}`}>
                        <li className="text-text text-sm hover:text-hover font-semibold">Home</li>
                    </div>

                    <div className={`w-full hover:bg-util h-[25%] items-center flex px-5 ${onShowNavbar ? 'visible' : 'hidden'}`}>
                        <li className="text-text text-sm hover:text-hover font-semibold">About Me</li>
                    </div>

                    <div className={`w-full hover:bg-util h-[25%] items-center flex px-5 ${onShowNavbar ? 'visible' : 'hidden'}`}>
                        <li className="text-text text-sm hover:text-hover font-semibold">Projects</li>
                    </div>

                    <div className={`w-full hover:bg-util h-[25%] items-center flex px-5 ${onShowNavbar ? 'visible' : 'hidden'}`}>
                        <li className="text-text text-sm hover:text-hover font-semibold">Contact</li>
                    </div>
                </ul>
            </div>
        </>
    )
}