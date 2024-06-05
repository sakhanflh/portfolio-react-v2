import { Navbar } from "./Navbar";

export function Header() {
    return (
        <>
            <div className="w-full h-16 bg-background-color fixed z-50 hidden lg:block">
                <Navbar />
            </div>
        </>
    )
}