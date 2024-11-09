import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Myself from "../assets/Me.png";

export const About = () => {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: false });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.7 }
    })
  };
  return (
    <div className="container mx-auto font-sans h-[110vh] md:h-[40vh]  flex flex-col md:flex-row text-zinc-500">
      <div className="items-center flex-[0.5] md:flex-[0.7] justify-center p-10 content-center flex ">
        <img
          src={Myself}
          alt="profile img"
          className="max-w-full max-h-[270px] lg:max-h-[500px] rounded-3xl "
        />
      </div>
      <div
        className="flex-[1.5] md:flex-[1.3] md:text-lg text-base flex flex-col md:justify-center"
        ref={motionRef}
      >
        <div className="flex">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="font-normal md:mb-6 mb-5 relative inline-block"
          >
            <span className="relative z-10 font-black">About Soyeon</span>
            <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 opacity-70 rounded-sm z-0"></span>
          </motion.p>
        </div>
        <div className="flex">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="font-normal md:mb-6 mb-5"
          >
            <p>
              안녕하세요!{" "}
              <span className="font-bold">
                직관적이고 편리함을 추구하는 앱 & 웹 개발자 입니다.
              </span>
            </p>
          </motion.p>
        </div>
        <div className="flex">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="font-normal md:mb-6 mb-5"
          >
            사용자와 개발자 모두에게 직관적이고 편리한 경험을 제공하는 것을
            목표로, 새로운 기술을 통해 문제를 더 쉽게 해결하는 방법을 끊임없이
            탐구하고 있습니다.
          </motion.p>
        </div>

        <div className="flex">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="font-normal md:mb-6 mb-5"
          >
            기본 지식부터 깊이 있는 기술까지 꾸준히 학습니고, 책과 지식 공유
            활동을 통해 전문성을 쌓아가며 발전을 추구합니다.
          </motion.p>
        </div>
        <div className="flex">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="font-normal md:mb-6 mb-5"
          >
            프로젝트 목표 달성을 위해 다양한 직군과 원활히 협업하며, 멋지고
            즐거운 서비스를 만드는데 관심이 많습니다.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
