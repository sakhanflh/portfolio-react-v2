import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";



export const ProjectsData = [
    {
        "id": 1,
        "title": "My Portfolio Website",
        "tech": [
            {
                "id": 1,
                "title": "React",
                "icon": <FaReact className="text-hover"/>,
            },
            {
                "id": 2,
                "title": "Tailwind",
                "icon": <RiTailwindCssFill className="text-hover"/>,
            },
        ],
        "image": "/img/Macbook-Air-localhost.png",
        "url": "portfoliosakha.vercel.app",
        "desc": "This website is a representation of my dedication and passion for front-end development. I hope you enjoy exploring my portfolio and find inspiration in my work. Thank you for visiting!",
        "preview": 1,
        "repo": "https://github.com/sakhanflh/portfolio-react-v2.git",
    },
    {
        "id": 2,
        "title": "Sales Hyundai",
        "tech": [
            {
                "id": 1,
                "title": "React",
                "icon": <FaReact className="text-hover"/>,
            },
            {
                "id": 2,
                "title": "Tailwind",
                "icon": <RiTailwindCssFill className="text-hover"/>,
            },
        ],
        "image": "/img/Macbook-Air-hyundai-sales.vercel.app.png",
        "url": "https://showroomhyundaicibubur.com/",
        "desc": "I created this website using React and Tailwind, and got an SEO score of 100, so it can help increase car sales from these sales.",
        "preview": 2,
        "repo": "https://github.com/sakhanflh/hyundai-sales.git",
    },
    {
        "id": 3,
        "title": "Josha Coffee",
        "tech": [
            {
                "id": 1,
                "title": "Html",
                "icon": <FaHtml5 className="text-orange-600"/>,
            },
            {
                "id": 2,
                "title": "Css",
                "icon": <FaCss3 className="text-hover"/>,
            },
            {
                "id": 3,
                "title": "JavaScript",
                "icon": <IoLogoJavascript className="text-yellow-400"/>,
            },
        ],
        "image": "/img/Macbook-Air-josha-coffe.vercel.app.png",
        "url": "https://josha-coffe.vercel.app/",
        "desc": "Josha coffee is my first collaborative project as a college assignment, using vanilla JavaScript. I got the best grades in the advanced web programming course.",
        "preview": 3,
        "repo": "https://github.com/bryanberlandro/josha-coffe.git",
    },
    {
        "id": 4,
        "title": "Senech Construction",
        "tech": [
            {
                "id": 1,
                "title": "Html",
                "icon": <FaHtml5 className="text-orange-600"/>,
            },
            {
                "id": 2,
                "title": "Css",
                "icon": <FaCss3 className="text-hover"/>,
            },
            {
                "id": 3,
                "title": "JavaScript",
                "icon": <IoLogoJavascript className="text-yellow-400"/>,
            },
        ],
        "image": "/img/Macbook-Air-senech-construction.vercel.app.png",
        "url": "https://senech-construction.vercel.app/",
        "desc": "Senech Contruction is a website about construction created using Vanilla JavaScript, with a minimalist and responsive appearance.",
        "preview": 4,
        "repo": "https://github.com/sakhanflh/senech-construction.git",
    },
    {
        "id": 5,
        "title": "Buildong",
        "tech": [
            {
                "id": 1,
                "title": "React",
                "icon": <FaReact className="text-hover"/>,
            },
            {
                "id": 2,
                "title": "Tailwind",
                "icon": <RiTailwindCssFill className="text-hover"/>,
            },
            {
                "id": 3,
                "title": "Express JS",
                "icon": <SiExpress className="text-black"/>,
            },
            {
                "id": 4,
                "title": "MongoDB",
                "icon": <SiMongodb className="text-green-600"/>,
            },
            {
                "id": 5,
                "title": "Node JS",
                "icon": <SiNodedotjs className="text-green-600"/>,
            }
        ],
        "image": "/img/Macbook-Air-buildong-pi.vercel.app.png",
        "url": "https://buildong-pi.vercel.app/",
        "desc": "Buildong is a website about E Commerce and also construction services, which is my collaborative task, using Mern (ManggoDB, ExpressJS, React, NodeJS).",
        "preview": 5,
        "repo": "https://github.com/sakhanflh/buildong.git",
    },
]