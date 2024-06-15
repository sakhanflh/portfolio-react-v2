import { useState } from "react";
import Modal from "./CertificatesPreview";
export function CertificateCard({ src, alt, isSelected, onSelect, isOpen, onOpen, onClose }) {
    const handleImageClick = (event) => {
        event.stopPropagation(); // Prevent triggering the outside click handler
        onSelect();
    };

    const handleDetailClick = (event) => {
        event.stopPropagation(); // Prevent triggering the outside click handler
        onOpen();
    };
    return (
        <>
            <div className="relative w-[80%] lg:w-[30%]">
                <img src={src} alt={alt} className="cursor-pointer" onClick={handleImageClick} />
                {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                        <button className="text-lg" onClick={handleDetailClick}>
                            Show Detail
                        </button>
                    </div>
                )}
                <Modal isOpen={isOpen} onClose={onClose} imageSrc={src} />
            </div>
        </>
    )
}