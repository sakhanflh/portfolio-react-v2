import { Link } from "react-router-dom";
import { EducationData } from "../../data/EducationData";
import { ProfileCard } from "../../fragments/ProfileCard";

export function AboutMeSection() {
    return (
        <>
            <div className="w-full text-text flex flex-col gap-5 lg:gap-10 relative">
                <div className="w-full flex flex-col items-center">
                    <p className="text-2xl lg:text-3xl font-medium">About <span className="text-hover">Me</span></p>
                    <h1 className="text-sm lg:text-base">My short personal bio, get to know more about me</h1>
                </div>

                <div className="w-full lg:justify-between flex flex-col lg:flex-row">
                    <div className="lg:w-[40%] lg:flex flex-col gap-5 hidden">
                        <div className="flex flex-col">
                            <h1>My Education History</h1>
                            <p className="lg:text-3xl"><span className="text-hover">This section is my educational history</span>,<br /> from senior high school to college</p>
                        </div>
                    </div>
                    <div className="lg:w-[50%] flex justify-center">
                        <p className="lg:text-lg text-justify lg:text-start">Hello, my name is <span className="text-hover">Sakha</span> Naufal Huda. I study at <span className="text-hover">Indraprasta PGRI</span> university, with an educational background in the <span className="text-hover">IT</span> field and practical experience through previous projects, I have expertise in designing, developing and managing innovative websites.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-bl from-util to-gray-900 rounded-3xl p-5 w-full flex flex-col gap-5">
                    <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-center gap-8">
                        <div className="lg:w-[50%] lg:h-96 justify-center flex flex-col lg:flex-col gap-5 ">
                            <div className="flex flex-col gap-5 lg:gap-10 relative">
                                {EducationData.map((data, index) => (
                                    <div key={index} className="flex gap-10 z-20 w-full lg:w-[75%] relative">
                                        <aside className="w-16 lg:w-20">
                                            <div className="w-full rounded-full box-border overflow-hidden items-center justify-center flex border border-util bg-white p-3">
                                                <img src={data.image} alt="" className="object-cover" />
                                            </div>
                                        </aside>
                                        <article className="">
                                            <p className="opacity-80 text-sm">{data.date}</p>
                                            <p className="text-sm">{data.as}</p>
                                            <h1 className="text-lg lg:text-2xl font-medium">{data.title}</h1>
                                            <p className="font-medium">{data.company}</p>
                                            <p>{data.desc}</p>
                                        </article>
                                    </div>
                                ))}
                                <div className="absolute w-[3px] lg:w-1 h-24 z-10 bottom-[80px] lg:bottom-[90px] left-[30px] lg:left-[37px] opacity-50">
                                    <img src="/line.svg" alt="" className="object-cover w-full h-full" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[30%] w-full justify-center  lg:justify-normal flex">
                            <ProfileCard/>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <Link to={'/aboutme'} className="py-3 px-10 bg-span rounded-xl font-medium text-lg hover:scale-90 transition-all duration-300 text-white">
                            <button>More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
