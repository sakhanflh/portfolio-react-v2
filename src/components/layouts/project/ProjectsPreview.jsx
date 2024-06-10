import { FaGithub, FaTimes } from "react-icons/fa";
import { ProjectsData } from "../../data/ProjectsData";
import { useParams } from "react-router-dom";

export function ProjectsPreview({ onClose, id }) {
    const projectRev = ProjectsData.find(pr => pr.id == id);

    if (!projectRev) {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 w-dvw">
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <div className="p-5 rounded-lg z-10 relative bg-background-color flex flex-col items-center">
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        onClick={onClose}
                    >
                        <FaTimes />
                    </button>
                    <h2 className="text-xl font-semibold">Project not found</h2>
                    <div className="flex items-center px-3 py-2 bg-red-700 rounded-lg" onClick={onClose}>
                        <button>
                            <p>Close</p>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const repoClick = () => {
        window.location.href = projectRev.repo;
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto px-5 md:px-0">
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <div className="p-5 rounded-lg z-10 relative bg-background-color flex">
                    <button
                        className="absolute top-2 right-2 text-text hover:text-red-500"
                        onClick={onClose}
                    >
                        <FaTimes />
                    </button>

                    <div className="max-w-[30rem] flex flex-col gap-5">
                        <div>
                            <h2 className="text-xl font-semibold">{projectRev.title}</h2>
                        </div>
                        <div className="w-full h-[13rem] md:h-[17rem] rounded-lg overflow-hidden border border-util">
                            <img src={projectRev.image} alt="" className="w-full h-full " />
                        </div>

                        <div className="flex gap-3">
                            {projectRev.tech.map(tech => (
                                <div className="flex items-center gap-1  px-2 rounded-md bg-util" >
                                    <p key={tech.id} className="text-white ">{tech.title}</p>
                                    <p>{tech.icon}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-">
                            <h1 className="text-xl font-medium">Description</h1>
                            <p className="text-sm">{projectRev.desc}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex text-white items-center px-3 py-2 bg-util gap-1 rounded-lg cursor-pointer hover:-translate-y-[1px] hover:shadow-md hover:shadow-span" onClick={repoClick}>
                                <FaGithub className="text-lg"/>
                                <p>Project Repository</p>
                            </div>

                            <div className="flex items-center px-3 py-2 bg-red-700 rounded-lg hover:-translate-y-[1px] hover:shadow-md hover:shadow-red-500" onClick={onClose}>
                                <button>
                                    <p>Close</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}