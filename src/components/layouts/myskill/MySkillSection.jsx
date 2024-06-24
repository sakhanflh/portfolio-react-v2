import { DetailSkill } from "./DetailSkill";

export default function MySkill() {
    return (
        <>
            <div className="w-full flex flex-col items-center gap-10 text-text">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-3xl font-medium">My <span className="text-hover">Skills</span></h1>
                    <p className="text-center">I am always committed to learning and growing, keeping up with the latest technological advancements and continuously enhancing my skills.</p>
                </div>

                <div className="w-full">
                    <DetailSkill/>
                </div>

            </div>
        </>
    )
}