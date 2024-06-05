import { SkillData } from "../../data/SkillData";

export default function MySkill() {
    return (
        <>
            <div className="w-full flex flex-col items-center gap-10 text-text">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-3xl font-medium">My <span className="text-hover">Skills</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam deserunt, quasi est modi aspernatur.</p>
                </div>

                <div className="flex flex-wrap gap-5 justify-center">
                    {SkillData.map((skill, index) => (
                        <div key={index} className="w-32 justify-center gap-2 rounded-2xl flex flex-col items-center p-5 bg-gradient-to- border-gradient2 border-2 hover:shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-gradient2">
                            <div className="">
                                <img src={skill.image} alt="" className="" />
                            </div>

                            <div className="">
                                <p>{skill.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}