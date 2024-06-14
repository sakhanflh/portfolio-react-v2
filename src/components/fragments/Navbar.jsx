import { Link } from "react-router-dom";
import { HoverIcon } from "../../assets/HoverIcon";

export function Navbar() {
    return (
        <>
        <div className="max-w-[150rem] overflow-x-hidden">
            <div className="hidden w-full h-16 px-[5%] lg:flex items-center justify-between font-jost">
                <div className="flex w-12">
                    {/* <img src="/img/Senech-white.png" alt="" className="w-full h-full object-cover" /> */}
                    <HoverIcon
                    src="/img/Senech-white.png"
                    hoverSrc="/img/senech-blue.png"
                    alt="Image showing a placeholder before hover and a different color after hover"
                    />
                </div>

                <ul className="flex gap-10">
                    <Link to={'/'}>
                        <li className="text-text text-sm hover:text-hover font-semibold">Home</li>
                    </Link>
                    <Link to={'/aboutme'}>
                        <li className="text-text text-sm hover:text-hover font-semibold">About Me</li>
                    </Link>
                    <Link to={'/projects'}>
                        <li className="text-text text-sm hover:text-hover font-semibold">Projects</li>
                    </Link>
                    <Link to={'/certificates'}>
                        <li className="text-text text-sm hover:text-hover font-semibold">Certificate</li>
                    </Link>
                    <li className="text-text text-sm hover:text-hover font-semibold">Contact</li>
                </ul>
            </div>
        </div>
        </>
    )
}