import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";

export type CertificationProps = {
    id: number;
    name: string;
    image: string;
    link: string;
};

const CertificationCard: React.FC<CertificationProps> = ({
    id,
    name,
    image,
    link
}) => {
    return (
        <motion.div
            className="relative w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <motion.div
                className="relative z-10 h-[400px] w-full"
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
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View certificate for ${name}`}
                    >
                        <Image
                            src={image}
                            alt={name}
                            width={500} // Define width for static export compatibility
                            height={300} // Define height for static export compatibility
                            className="rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                            priority={true}
                        />
                    </Link>

                    <div
                        className={`absolute text-white bottom-4 w-full flex justify-center`}
                    >
                    </div>
                </Container>
            </motion.div>
        </motion.div>
    );
};

export default CertificationCard;
