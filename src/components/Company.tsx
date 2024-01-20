import { useEffect, useState } from 'react'
import { Experiences } from '../assets/data'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

interface ExperiencesProps {
  title?: string
  name: string
  date: string
  detail: string[]
}

const CustomDot = ({ onMove, index, active, onClick }: any) => {
  useEffect(() => {
    console.log(active)
    console.log(index)
  }, [active, index])
  return (
    <div
      className={`w-44 h-1.5 ${
        active ? 'bg-black' : 'bg-white border border-shadow'
      }`}
      onClick={() => onClick()}
    >
      {'   '}
    </div>
  )
}

const Experience = ({ name, date, detail }: ExperiencesProps) => {
  return (
    <div>
      <div className="font-bold text-lg mb-1">{name}</div>
      <div className="font-light mb-6">{date}</div>
      <div>
        {detail.map((info, index) => {
          return (
            <p className="pb-2 text-md" key={index}>
              {info}
            </p>
          )
        })}
      </div>
    </div>
  )
}

function Company() {
  const [companyIdx, setCompanyIdx] = useState(0)

  return (
    <div className="container">
      <h1 className="font-bold text-2xl mb-16 text-center">Companies</h1>
      <div className="hidden lg:flex flex-row">
        <div className="flex flex-row">
          <div className="flex-col">
            {Experiences.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`py-3 w-40 mr-28 flex-col border-l-4  ${
                    companyIdx === index
                      ? 'border-black font-bold'
                      : 'border-gray-300'
                  } hover:font-bold`}
                  onClick={() => {
                    setCompanyIdx(index)
                  }}
                >
                  <div className="text-left ml-3 text-lg">{item.title}</div>
                </div>
              )
            })}
          </div>
          <div>
            <Experience
              name={Experiences[companyIdx].name}
              date={Experiences[companyIdx].date}
              detail={Experiences[companyIdx].detail}
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        {/* Mobile */}
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
          customDot={<CustomDot />}
          showDots
          removeArrowOnDeviceType={['tablet', 'mobile']}
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
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
              items: 1,
            },
          }}
        >
          {Experiences.map((item, index) => {
            return (
              <Experience
                name={item.name}
                date={item.date}
                detail={item.detail}
                key={index}
              />
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Company
