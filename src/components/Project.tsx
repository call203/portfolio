import { Projects } from "../assets/data";
import { Image } from "@chakra-ui/react";
import LinkImage from "../assets/Link.png";

interface ProjectBoxProps {
  title: string;
  stack: string[];
  info: string[];
  site?: string | undefined;
  job: string;
  date: string;
}

const ProjectBox = ({
  title,
  stack,
  info,
  site,
  job,
  date
}: ProjectBoxProps) => {
  return (
    <div className="border border-1 border-gray-300 rounded-xl p-6 mx-5 hover:border-black hover:border-1 mb-10">
      <div className="mb-3 ">
        <h1 className="font-extrabold text-xl mb-1">{title}</h1>
        <div className="mb-1">{job}</div>
        <div className="mb-1">{date}</div>
        <div className="pb-1 flex flex-row flex-wrap">
          {stack.map((i) => {
            return (
              <div className="mt-1">
                <span className="md:text-sm text-xs px-3 py-1 bg-black text-white rounded-full font-semibold mr-1">
                  {i}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <ul className="list-disc mb-1 md:mb-5 pl-4 ">
        {info.map((i) => {
          return <li className="text-slate-600 mb-1 text-sm">{i}</li>;
        })}
      </ul>

      <div className="flex-row flex justify-end">
        {site && (
          <a className="flex justify-end items-center" href={site}>
            <span className="pr-2">More Info</span>
            <Image src={LinkImage} className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

function Project() {
  return (
    <div className="container mx-auto font-sans">
      <h1 className="font-bold text-2xl mb-16 text-center">Project</h1>
      <div className="">
        {Projects.map((item, index) => {
          return (
            <ProjectBox
              key={index}
              title={item.title}
              stack={item.stack}
              info={item.info}
              site={item.site}
              job={item.job}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Project;
