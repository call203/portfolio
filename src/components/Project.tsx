import Carousel from 'react-multi-carousel'
import { Projects } from '../assets/data'
import Git from '../assets/Github_black.png'
import { Image } from '@chakra-ui/react'
import Link from '../assets/Link.png'

interface ProjectBoxProps {
  title: string
  short: string
  info: string
  git?: string
  site?: string
}

const ProjectBox = ({ title, short, info, git, site }: ProjectBoxProps) => {
  return (
    <div className="border border-1 border-gray-300 rounded-xl p-6 mx-5 hover:border-black hover:border-2">
      <div className="mb-3">
        <h1 className="font-extrabold text-xl mb-2">{title}</h1>
        <div className="text-sm mb-8">{short}</div>
      </div>

      <div className="text-slate-600 mb-5">{info}</div>
      <div className="flex flex-row justify-start">
        {git && (
          <a href={git}>
            <Image src={Git} className="w-6" />
          </a>
        )}
        {site && (
          <a href={site}>
            <Image src={Link} className="w-6" />
          </a>
        )}
      </div>
    </div>
  )
}

function Project() {
  return (
    <div className="container mx-auto font-sans">
      <h1 className="font-bold text-2xl mb-16 text-center">Project</h1>
      <Carousel
        className="pb-10"
        additionalTransfrom={0}
        containerClass="container"
        draggable
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        showDots
        slidesToSlide={1}
        swipeable
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
        }}
      >
        {Projects.map((item, index) => {
          return (
            <ProjectBox
              key={index}
              title={item.title}
              short={item.short}
              info={item.info}
              git={item.git}
              site={item.site}
            />
          )
        })}
      </Carousel>
    </div>
  )
}
export default Project
