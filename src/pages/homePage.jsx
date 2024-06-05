import { Link } from "react-router-dom";
import { Header } from "../components/fragments/Header";
import RunningText from "../components/layouts/aboutme/RunningText";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ProjectsCard } from "../components/layouts/project/ProjectsCard";
import { ProjectsData } from "../components/data/ProjectsData";
import MySkill from "../components/layouts/myskill/MySkillSection";
import { HeaderM } from "../components/fragments/HeaderM";
import { ProjectsSlider } from "../components/layouts/project/ProjectsSlider";
import { AboutMeSection } from "../components/layouts/aboutme/AboutMeSection";
import { ContactSection } from "../components/layouts/contact/ContactSection";


export default function Home() {
    const texts = ['Frontend Developer']

    return (
        <>
            <Header />
            <HeaderM/>
            <div className="w-full overflow-x-hidden  bg-background-color font-jost px-[5%] text-white pt-24 lg:pt-40 flex flex-col gap-32">
                {/* Home */}
                <div className="w-full justify-between gap-8 lg:gap-0 items-center flex-col-reverse lg:flex-row flex bg-background-color">
                    <div className="lg:w-[55%] flex flex-col gap-5 lg:gap-10">
                        <div className="">
                            <p className="text-lg lg:text-2xl text-text">Hello World, <span className="text-hover">I'm</span></p>
                            <h1 className="text-semibold text-2xl lg:text-5xl text-text"><span className="text-hover">Sakha</span> Naufal Huda</h1>
                            <div className="h-5 text-lg lg:text-2xl">
                                <RunningText texts={texts} />
                            </div>
                        </div>

                        <div className="lg:w-[80%]">
                            <p className="text-text text-sm">I am a passionat <span className="text-hover font-medium">Frontend Developer</span> dedicated to creating innovative and engaging web solutions. With a blend of technical <span className="text-hover font-medium">Skills</span> and <span className="text-hover font-medium">Creativity</span>, I am committed to delivering exceptional user experiences through innovative web design and development. I have developed various responsive, appealing, and accessible web applications.</p>
                        </div>

                        <div className="flex pt-5 lg:pt-0 gap-5 justify-center lg:justify-normal">
                            <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200">
                                <FaInstagram />
                            </Link>

                            <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200">
                                <FaGithub />
                            </Link>

                            <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200">
                                <FaLinkedin />
                            </Link>

                            <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200">
                                <FaWhatsapp />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-[45%] flex justify-center">
                        <div className="w-52 h-52 lg:w-80 lg:h-80 border-4 border-zinc-400 shadow-lg lg:shadow-2xl lg:shadow-span border-gradient rounded-full overflow-hidden ">
                            <img src="/img/Sakha2.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                {/* Home End */}

                {/* About Me Section */}
                <div>
                    <AboutMeSection />
                </div>
                {/* About Me Section End */}

                {/* My Skill Section */}
                <div>
                    <MySkill/>
                </div>
                {/* My Skill Section End */}

                {/* Projects Section */}
                <div className="w-full flex flex-col text-text gap-5 lg:gap-10">
                    <div className="w-full flex items-center flex-col">
                        <h1 className="text-3xl font-medium">Web <span className="text-hover">Projects</span></h1>
                        <p className="">This is my <span className="">portfolio website</span></p>
                    </div>

                    <div className="w-full lg:flex flex-wrap gap-5 justify-center hidden">
                        {ProjectsData.map(project => (
                            <ProjectsCard 
                            key={project.id} 
                            title={project.title} 
                            desc={project.desc} 
                            image={project.image}
                            url={project.url}
                            />
                        ))}
                    </div>
                    <div className="lg:hidden w-full px-5">
                        <ProjectsSlider/>
                    </div>
                </div>
                {/* Projects Section End */}

                {/* Contact Section */}
                <div>
                    <ContactSection/>
                </div>
                {/* Contact Section End */}
            </div>
        </>
    )
}