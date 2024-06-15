import { EducationData } from "../components/data/EducationData";
import { ExperienceData } from "../components/data/ExperienceData";
import { Footer } from "../components/fragments/Footer";
import { Header } from "../components/fragments/Header";
import { HeaderM } from "../components/fragments/HeaderM";

export default function AboutMePage() {
    return (
        <>
            <div className="bg-background-color">
                <div className="max-w-[150rem] mx-auto">
                    <Header />
                    <HeaderM />
                    <div className="font-jost bg-background-color w-full p-[5%] pt-32 text-text gap-20 flex flex-col">
                        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                            <article className="w-full lg:w-[50%] flex flex-col gap-3">
                                <h1 className="text-3xl">About <span className="text-hover">Me</span></h1>
                                <p>Hello, my name is Sakha Naufal Huda. I study at Indraprasta PGRI university, with an educational background in the IT field and practical experience through previous projects, I have expertise in designing, developing and managing innovative websites.</p>
                            </article>
                            <aside className="w-full lg:w-[40%] flex justify-center p-[5%] lg:p-0">
                                <div className="w-72 h-72 lg:w-[80%] lg:h-96 rounded-full overflow-hidden ">
                                    <img src="/img/Sakha2.jpg" alt="" className="w-full h-full object-cover" />
                                </div>
                            </aside>
                        </div>

                        <div className="flex flex-col gap-5 lg:gap-10 relative">
                            <h1 className="text-2xl lg:text-3xl">Education</h1>
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

                        <div className="flex flex-col gap-10 relative">
                            <h1 className="text-2xl lg:text-3xl">Experience</h1>
                            {ExperienceData.map((data, index) => (
                                <div key={index} className="flex gap-5 lg:gap-10 w-full lg:w-[75%] z-20 relative">
                                    <aside className="lg:w-48">
                                        <div className="w-full rounded-full box-border overflow-hidden items-center justify-center flex border border-util bg-white p-3">
                                            <img src={data.image} alt="" className="object-cover" />
                                        </div>
                                    </aside>
                                    <article className="">
                                        <p className="opacity-80 text-sm lg:text-base">{data.date}</p>
                                        <h1 className="text-lg lg:text-2xl font-medium">{data.title}</h1>
                                        <p className="font-medium">{data.company}</p>
                                        <p className="text-sm lg:text-base">{data.desc}</p>
                                    </article>
                                </div>
                            ))}
                            {/* <div className="absolute w-[3px] lg:w-1 h-80 lg:h-52 z-10 top-[95px] lg:top-[90px] left-[35px] lg:left-[33px] opacity-50">
                                <img src="/line.svg" alt="" className="object-cover w-full h-full" />
                            </div> */}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}