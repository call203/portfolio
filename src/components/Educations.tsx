import { Educations } from "../utils/data";
import { NavData } from "../utils/NavData";
import { Content } from "./ContentBox/Content";

export const Education = () => {
  return (
    <div>
      <div className=" border-b-4 pb-5 mb-10 border-yellow-300">
        <div
          className="md:text-5xl text-4xl text-black"
          style={{ fontWeight: "800" }}
        >
          Education
        </div>
      </div>
      {Educations.map((item, index) => {
        return (
          <Content
            {...item}
            key={index}
            index={index}
            navTitle={NavData[2].subMenu[index]}
          />
        );
      })}
    </div>
  );
};
