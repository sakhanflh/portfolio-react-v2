import { Navbar } from "./Navbar";

export function Header() {

    return (
        <>
        <div className="max-w-[150rem]">
            <div className="w-full h-16 bg-background-color fixed z-50 hidden lg:block  overflow-x-hidden">
                <Navbar />
            </div>
            
        </div>
        </>
    )
}