import RelativeLinks from "../../assets/Link.png";
import Check from "../../assets/Check.png";

interface linkProps {
  title: string;
  link: string;
}
interface TitleProps {
  title: string;
  subtitle: string;
  about: string;
  date: string;
  jobs: string[];
  links: linkProps[];
}

export const Content = ({ title, subtitle, date, jobs, links }: TitleProps) => {
  return (
    <div className="font-sans" id="title">
      <div>
        <div className="text-2xl mb-3">{subtitle}</div>
        <div className="text-4xl mb-3">{title}</div>
        <div className="md:text-base text-sm mb-3">{date}</div>
        <div className="dot mb-5">
          <ul className="text-xl list-disc">
            {jobs.map((job) => {
              return (
                <li className="mb-1 flex flex-row">
                  <img
                    src={Check}
                    alt="relative_link"
                    className="h-8 w-8 mr-2"
                  />
                  <span>{job}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="font-bold text-2xl mb-3 flex flex-row">
          <img
            src={RelativeLinks}
            alt="relative_link"
            className="h-8 w-8 mr-2"
          />
          <span>관련링크</span>
        </div>
        <ul className="text-xl list-disc">
          {links.map((link) => {
            return (
              <li className="mb-1 flex flex-row">
                <img src={Check} alt="relative_link" className="h-8 w-8 mr-2" />
                <a href={link.link}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
