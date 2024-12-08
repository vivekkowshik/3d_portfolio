import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,

    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "python Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

let edu;
const experiences = [
    {
        title: "Full stack Developer ",
        company_name: "EduVersity",
        icon:"data:image/png;base64,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",
        iconBg: "#E6DEDD",
        date: "March 2020 - April 2021",
        points: [
            "Developed and maintained web applications using React.js and related technologies, improving overall application performance and user experience.",
            "Collaborated with cross-functional teams, including designers, product managers, and developers, to create high-quality, user-centered products.",
            "Implemented responsive designs and ensured cross-browser compatibility, resulting in a seamless experience across all devices.",
            "Participated in code reviews and provided constructive feedback, fostering a collaborative development environment and improving code quality."
        ],
    },
    {
        title: "full stack developer (intern)",
        company_name: "Wipro",
        icon:"https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1720244494",

        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Gained hands-on experience in software development and engineering, contributing to the development and enhancement of Wipro’s web applications.",
            "Collaborated with a team of professionals to design, implement, and test innovative solutions for clients, improving system efficiency and performance.",
            "Participated in technical workshops and training sessions to enhance understanding of software development processes, frameworks, and tools.",
            "Assisted in debugging and troubleshooting code, while learning best practices in software development and project management methodologies."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Softis Internet Services",
        icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzs43iH9pM1gtTuIEVHVntO4La75LvOvoHw&s",

        iconBg: "#E6DEDD",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer (Event Ease)",
        company_name: "SRM",
        icon:"https://vectorlogoseek.com/wp-content/uploads/2019/03/srm-institute-of-science-and-technology-vector-logo.png",

        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developed a comprehensive event management system that simplifies event creation, registration, and ticket booking for both organizers and attendees.",
            "Integrated Stripe payment gateway for seamless ticket booking and automated email notifications, enhancing the user experience.",
            "Designed with a microservice architecture for scalability and flexibility, offering intuitive dashboards for users, admins, and developers."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "EventEase",
        description: "A comprehensive event management platform that allows organizers to create, register, and manage events, providing a seamless and efficient experience for both organizers and attendees.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image:"https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/mP4Qa0BP2nfWLD6E/event-mp8959e63VfPzpLp.png",
        source_code_link: "https://github.com/",
    },
    {
        name: "WinCamPrivacy | Python, Windows PowerShell",
        description:
            "A security solution for camera access on Windows systems, designed to enhance data protection and streamline tasks using Python and PowerShell scripts.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "powershell",
                color: "green-text-gradient",
            },
            {
                name: "windows",
                color: "pink-text-gradient",
            },
        ],
        image: "https://t3.ftcdn.net/jpg/02/58/25/04/360_F_258250464_WAvKdi20dj9W84Ixx52y3C5fdqdipvUC.jpg",
        source_code_link: "https://github.com/",
    },

    {
        name: "YouTube Transcript to Detail Notes Converter ",
        description:
            "A Python-based web application that converts YouTube video transcripts into detailed notes using Google Generative AI, streamlining content summarization.",
        tags: [
            {
                name: "streamlit",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "google-ai",
                color: "pink-text-gradient",
            },
        ],
        image:"https://www.scriptbyai.com/wp-content/uploads/2024/01/YouTube-Transcript-AI.webp",

        source_code_link: "https://github.com/",
    }

];

export { services, technologies, experiences, testimonials, projects };