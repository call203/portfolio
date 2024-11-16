import { Experiences } from "../utils/data";
import "react-multi-carousel/lib/styles.css";
import { Content } from "./ContentBox/Content";

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
        return <Content {...item} key={index} />;
      })}
    </div>
  );
}

export default Company;
