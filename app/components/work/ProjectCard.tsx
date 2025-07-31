import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/legacy/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

// ===== Exact Official Brand Colors =====
const techColors: Record<string, string> = {
    React: "#61DAFB",
    "Next.js": "#000000",
    Python: "#3776AB",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    Tailwind: "#38BDF8",
    HTML: "#E34F26",
    CSS: "#1572B6",
    Node: "#339933",
    MongoDB: "#47A248",
    Git: "#F05032",
    Express: "#000000",
    Redux: "#764ABC",
    Sass: "#CC6699",
    Bootstrap: "#7952B3",
    Firebase: "#FFCA28",
    GraphQL: "#E10098",
    Docker: "#2496ED",
    AWS: "#FF9900",
    Azure: "#0078D4",
    Vite: "#646CFF"
};

const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    techNames,
    techLinks,
    github,
    demo,
    image,
    available,
}: ProjectProps) => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <motion.div
                className={`relative bg-cover bg-no-repeat bg-center z-10 h-full w-full 
                items-stretch justify-center py-0 sm:h-[850px] sm:w-[100%] md:h-[750px] 
                md:w-[100%] lg:h-[650px] lg:w-[100%]`}
            >
                <Container
                    width="100%"
                    height="100%"
                    borderRadius={25}
                    color="rgba(255, 255, 255, 0.1)"
                    blur={false}
                    grain={true}
                    top="0px"
                    left="0px"
                    angle={0}
                >
                    {/* Project Image */}
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                            src={image || '/images/default.png'}
                            alt={name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                            priority={true}
                        />
                    </div>

                    {/* GitHub & Demo Buttons */}
                    <div
                        className={`absolute top-0 text-[#0E1016] ${id % 2 === 0 ?
                            "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
                        } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
                    >
                        {available ? (
                            <>
                                <Link
                                    href={github}
                                    target="_blank"
                                    aria-label="Open GitHub Repository"
                                    className="rounded-full w-[43px] bg-white p-3 md:p-5 
                                    text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                    data-blobity
                                    data-blobity-radius="35"
                                    data-blobity-offset-x="4"
                                    data-blobity-offset-y="4"
                                    data-blobity-magnetic="false">
                                    <SiGithub />
                                </Link>
                                <Link
                                    href={demo}
                                    target="_blank"
                                    aria-label="Open Live Demo"
                                    className="w-[43px] rounded-full bg-white p-3 md:p-5 
                                    text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                    data-blobity
                                    data-blobity-radius="35"
                                    data-blobity-offset-x="4"
                                    data-blobity-offset-y="4"
                                    data-blobity-magnetic="false">
                                    <BsLink45Deg />
                                </Link>
                            </>
                        ) : (
                            <div></div>
                        )}
                    </div>

                    {/* Title & Description */}
                    <div
                        className={`absolute text-white ${!(id % 2 === 0)
                            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60 lg:mr-4"
                            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
                        } mb-10 md:mb-16 lg:mb-14`}
                    >
                        <AnimatedTitle
                            text={name}
                            className={
                                "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"-mr-[0.01em]"}
                        />
                        <AnimatedBody
                            text={description}
                            className={
                                "mt-4 w-[90%] max-w-[457px] text-[16px] font-bold text-white "
                            }
                        />
                    </div>

                    {/* Tech Icons at Bottom - Exact Colors */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-6">
                        {technologies.map((IconComponent, idx) => {
                            const color = techColors[techNames[idx]] || "white";
                            return (
                                <div key={idx} className="relative">
                                    <Link
                                        href={techLinks[idx]}
                                        target="_blank"
                                        aria-label={`Learn more about ${techNames[idx]}`}
                                        className="transition-transform hover:scale-125"
                                        title={techLinks[idx]}
                                        data-blobity-tooltip={techNames[idx]}
                                        data-blobity-magnetic="false"
                                    >
                                        <div
                                            style={{
                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                borderRadius: "50%",
                                                padding: "10px",
                                                boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                                                transition: "0.3s ease"
                                            }}
                                            className="hover:brightness-110"
                                        >
                                            <IconComponent
                                                style={{ color }}
                                                className="text-[28px] md:text-[32px] lg:text-[36px]"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
