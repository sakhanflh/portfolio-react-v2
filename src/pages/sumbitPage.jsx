import { Link } from "react-router-dom"

export default function SumbitPage() {
    function handleClick(){
        window.location.href = "/"
    }
    return (
        <>
            <div className="bg-gradient-to-bl from-util to-gray-900 w-full h-dvh overflow-hidden text-white text-xl font-medium flex flex-col items-center justify-center relative">
                <div className="w-[35rem] h-[35rem] opacity-5 absolute">
                    <img src="/img/Senech-white.png" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-5">
                    <h1>Thanks for visiting my website🙌</h1>
                    <Link className="bg-span text-white text-xl rounded-2xl font-semibold p-5 flex items-center justify-center z-50" onClick={handleClick}>
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        </>
    )
}