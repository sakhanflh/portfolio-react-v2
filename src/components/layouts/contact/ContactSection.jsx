import { ValidationError, useForm } from "@formspree/react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



export function ContactSection() {
    const [state, handleSubmit] = useForm("xgegwpeb");
    if (state.succeeded) {
        window.location.href = '/#/sumbit'
    }
    return (
        <>
            <div className="w-full flex flex-col gap-10 font-jost text-text">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-medium">Contact <span className="text-hover">Me</span></h1>
                    <p className="text-center">I'd love to hear from you! Whether you have a project in mind, need more information about my services, or just want to say hello, feel free to get in touch. Here are a few ways you can reach me.</p>
                </div>

                <div className="flex lg:justify-between flex-col lg:flex-row gap-10 lg:gap-0 ">
                    <div className="lg:w-[35%] w-full">
                        <div className="w-full flex flex-col gap-5">
                            <div className="flex items-center gap-1 bg-gradient-to-l from-util to-gray-900 py-3 px-5 rounded-xl">
                                <FaInstagram className="text-xl" />
                                <p className="text-lg">sakhanflh_</p>
                            </div>

                            <div className="flex items-center gap-1 bg-gradient-to-l from-util to-gray-900 py-3 px-5 rounded-xl">
                                <SiGmail className="text-xl" />
                                <p className="text-lg">sakhanaufal2@gmail.com</p>
                            </div>

                            <div className="flex items-center gap-1 bg-gradient-to-l from-util to-gray-900 py-3 px-5 rounded-xl">
                                <FaGithub className="text-xl" />
                                <p className="text-lg">sakhanflh</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[60%] w-full">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-8 w-full bg-gradient-to-bl from-util to-gray-900 p-5 rounded-xl">
                            {/* Fullname */}
                            <div className="flex justify-between items-center">
                                <label htmlFor="name">Name :</label>
                                <input type="text" name="name" id="name" className="w-56 lg:w-[80%] p-2 text-black rounded-sm" />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            {/* Fullname End */}
                            {/* Email */}
                            <div className="flex justify-between items-center">
                                <label htmlFor="email">Email :</label>
                                <input type="email" id="email" name="email" className="w-56 lg:w-[80%] p-2 text-black rounded-sm" />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            {/* Email End */}

                            <div className="flex justify-between items-center">
                                <label htmlFor="subject">Subject :</label>
                                <input type="text" name="subject" id="subject" className="w-56 lg:w-[80%]  p-2 text-black rounded-sm" />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                            </div>

                            {/* Message */}
                            <div className="flex justify-between items-center">
                                <label htmlFor="message">Message :</label>
                                <textarea id="message" name="message" className="w-56 lg:w-[80%] p-2 text-black rounded-sm" />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            {/* Message End */}
                            <button type="submit" disabled={state.submitting} className="w-full lg:px-52 hover:scale-95 hover:transition-all hover:duration-300 hover:ease-in-out">
                                <p className="bg-span font-semibold text-lg text-white  rounded-lg p-3">Submit</p>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}