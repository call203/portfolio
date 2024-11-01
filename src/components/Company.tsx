import { useState } from "react";
import { Experiences } from "../assets/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ExperiencesProps {
  title?: string;
  name: string;
  date: string;
  job: string[];
  about: string;
  detail: {
    title: string;
    info: string;
  }[];
}

const CustomDot = ({ onMove, index, active, onClick }: any) => {
  return (
    <div
      className={`w-44 h-1.5 ${
        active ? "bg-black" : "bg-white border border-shadow"
      }`}
      onClick={() => onClick()}
    >
      {"   "}
    </div>
  );
};

const Experience = ({ name, date, detail, job, about }: ExperiencesProps) => {
  return (
    <div>
      <div className="font-bold text-lg mb-1">{name}</div>
      <div className="text-sm font-base mb-1">{about}</div>
      <div className="font-light mb-1">{date}</div>
      <div className="pb-4 flex flex-row flex-wrap">
        {job.map((i) => {
          return (
            <div className="mt-2">
              <span className="text-sm px-3 py-1 bg-black text-white rounded-full font-semibold mr-2">
                {i}
              </span>
            </div>
          );
        })}
      </div>
      <div>
        {detail.map((info, index) => {
          return (
            <div>
              <p className="pb-1 text-md font-bold" key={index}>
                {info.title}
              </p>
              <p className="pb-3 text-sm font-base" key={index}>
                {info.info}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Company() {
  const [companyIdx, setCompanyIdx] = useState(0);

  return (
    <div className="container font-sans">
      <h1 className="font-bold text-2xl mb-16 text-center">Experience</h1>
      <div className="hidden lg:flex flex-row">
        <div className="flex flex-row">
          <div className="flex-col">
            {Experiences.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`py-3 w-40 mr-28 flex-col border-l-4  ${
                    companyIdx === index
                      ? "border-black font-bold"
                      : "border-gray-300"
                  } hover:font-bold`}
                  onClick={() => {
                    setCompanyIdx(index);
                  }}
                >
                  <div className="text-left ml-3 text-lg">{item.title}</div>
                </div>
              );
            })}
          </div>
          <div>
            <Experience
              name={Experiences[companyIdx].name}
              date={Experiences[companyIdx].date}
              job={Experiences[companyIdx].job}
              detail={Experiences[companyIdx].detail}
              about={Experiences[companyIdx].about}
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          slidesToSlide={1}
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
        >
          {Experiences.map((item, index) => {
            return (
              <Experience
                name={item.name}
                date={item.date}
                detail={item.detail}
                job={item.job}
                about={item.about}
                key={index}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Company;
