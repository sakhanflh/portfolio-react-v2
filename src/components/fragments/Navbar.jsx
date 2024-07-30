import { Link, useLocation } from "react-router-dom";
import { HoverIcon } from "../../assets/HoverIcon";

export function Navbar() {
    const location = useLocation();
    return (
        <>
            <div className="max-w-[150rem] overflow-x-hidden">
                <div className="hidden w-full h-16 px-[5%] lg:flex items-center justify-between font-jost">
                    <div className="flex w-12">
                        <HoverIcon
                            src="/img/Senech-white.png"
                            hoverSrc="/img/senech-blue.png"
                            alt="Image showing a placeholder before hover and a different color after hover"
                        />
                    </div>

                    <ul className="flex gap-10">
                        <li>
                            <Link
                                to="/"
                                className={`text-text text-sm hover:text-hover font-semibold ${location.pathname === '/' ? 'text-span' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/aboutme"
                                className={`text-text text-sm hover:text-hover font-semibold ${location.pathname === '/aboutme' ? 'text-span' : ''}`}
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className={`text-text text-sm hover:text-hover font-semibold ${location.pathname === '/projects' ? 'text-span' : ''}`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/certificates"
                                className={`text-text text-sm hover:text-hover font-semibold ${location.pathname === '/certificates' ? 'text-span' : ''}`}
                            >
                                Certificate
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
