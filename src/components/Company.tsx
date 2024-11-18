import { Experiences } from "../utils/data";
import "react-multi-carousel/lib/styles.css";
import { Content } from "./ContentBox/Content";
import { NavData } from "../utils/NavData";

function Company() {
  return (
    <div>
      <div className=" border-b-4 pb-5 mb-10 border-yellow-300">
        <div
          className="md:text-5xl text-4xl text-black"
          style={{ fontWeight: "800" }}
        >
          Experience
        </div>
      </div>
      {Experiences.map((item, index) => {
        return (
          <Content
            {...item}
            key={index}
            index={index}
            navTitle={NavData[0].subMenu[index]}
          />
        );
      })}
    </div>
  );
}

export default Company;
