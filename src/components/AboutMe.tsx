import { Image } from "@chakra-ui/react";
import { useState } from "react";
import BlackAvatar from "../assets/BlackAvatar.png";

import { motion } from "framer-motion";

interface SkillBoxProps {
  list?: Array<String>;
  title: string;
  content: string;
}

const box = {
  reset: { rotate: 0 },
  hover: { rotate: 8, transition: { duration: 0.3 } },
};

const SkillBox = (datas: SkillBoxProps) => {
  return (
    <motion.div
      variants={box}
      initial="rest"
      whileHover="hover"
      className="flex flex-wrap border border-1 border-gray-300 rounded-xl p-6"
    >
      <div className="grid grid-col-2 w-52 text-start">
        <div className="font-semibold mb-14">{datas.title}</div>
        <div className="flex flex-col">
          <div className="pb-1 flex flex-row flex-wrap">
            {datas?.list?.map((i) => {
              return (
                <div className="rounded-full bg-gray-400 mr-1 mt-1">
                  <div className="text-white px-2 py-1 text-xs">{i}</div>
                </div>
              );
            })}
          </div>

          <div>
            <div className="text-slate-600 ">{datas.content}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function AboutMe() {
  const [toggle, setToggle] = useState(true);

  const handleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container mx-auto font-sans">
      <div className="flex justify-center">
        <button
          onClick={() => handleButton()}
          className={`mx-4 rounded-lg px-5 py-2 ${
            toggle
              ? "bg-black text-white"
              : "text-slate-400 bg-white  border border-slate-400"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => handleButton()}
          className={`mx-4 rounded-lg px-5 py-2 ${
            !toggle
              ? "bg-black text-white"
              : "text-slate-400 bg-white  border border-slate-400"
          }`}
        >
          Coding Skills
        </button>
      </div>

      {toggle ? (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.5, 0.2, 1.01],
            }}
            className="flex justify-center font-sans grid-cols-2 items-center lg:mt-5 mt-10"
          >
            <Image
              src={BlackAvatar}
              alt="profile img"
              className="h-auto max-w-full w-4/12 hidden lg:block"
            />
            <div className="lg:text-lg text-md text-center lg:text-start">
              I am always
              <span className="font-bold">
                {" "}
                seeking innovation and continually expanding my skill set,
              </span>
              spanning both front-end and back-end development. My focus is on
              identifying opportunities for
              <span className="font-bold">
                {" "}
                growth and crafting solutions that make a meaningful impact.{" "}
              </span>
              Beyond coding, I strive to understand the human elements that
              shape digital experiences. My dedication to delivering results
              goes hand-in-hand with
              <span className="font-bold">
                {" "}
                my passion for creating digital experiences that leave a lasting
                impact.
              </span>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <div className="flex font-sans justify-center mt-10">
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              <SkillBox
                // list={["JavaScript", "TypeScript", "HTML", "CSS", "Python"]}
                title="Mobile Applications"
                content="Crafting seamless and intuitive mobile apps to deliver exceptional user experiences."
              />
              <SkillBox
                // list={["JavaScript", "TypeScript", "HTML", "CSS", "Python"]}
                title="Web Applications"
                content="Developing dynamic and user-friendly web experiences that captivate and engage"
              />
            </div>
          </div>
          <div className="flex font-sans justify-center mt-10">
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <SkillBox
                list={[
                  "ReactJS",
                  "React Native",
                  " NextJS",
                  " NestJS",
                  "Spring",
                  "NodeJS",
                ]}
                title="FrameWork"
                content="Primarily focused on React, with a strong emphasis on the latest advancements in its ecosystem. Passionate about this tools it offers, including Redux, Hooks, and beyond"
              />
              <SkillBox
                list={["JavaScript", "TypeScript", "HTML", "CSS", "Python"]}
                title="Languages"
                content="TS/JS is my main languages, with extensive experience in ReactJS. I actively stay up-to-date with the lastest trends in these technologies"
              />
              <SkillBox
                list={["Linux", "Git", "MySQL", "Firebase", "Docker"]}
                title="Tools/Systems"
                content="Experienced in or developing to advancing all listed skills with the goal of achieving mastery"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutMe;
