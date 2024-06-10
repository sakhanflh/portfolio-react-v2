import { useState } from "react";

export function HoverIcon({ src, hoverSrc, alt }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <img
                src={isHovered ? hoverSrc : src}
                alt={alt}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
        </>
    )
}