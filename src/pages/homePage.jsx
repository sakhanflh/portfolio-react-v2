import { Header } from "../components/fragments/Header";
import { ProjectsCard } from "../components/layouts/project/ProjectsCard";
import { ProjectsData } from "../components/data/ProjectsData";
import MySkill from "../components/layouts/myskill/MySkillSection";
import { HeaderM } from "../components/fragments/HeaderM";
import { ProjectsSlider } from "../components/layouts/project/ProjectsSlider";
import { AboutMeSection } from "../components/layouts/aboutme/AboutMeSection";
import { ContactSection } from "../components/layouts/contact/ContactSection";
import { HomeSection } from "../components/layouts/home/HomeSection";
import { Footer } from "../components/fragments/Footer";


export default function Home() {
    // const tech = ProjectsData.map(prod => prod.tech)
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
                        <div className="w-full flex flex-col text-text gap-5 lg:gap-10 px-[5%]">
                            <div className="w-full flex items-center flex-col">
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
                        <div className="px-[5%]">
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