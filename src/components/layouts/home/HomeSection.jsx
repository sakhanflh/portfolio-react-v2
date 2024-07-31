import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import RunningText from "../aboutme/RunningText";
import { ProfileCard } from "../../fragments/ProfileCard";
export function HomeSection() {
    const texts = ['Frontend Developer']
    const handleGithub = () => {
        window.location.href = 'https://github.com/sakhanflh'
    }
    const handleInstagram = () => {
        window.location.href = 'https://www.instagram.com/sakhanflh?igsh=MWx0a2pucWZ6b2E4eg=='
    }
    const handleLinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/sakha-naufal-huda-94996a242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
    return (
        <>
            <div className="w-full justify-between gap-8 lg:gap-0 items-center flex-col-reverse lg:flex-row flex bg-background-color">
                <div>
                    <dot-grid/>
                </div>
                <div className="lg:w-[55%] flex flex-col gap-5 lg:gap-10">
                    <div className="">
                        <p className="text-lg lg:text-2xl text-text">Hello World, <span className="text-hover">I'm</span></p>
                        <h1 className="text-semibold text-2xl lg:text-5xl text-text"><span className="text-hover">Sakha</span> Naufal Huda</h1>
                        <div className="h-5 text-lg lg:text-2xl">
                            <RunningText texts={texts} />
                        </div>
                    </div>

                    <div className="lg:w-[80%]">
                        <p className="text-text text-sm lg:text-base">I am a passionat <span className="text-hover font-medium">Frontend Developer</span> dedicated to creating innovative and engaging web solutions. With a blend of technical <span className="text-hover font-medium">Skills</span> and <span className="text-hover font-medium">Creativity</span>, I am committed to delivering exceptional user experiences through innovative web design and development. I have developed various responsive, appealing, and accessible web applications.</p>
                    </div>

                    <div className="flex pt-5 lg:pt-0 gap-5 justify-center lg:justify-normal">
                        <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200 hover:text-hover" onClick={handleInstagram}>
                            <FaInstagram />
                        </Link>

                        <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200 hover:text-hover" onClick={handleGithub}>
                            <FaGithub />
                        </Link>

                        <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200 hover:text-hover" onClick={handleLinkedin}>
                            <FaLinkedin />
                        </Link>

                        <Link className="text-3xl lg:text-4xl hover:scale-90 transition-all duration-200 hover:text-hover">
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[45%] flex justify-center">
                    <ProfileCard/>
                    {/* <div className="w-52 h-52 lg:w-80 lg:h-80 border-2 lg:border-4 border-zinc-400 shadow-lg lg:shadow-2xl shadow-span lg:shadow-span rounded-full overflow-hidden ">
                        <img src="/img/Sakha2.jpg" alt="" className="w-full h-full object-cover" />
                    </div> */}
                </div>

            </div>
        </>
    )
}