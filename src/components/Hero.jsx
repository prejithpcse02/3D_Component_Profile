import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen relative mx-auto">
        <div className="sm:px-16 px-6 absolute inset-0 top-[140px] sm:top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-[40px] violet-gradient z-100" />
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ">
              Hi, I&apos;m <span className="text-[#915eff]">Prejith</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute xm:bottom-10 bottom-4 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[32px] h-[52px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-2 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
