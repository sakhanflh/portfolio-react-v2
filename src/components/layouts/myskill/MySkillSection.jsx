import { DetailSkill } from "./DetailSkill";

export default function MySkill() {
    return (
        <>
            <div className="w-full flex flex-col items-center gap-10 text-text">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-3xl font-medium">My <span className="text-hover">Skills</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam deserunt, quasi est modi aspernatur.</p>
                </div>

                <div className="w-full">
                    <DetailSkill/>
                </div>

            </div>
        </>
    )
}