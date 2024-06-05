import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



export function ContactSection() {
    return (
        <>
        <div className="w-full flex flex-col gap-5 font-jost text-text">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-3xl font-medium">Contact <span className="text-hover">Me</span></h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit.</p>
            </div>

            <div className="w-full">
                <div className="w-full flex flex-col gap-5">
                    <div className="flex items-center gap-1 bg-util py-3 px-5 rounded-xl">
                        <FaInstagram className="text-xl"/>
                        <p className="text-lg">sakhanflh_</p>
                    </div>
                    
                    <div className="flex items-center gap-1 bg-util py-3 px-5 rounded-xl">
                        <SiGmail className="text-xl"/>
                        <p className="text-lg">sakhanaufal2@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-1 bg-util py-3 px-5 rounded-xl">
                        <FaGithub className="text-xl"/>
                        <p className="text-lg">sakhanflh</p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}