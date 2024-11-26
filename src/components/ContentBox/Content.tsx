import RelativeLinks from "../../assets/Link.png";
import Check from "../../assets/Check.png";
import { TitleProps } from "../../utils/types";
import { useEffect } from "react";
import { useInViewWithRef } from "../../store/useInView";
import { useViewStore } from "../../store/viewStore";

export const Content = ({
  title,
  subtitle,
  date,
  jobs,
  links,
  about,
  skills,
  navTitle
}: TitleProps & {
  navTitle: string;
  index: number;
}) => {
  const { viewRef, isInView } = useInViewWithRef();

  const { setSection } = useViewStore();

  useEffect(() => {
    if (isInView) {
      setSection(navTitle);
    }
  }, [isInView, title, navTitle, setSection]);

  return (
    <div className="font-sans mb-20" id={navTitle} ref={viewRef}>
      <div>
        <div className="text-xl md:text-2xl mb-3">{subtitle}</div>
        <div className="text-2xl md:text-4xl mb-1 font-extrabold">{title}</div>
        <div className="md:text-base text-sm mb-3">{date}</div>
        {about && <div className="mb-3">{about}</div>}

        <div className="flex flex-row mb-3 flex-wrap">
          {skills &&
            skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="py-1 px-2 bg-zinc-300 rounded-lg text-black text-xs mr-2 font-semibold mt-1"
                >
                  <span>{skill}</span>
                </div>
              );
            })}
        </div>

        <div className="dot mb-5">
          <ul className="text-xl list-disc">
            {jobs &&
              jobs.map((job, index) => {
                return (
                  <li className="mb-2 flex flex-row" key={index}>
                    <img
                      src={Check}
                      alt="relative_link"
                      className="h-8 w-8 mr-2"
                    />
                    <div>
                      <span className="text-lg md:text-xl ">{job.title}</span>

                      <ul className="list-disc mt-2">
                        {job.detail &&
                          job.detail.map((i, index) => {
                            return (
                              <div key={index}>
                                <li className="md:text-base text-sm md:mb-3 mb-1 font-semibold list-disc">
                                  {i.title}
                                  <ul
                                    className="pl-5 list-disc list-outside ml-4 font-normal"
                                    style={{ listStyleType: "circle" }}
                                  >
                                    {i.moreDetail &&
                                      i.moreDetail.map(
                                        (detail, detailIndex) => {
                                          return (
                                            <li
                                              className="mb-1"
                                              key={detailIndex}
                                            >
                                              {detail}
                                            </li>
                                          );
                                        }
                                      )}
                                  </ul>
                                </li>
                              </div>
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
            <div className="font-bold md:text-2xl text-xl mb-3 flex flex-row">
              <img
                src={RelativeLinks}
                alt="relative_link"
                className="h-8 w-8 mr-2"
              />
              <span>관련링크</span>
            </div>
            <ul className="md:text-xl text-base list-disc">
              {links.map((link, index) => {
                return (
                  <li key={index} className="mb-1 flex flex-row">
                    <img
                      src={Check}
                      alt="relative_link"
                      className="h-8 w-8 mr-2"
                    />
                    <a
                      href={link.link}
                      target="_blank"
                      className="md:border-b-2 border-b border-zinc-500 hover:text-yellow-400 hover:font-extrabold hover:border-yellow-400"
                      rel="noreferrer"
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
