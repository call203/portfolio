import { motion, useInView } from "framer-motion";
import Avatar from "../assets/Avatar.png";
import { Image } from "@chakra-ui/image";
import { useRef } from "react";
import DownImage from "../assets/Down.png";

function Home() {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: true });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7 }
    })
  };

  return (
    <div className="container mx-auto font-sans flex flex-col justify-center item-center h-[70vh] relative  text-center">
      <div className="">
        <div className="md:text-8xl text-5xl font-extrabold md:mb-4 mb-2">
          Hello, I'm
        </div>
        <div className="relative inline-block md:text-5xl text-2xl font-bold md:mb-4 mb-2 ">
          <span className="relative z-10">직관적이고 편리함을 추구하는</span>
          <span className="absolute left-0 bottom-0 w-full md:h-5 h-3 bg-yellow-300 opacity-70 rounded-sm z-0"></span>
        </div>
        <div className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          이소연 입니다
        </div>
        <div> Web & App Developer</div>
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center text-gray-400 font-bold animate-bounce">
        <p>Let's Scroll Down!</p>
        <img src={DownImage} alt="scroll down" className="w-7 h-7" />
      </div>

      {/* <div className="flex justify-center bg-red-300">
        <Image
          src={Avatar}
          alt="profile img"
          className="h-auto max-w-full w-4/12"
        />
      </div> */}
      {/* <div ref={motionRef}>
        <div className="flex justify-center lg:text-xl text-lg">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            Hello, I'm
          </motion.p>
        </div>
        <div className="flex justify-center font-oleo text-6xl mb-5">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
          >
            Soyeon Lee
          </motion.p>
        </div>
        <div className="justify-center  text-center font-bold mb-5 text-sm lg:text-lg">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
          >
            Web & App Developer
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            className="lg:w-1/3 w-2/4 lg:text-lg text-md font-normal text-center"
          >
            <span className="font-bold">
              직관적이고 편리함을 추구하는 앱 & 웹 개발자
            </span>
            입니다. 사용자와 개발자 모두에게 직관적이고 편리한 경험을 제공하는
            것을 목표로, 새로운 기술을 통해 문제를 더 쉽게 해결하는 방법을
            끊임없이 탐구하고 있습니다. 기본 지식부터 깊이 있는 기술까지 꾸준히
            학습니고, 책과 지식 공유 활동을 통해 전문성을 쌓아가며 발전을
            추구합니다.
          </motion.p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
