import { motion } from "framer-motion";

interface SkillBoxProps {
  list?: Array<String>;
  title: string;
  content: string;
}

const box = {
  reset: { rotate: 0 },
  hover: { rotate: 8, transition: { duration: 0.3 } }
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
                  <div className="text-white px-2 py-1 text-xs font-semibold">
                    {i}
                  </div>
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
  return (
    <div className="container mx-auto font-sans">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl mb-16 text-center">Stack</h1>
      </div>
      <>
        <div className="flex font-sans justify-center">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <SkillBox
              // list={["JavaScript", "TypeScript", "HTML", "CSS", "Python"]}
              title="Mobile Applications"
              // content="Crafting seamless and intuitive mobile apps to deliver exceptional user experiences."

              content="React Natvie 그리고 여러 센서 기술들을 통해 쌓은 많은 경험이 있으며 사용자 경험 최적화에 중점을 두고 구현하려고 노력합니다."
            />
            <SkillBox
              // list={["JavaScript", "TypeScript", "HTML", "CSS", "Python"]}
              title="Web Applications"
              // content="Developing dynamic and user-friendly web experiences that captivate and engage"
              content="동적인고 사용하기 쉬운 웹 인터페이스를 구축하고, 깊은 인상을 남기는 웹 경험을 제공하는 것을 목표로 합니다."
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
                "NodeJS"
              ]}
              title="FrameWork"
              content="주로 React에 집중하며 최신 생태계 발전과 도구 활용에 열정을 가지고 있습니다. Redux, Hooks 등으리 주요 도구를 다루며 프레임워크의 최신 트렌드를 팔로우합니다."
              // content="Primarily focused on React, with a strong emphasis on the latest advancements in its ecosystem. Passionate about this tools it offers, including Redux, Hooks, and beyond"
            />
            <SkillBox
              list={["JavaScript", "TypeScript", "HTML", "CSS", "Python"]}
              title="Languages"
              content="주 언어는 TS/JS 이며, ReactJS에서 광범위한 경험을 가지고 있습니다. 빠르게 바뀌는 이 언어들의 개발동향을 팔로우하고 꾸준히 학습하고 있습니다."
              // content="TS/JS is my main languages, with extensive experience in ReactJS. I actively stay up-to-date with the lastest trends in these technologies"
            />
            <SkillBox
              list={["Linux", "Git", "MySQL", "Firebase", "Docker"]}
              title="Tools/Systems"
              // content="Experienced in or developing to advancing all listed skills with the goal of achieving mastery"
              content="나열된 모든 기술에서 지속적으로 숙련도를 높여가고 있으며, 깊이 있는 이해와 숙련도를 쌓아 궁극적으로 각 분야에서 마스터하는 것을 목표로 하고 있습니다."
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default AboutMe;
