import { useEffect } from "react";
import { Footer } from "../components/fragments/Footer";
import { Header } from "../components/fragments/Header";
import { HeaderM } from "../components/fragments/HeaderM";
import CertificatesSection from "../components/layouts/certificates/Hero";


export default function CertificatePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <div className="bg-background-color">
                <Header />
                <HeaderM />
                <div className="max-w-5xl mx-auto">
                    <CertificatesSection />
                </div>
                <Footer/>
            </div>
        </>
    )
}