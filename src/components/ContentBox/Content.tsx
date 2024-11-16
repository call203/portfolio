import RelativeLinks from "../../assets/Link.png";
import Check from "../../assets/Check.png";
import { TitleProps } from "../../utils/types";

export const Content = ({
  title,
  subtitle,
  date,
  jobs,
  links,
  about
}: TitleProps) => {
  return (
    <div className="font-sans mb-20" id={title}>
      <div>
        <div className="text-xl md:text-2xl mb-3">{subtitle}</div>
        <div className="text-2xl md:text-4xl mb-1 font-extrabold">{title}</div>
        <div className="md:text-base text-sm mb-3">{date}</div>
        {about && <div className="mb-3">{about}</div>}
        <div className="dot mb-5">
          <ul className="text-xl list-disc">
            {jobs.map((job, index) => {
              return (
                <li className="mb-2 flex flex-row" key={index}>
                  <img
                    src={Check}
                    alt="relative_link"
                    className="h-8 w-8 mr-2"
                  />
                  <div>
                    <span className="text-lg md:text-xl ">{job.title}</span>

                    <ul className="list-disc list-inside mt-2">
                      {job.detail &&
                        job.detail.map((i, index) => {
                          return (
                            <li
                              key={index}
                              className="md:text-base text-sm mb-2 "
                            >
                              {i}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {links && links.length > 0 && (
          <>
            <div className="font-bold text-2xl mb-3 flex flex-row">
              <img
                src={RelativeLinks}
                alt="relative_link"
                className="h-8 w-8 mr-2"
              />
              <span>관련링크</span>
            </div>
            <ul className="text-xl list-disc ">
              {links.map((link, index) => {
                return (
                  <li key={index} className="mb-1 flex flex-row ">
                    <img
                      src={Check}
                      alt="relative_link"
                      className="h-8 w-8 mr-2"
                    />
                    <a
                      href={link.link}
                      className="border-b-2 border-zinc-500 hover:text-yellow-400 hover:font-extrabold hover:border-yellow-400"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
