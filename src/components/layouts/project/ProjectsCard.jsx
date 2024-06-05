export function ProjectsCard({ title, desc, image, url }) {
    return (
        <>
            <div className="p-5 bg-gradient-to-bl from-util hover:shadow-lg lg:hover:shadow-gradient2 lg:hover:-translate-y-5 transition-all duration-200 to-gray-900 rounded-3xl flex flex-col lg:w-[22rem] gap-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="">
                    <h1 className="text-xl text-hover">{title}</h1>
                    <p className="">{desc}</p>
                </div>
                <div className="w-full justify-center flex">
                    <button className="bg-background-color text-white rounded-2xl px-5 py-2" onClick={() => window.location.href = url}>Read More</button>
                </div>
            </div>
        </>
    )
}