import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";


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
        "desc": "Lorem lorem lroem laodkmawodmao mdaowdmoa wmdoawmdaod aomdaw awd awd awdaw dawd awd awd awd awdawdawdawdad awdawdawdawdawd awdawdawdaw",
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
        "desc": "Lorem lorem lroem laodkmawodmao mdaowdmoa wmdoawmdaod aomdaw awd awd awdaw dawd awd awd awd awdawdawdawdad awdawdawdawdawd awdawdawdaw",
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
        "desc": "Lorem lorem lroem laodkmawodmao mdaowdmoa wmdoawmdaod aomdaw awd awd awdaw dawd awd awd awd awdawdawdawdad awdawdawdawdawd awdawdawdaw",
        "preview": 3,
        "repo": "https://github.com/bryanberlandro/josha-coffe.git",
    },
]