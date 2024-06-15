import { Header } from "../components/fragments/Header";
import { HeaderM } from "../components/fragments/HeaderM";
import CertificatesSection from "../components/layouts/certificates/Hero";


export default function CertificatePage() {
    return (
        <>
            <Header/>
            <HeaderM/>
            <div>
                <CertificatesSection/>
            </div>
        </>
    )
}