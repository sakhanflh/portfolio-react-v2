import { ProjectsData } from "../components/data/ProjectsData";
import { Footer } from "../components/fragments/Footer";
import { Header } from "../components/fragments/Header";
import { HeaderM } from "../components/fragments/HeaderM";
import { ProjectsCard } from "../components/layouts/project/ProjectsCard";

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <HeaderM />
            <div className="bg-background-color w-full pt-32 font-jost text-text p-[5%] overflow-x-hidden gap-10 flex flex-col">
                <div className="lg:px-[5%] flex flex-col gap-5">
                    <h1 className="text-xl lg:text-3xl">Welcome to my <span className="text-hover">Projects</span> page!</h1>
                    <p>Here, you will find a showcase of the various projects I have worked on as a Frontend Developer. Each project reflects my dedication to creating intuitive, aesthetic, and responsive user experiences. I use a variety of modern technologies and frameworks to ensure that every application and website I build is not only functional but also visually appealing.</p>
                </div>

                <div className="px-[5%]">
                    <h1 className="text-3xl">My <span className="text-hover">Projects</span></h1>
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