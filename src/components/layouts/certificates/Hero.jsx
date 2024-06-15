import { useEffect, useRef, useState } from "react";
import { CertificatesData } from "../../data/CertificatesData"
import { CertificateCard } from "./CertificatesCard"

export default function CertificatesSection() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const containerRef = useRef();

    const handleSelect = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(false); // Ensure modal is closed when selecting another image
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(null);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSelectedImageIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return (
        <>
            <div className="font-jost text-text pt-20" ref={containerRef}>
                <div className="flex flex-col lg:gap-3 px-[5%]">
                    <h1 className="text-xl lg:text-3xl font-medium">My <span className="text-hover">Certificates</span></h1>
                    <p className="text-lg">Below is the certificate that I have received</p>
                </div>
                <div className="bg-background-color w-full font-jost text-text p-[5%] overflow-x-hidden flex flex-wrap gap-5 lg:gap-10 justify-center">
                    {CertificatesData.map((image, index) => (
                        <CertificateCard
                            key={image.id}
                            src={image.image}
                            alt={`Sertifikat ${index + 1}`}
                            isSelected={selectedImageIndex === index}
                            onSelect={() => handleSelect(index)}
                            isOpen={isModalOpen && selectedImageIndex === index}
                            onOpen={handleOpenModal}
                            onClose={handleCloseModal}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}