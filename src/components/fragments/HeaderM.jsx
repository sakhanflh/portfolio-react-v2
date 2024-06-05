import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarM } from "./NavbarM";
import { useState } from "react";


export function HeaderM() {
    const [showNavbar, setShowNavbar] = useState(false)
    function handleClick() {
        setShowNavbar(!showNavbar)
    }
    return (
        <>
            <div className="z-50 w-full flex flex-col bg-background-color border-b border-util shadow-md fixed lg:hidden">
                <div className="flex h-16 w-full items-center justify-between px-5">
                    <GiHamburgerMenu className="text-xl text-text" onClick={handleClick}/>
                    <div className="w-12">
                        <img src="/img/Senech-white.png" alt="" />
                    </div>
                </div>
                <NavbarM onShowNavbar={showNavbar}/>
            </div>
        </>
    )
}