"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(window.location.origin + '/', '').split('#')[1];
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    return (
        <nav className="nowrap fixed top-5 left-0 right-0 z-50 my-4 mx-auto flex items-center 
        justify-center gap-4 px-4 py-2 text-[#e4ded7] sm:w-[450px] md:w-[600px] lg:w-[800px]">
            <Container
                width="100%"
                height="60px"
                color="rgba(255, 255, 255, 0.1)"
                borderRadius={12}
                top="0px"
                left="10px"
                angle={0}
            >
                <div className="flex items-center justify-center gap-5">
                    {[
                        { label: "HOME", href: "#home" },
                        { label: "ABOUT", href: "#about" },
                        { label: "EDUCATION", href: "#education" },
                        { label: "WORK", href: "#work" },
                        { label: "CERTIFICATES", href: "#certifications" },
                        { label: "CONTACT", href: "#contact" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            data-blobity-magnetic="false"
                            onClick={handleScroll}
                            aria-label={`Scroll to ${link.label} Section`}
                        >
                            <h4 className="py-3 px-4 text-[14px] sm:text-[16px] md:text-[18px] 
                            hover:bg-[#ffffff20] rounded-lg transition-all duration-300 cursor-pointer">
                                {link.label}
                            </h4>
                        </Link>
                    ))}
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
