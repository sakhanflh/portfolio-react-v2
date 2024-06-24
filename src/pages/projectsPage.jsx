import { useEffect } from "react";
import { ProjectsData } from "../components/data/ProjectsData";
import { Footer } from "../components/fragments/Footer";
import { Header } from "../components/fragments/Header";
import { HeaderM } from "../components/fragments/HeaderM";
import { ProjectsCard } from "../components/layouts/project/ProjectsCard";

export default function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Header />
            <HeaderM />
            <div className="bg-background-color w-full pt-24 lg:pt-32 font-jost text-text p-[5%] overflow-x-hidden gap-10 flex flex-col">
                <div className="px-[5%]">
                    <h1 className="text-2xl">My <span className="text-hover">Projects</span></h1>
                </div>
                <div className="w-full flex flex-wrap gap-5 justify-center">
                    {ProjectsData.map((project, index) => (
                        <ProjectsCard
                            key={index}
                            id={project.id}
                            title={project.title}
                            desc={project.desc}
                            image={project.image}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}