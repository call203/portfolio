import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Myself from "../../assets/Me.png";
import { Contact } from "./Contact";

export const AboutMe = () => {
  const motionRef = useRef(null);
  const isInView = useInView(motionRef, { once: false });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5 }
    })
  };

  return (
    <div className="container mx-auto font-sans flex flex-col md:flex-row text-zinc-500 ">
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
        <div>
          <div className="flex">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="font-normal md:mb-6 mb-5 relative inline-block"
            >
              <span className="relative z-10 font-black">About Soyeon </span>
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
              <div>
                안녕하세요!{" "}
                <span className="font-bold">앱 & 웹 개발자 이소연입니다.</span>
              </div>
            </motion.p>
          </div>
          <div className="flex">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="font-semibold mb-2 bg-orange-100  text-orange-600 "
            >
              ✨ 저는 이런 사람이에요.
            </motion.p>
          </div>

          <div className="flex text-base">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="font-normal md:mb-6 mb-5"
            >
              <ul className="list-disc pl-4">
                <li className="pb-1">
                  <span className="font-bold">
                    자연스럽게 이어지는 코드와 이해하기 쉬운 코드
                  </span>
                  를 작성하는 것을 중요하게 생각합니다.
                </li>
                <li className="pb-1">
                  <span className="font-bold">전 세계 다양한 개발 경험</span>을
                  가진 동료들과 함께 프로젝트를 진행하며,{" "}
                  <span className="font-bold">한 언어에 대해 깊이 연구</span>한
                  경험이 있습니다.
                </li>
                <li className="pb-1">
                  두 개의 React Native 기반 애플리케이션에서{" "}
                  <span className="font-bold">
                    초기 환경 세팅부터 주요 기능 개발까지 리드
                  </span>
                  한 경험이 있습니다.
                </li>
                <li className="pb-1">
                  <span className="font-extrabold">
                    Next.js, React-query, Jest, Zustand{" "}
                  </span>
                  등 최신 프론트엔드 기술을 팔로우하며 지속적으로 성장하고
                  있습니다.
                </li>
                <li>
                  알게된 새로운 내용을 블로그에 기록해{" "}
                  <span className="font-bold">다양한 사람들과 지식을 공유</span>
                  하는 것을 즐깁니다.
                </li>
              </ul>
            </motion.p>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};
