import { Button, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import BlackAvatar from '../assets/BlackAvatar.png'
import Cursor from '../assets/cursor.png'
import Html from '../assets/html.png'
import Servers from '../assets/servers.png'
import SmartPhone from '../assets/smartphone.png'
import WWW from '../assets/www.png'

interface SkillBoxProps {
  imgSrc: string
  title: string
  content: string
}

const SkillBox = (datas: SkillBoxProps) => {
  return (
    <div className="flex flex-wrap border border-1 border-gray-300 rounded-xl p-6">
      <div className="grid grid-col-2 w-52 text-start">
        <div className="mb-14">
          <Image src={datas.imgSrc} className="w-8" />
        </div>
        <div className="font-semibold mb-2">{datas.title}</div>
        <div className="text-slate-600 ">{datas.content}</div>
      </div>
    </div>
  )
}

function AboutMe() {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log(toggle)
  }, [toggle])

  const handleButton = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <button
          onClick={() => handleButton()}
          className={`mx-4 rounded-lg px-5 py-2 ${
            toggle
              ? 'bg-black text-white'
              : 'text-slate-400 bg-white  border border-slate-400'
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => handleButton()}
          className={`mx-4 rounded-lg px-5 py-2 ${
            !toggle
              ? 'bg-black text-white'
              : 'text-slate-400 bg-white  border border-slate-400'
          }`}
        >
          Coding Skills
        </button>
      </div>

      {toggle ? (
        <>
          <div className="flex justify-center font-sans grid-cols-2 items-center lg:mt-5 mt-10">
            <Image
              src={BlackAvatar}
              alt="profile img"
              className="h-auto max-w-full w-1/3 hidden lg:block"
            />
            <div>
              As a frontend developer, my expertise lies in creating seamless
              and intuitive user experiences. I specialize in using cutting-edge
              technologies to produce high-quality web applications.
              Specifically, I have vast knowledge of ReactJS and NodeJS, which
              allow me to build complex and dynamic applications with ease.
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex font-sans justify-center mt-10">
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              <SkillBox
                imgSrc={SmartPhone}
                title="Mobile Applications"
                content="Developing mobile apps with seamless user experiences."
              />
              <SkillBox
                imgSrc={Html}
                title="Skills"
                content="I have built complex apps before, and if you work with people who truly understand the app system"
              />
            </div>
          </div>
          <div className="flex font-sans justify-center mt-10">
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <SkillBox
                imgSrc={Cursor}
                title="Frontend Development"
                content="I bring ideas to life in the browser, coding from scratch."
              />
              <SkillBox
                imgSrc={Servers}
                title="Backend Development"
                content="Building powerful server-side systems, coding from scratch."
              />
              <SkillBox
                imgSrc={WWW}
                title="Web Applications"
                content="Creating dynamic and intuitive web experiences."
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AboutMe
