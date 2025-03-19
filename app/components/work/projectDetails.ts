import {
    SiFramer,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "The Doctor and Patient Appointment System",
        description:
            " Developed a Doctor-Patient Appointment System with secure authentication, enabling patients to book, manage, and track appointments.Utilized HTML, CSS, and JavaScript, for efficient scheduling, notifications, and data management.Enhanced functionality with appointment reminders and admin controls for improved efficiency and security.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/prashanthkallurii/Doctor-Patient-Appointment-System",
        demo: "https://example1.app/",
        image: "/projects/Doctor-and-Patient-Appointment-System.png",
        available: true,
    },
    // {
    //     id: 1,
    //     name: "project2",
    //     description:
    //         "_",
    //     technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    //     techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    //     techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
    //     github: "https://github.com/22r01a0534",
    //     demo: "https://example2.app/",
    //     image: "public/projects/project2.png",
    //     available: true,
    // },
];
