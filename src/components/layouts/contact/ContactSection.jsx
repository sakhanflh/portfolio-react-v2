import { ValidationError, useForm } from "@formspree/react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";



export function ContactSection() {
    const [state, handleSubmit] = useForm("xgegwpeb");
    if (state.succeeded) {
        window.location.href = '/#/sumbit'
    }

    const handleGithub = () => {
        window.location.href = 'https://github.com/sakhanflh'
    }
    const handleInstagram = () => {
        window.location.href = 'https://www.instagram.com/sakhanflh?igsh=MWx0a2pucWZ6b2E4eg=='
    }
    const handleEmail = () => {
        window.location.href = 'mailto:sakhanaufal2@gmail.com'
    }

    const handleDiscord = () => {
        window.location.href = 'https://discord.gg/wXsRHUsP'
    }
    return (
        <>
            <div className="w-full flex flex-col gap-10 font-jost text-text">
                <div className="flex lg:justify-between gap-10 lg:gap-0 ">
                    <div className="w-full xl:w-1/2 flex flex-col justify-between">
                        <p className="text-3xl xl:w-96 xl:pt-5">Let's <span className="text-hover">build</span> an awesome <span className="text-hover">project</span> together!</p>

                        <div className="flex gap-5">
                            <div className="flex flex-col items-center" onClick={handleGithub}>
                                <FaGithub className="text-2xl group-hover:text-hover" />
                                <p>GitHub</p>
                            </div>
                            <div
                                className="flex flex-col items-center group cursor-pointer"
                                onClick={handleInstagram}
                            >
                                <FaInstagram className="text-2xl group-hover:text-hover" />
                                <p className="group-hover:text-hover">Instagram</p>
                            </div>

                            <div className="flex flex-col items-center" onClick={handleEmail}>
                                <SiGmail className="text-2xl" />
                                <p>Email</p>
                            </div>
                            <div className="flex flex-col items-center" onClick={handleDiscord}>
                                <FaDiscord className="text-2xl" />
                                <p>Discord</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                        <form onSubmit={handleSubmit} className="flex flex-wrap gap-5 lg:gap-5 w-full bg-gradient-to-bl from-util to-gray-900 p-5 rounded-xl justify-between">
                            <h1 className="w-full text-2xl">Get in touch.</h1>
                            {/* Fullname */}
                            <div className="flex flex-col w-[47%]">
                                <label htmlFor="name">Name :</label>
                                <input type="text" name="name" id="name" className="w-56 lg:w-full p-1 text-black rounded-md" />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            {/* Fullname End */}

                            {/* Email */}
                            <div className="flex flex-col w-[47%]">
                                <label htmlFor="email">Email :</label>
                                <input type="email" id="email" name="email" className="w-56 lg:w-full p-1 text-black rounded-md" />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            {/* Email End */}

                            {/* Subject */}
                            <div className="flex flex-col w-[47%]">
                                <label htmlFor="subject">Subject :</label>
                                <input type="text" name="subject" id="subject" className="w-56 lg:w-full  p-1 text-black rounded-md" />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                            </div>
                            {/* Subject End */}

                            {/* Company Name */}
                            <div className="flex flex-col w-[47%]">
                                <label htmlFor="company">Company Name :</label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    className="w-56 lg:w-full p-1 text-black rounded-md"
                                />
                                <ValidationError prefix="Company" field="company" errors={state.errors} />
                            </div>
                            {/* Company Name End */}

                            {/* Message */}
                            <div className="flex flex-col w-full">
                                <label htmlFor="message">Message :</label>
                                <textarea id="message" name="message" className="w-56 lg:w-full p-2 h-32 text-black rounded-md" />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            {/* Message End */}

                            <div className="w-full flex justify-end">
                                <button type="submit" disabled={state.submitting} className="w-40 bg-span font-semibold text-lg text-white hover:scale-95 hover:transition-all hover:duration-300 hover:ease-in-out rounded-lg p-2">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}