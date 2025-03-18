import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";
const About = () => {
    return (
        
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden 
            bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="absolute inset-0 opacity-500">
                <HackerBackground />
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center 
            justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"M. Sathwika."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  
                    leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] 
                    md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Hey there! I’m a B.Tech student at CMR Institute of Technology with a passion for building web applications. I specialize in frontend development and have hands-on experience with JavaScript, Next.js, React.js, HTML, and CSS. I love creating beautiful, intuitive user interfaces and building full-stack applications from the ground up. I’m always eager to take on new challenges and learn new technologies along the way!"/>
                        <AnimatedBody
                            delay={0.1}
                            text="I’m passionate about building intuitive and efficient applications with clean, modern interfaces. I enjoy keeping up with the latest tech trends and experimenting with new tools. I love sharing my knowledge and working with others to create impactful solutions. I’m a fast learner and always ready to take on new challenges!"
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="I’m working on some exciting projects at the moment and look forward to sharing them soon. I’m always open to new opportunities and love teaming up on ideas that create a positive impact."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
