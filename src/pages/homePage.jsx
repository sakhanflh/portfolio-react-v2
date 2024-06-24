import { Header } from "../components/fragments/Header";
import { ProjectsCard } from "../components/layouts/project/ProjectsCard";
import { ProjectsData } from "../components/data/ProjectsData";
import MySkill from "../components/layouts/myskill/MySkillSection";
import { HeaderM } from "../components/fragments/HeaderM";
import { AboutMeSection } from "../components/layouts/aboutme/AboutMeSection";
import { ContactSection } from "../components/layouts/contact/ContactSection";
import { HomeSection } from "../components/layouts/home/HomeSection";
import { Footer } from "../components/fragments/Footer";
import { useEffect } from "react";


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const moreProjects = () => {
        window.location.href = '/#/projects'
    }
    return (
        <>
            <div className="bg-background-color">
                <div className="max-w-[150rem] mx-auto">
                    <Header />
                    <HeaderM />
                    <div className="w-full overflow-x-hidden  bg-background-color font-jost text-white pt-24 lg:pt-40 flex flex-col gap-32">
                        {/* Home */}
                        <div className="px-[5%]">
                            <HomeSection />
                        </div>
                        {/* Home End */}

                        {/* About Me Section */}
                        <div className="px-[5%]">
                            <AboutMeSection />
                        </div>
                        {/* About Me Section End */}

                        {/* My Skill Section */}
                        <div className="px-[5%]">
                            <MySkill />
                        </div>
                        {/* My Skill Section End */}

                        {/* Projects Section */}
                        <div className="w-full flex flex-col text-text gap-5 lg:gap-10 px-[5%] h-[80rem] lg:h-max overflow-hidden relative">
                            <div className="absolute bottom-0 bg-gradient-to-t from-util to-transparent  w-full left-0 lg:hidden flex justify-center items-center h-40" onClick={moreProjects}>
                                <p className="text-xl py-3 px-5 rounded-xl bg-gradient2 text-white">View More</p>
                            </div>
                            <div className="w-full flex items-center flex-col relative">
                                <h1 className="text-3xl font-medium">Web <span className="text-hover">Projects</span></h1>
                                <p className="">This is my <span className="">portfolio website</span></p>
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
                        {/* Projects Section End */}

                        {/* Contact Section */}
                        <div className="px-[5%]" id="contact">
                            <ContactSection />
                        </div>
                        {/* Contact Section End */}

                        {/* Footer */}
                        <div>
                            <Footer />
                        </div>
                        {/* Footer End */}
                    </div>
                </div>
            </div>
        </>
    )
}