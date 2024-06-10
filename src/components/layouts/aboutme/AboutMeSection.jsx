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
                        <p className="lg:text-lg text-center lg:text-start">Hello, my name is <span className="text-hover">Sakha</span> Naufal Huda. I study at <span className="text-hover">Indraprasta PGRI</span> university, with an educational background in the <span className="text-hover">IT</span> field and practical experience through previous projects, I have expertise in designing, developing and managing innovative websites.</p>
                    </div>
                </div>

                <div className="w-full flex flex-col-reverse lg:flex-row lg:justify-between">
                    <div className="lg:w-[65%] lg:h-96 justify-center bg-util flex flex-col lg:flex-col gap-5 rounded-3xl p-5">
                        <div className="p-5 py-3 flex flex-col gap-1 border rounded-2xl lg:justify-center bg-util">
                            <h1 className="font-medium lg:text-xl text-span">Senior High School</h1>
                            <p className="text-sm lg:text-base">SMA Negeri 9 Depok</p>
                            <p className="text-sm lg:text-base">Cinere, Depok</p>
                            <p className="text-sm lg:text-base">IPS</p>
                            <p className="text-sm lg:text-base">2018-2021</p>
                        </div>
                        <div className="p-5 py-3 flex flex-col gap-1 border rounded-2xl lg:justify-center bg-util">
                            <h1 className="font-medium lg:text-xl text-span">College Student</h1>
                            <p className="text-sm lg:text-base">Unindra University</p>
                            <p className="text-sm lg:text-base">Ps. Rebo, Jakarta Timur</p>
                            <p className="text-sm lg:text-base">Informatics Engineering</p>
                            <p className="text-sm lg:text-base">2021-2025</p>
                        </div>
                    </div>

                    <div className="lg:w-[30%] w-full justify-between lg:justify-normal flex lg:h-96 lg:bg-util p-3 rounded-3xl overflow-hidden">
                        <div className="w-[65%] lg:w-full">
                            <img src="/img/sakha3.jpg" alt="" className="w-full h-64 lg:h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-[30%] lg:hidden">
                            <img src="/img/sakha.jpg" alt="" className="w-full h-64 object-cover object-[-60px] md:object-center rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
