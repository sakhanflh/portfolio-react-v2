import { FaCircleArrowRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ProjectsData } from "../../data/ProjectsData";
import { useEffect, useState } from "react";
import { ProjectsPreview } from "./ProjectsPreview";


export function ProjectsCard({ title, desc, image, url, id }) {
    const sameProjects = ProjectsData.find(pr => pr.id == id)
    const [showReview, setShowReview] = useState(false)

    const openReview = () => {
        setShowReview(true)
    }

    const closeReview = () => {
        setShowReview(false)
    }

    useEffect(() => {
        if (showReview) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Cleanup class ketika komponen di-unmount
        return () => {
            document.body.classList.remove("no-scroll");
        }
    }, [showReview]);


    return (
        <>
            <div className="p-5 bg-gradient-to-bl from-util hover:shadow-lg lg:hover:shadow-gradient2 transition-all duration-200 to-gray-900 rounded-2xl flex flex-col lg:w-[22rem] gap-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl text-hover">{title}</h1>
                    <div className="gap-3 flex flex-wrap">
                        {sameProjects?.tech.map(prj => (
                            <div className="flex items-center gap-1  px-2 rounded-md bg-gradient2" key={prj.id}>
                                <span className="text-white">{prj.title}</span>
                                <p>{prj.icon}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="line-clamp-2">{desc}</p>
                </div>
                <div className="w-full flex gap-3">
                    <button className="bg-span hover:bg-gradient2 text-white rounded-lg px-3 py-1 flex items-center gap-2" onClick={() => window.location.href = url}>
                        <p>Detail</p>
                        <FaCircleArrowRight />
                    </button>
                    <button className="hover:bg-span border-2 border-span text-white rounded-lg px-3 py-1 flex items-center gap-2"
                        onClick={openReview}
                    >
                        <p>Preview</p>
                        <FaEye />
                    </button>
                </div>
                {showReview &&
                    <ProjectsPreview onClose={closeReview} id={id} />
                }
            </div>
        </>
    )
}