import { Projects } from "../utils/data";
import { Content } from "./ContentBox/Content";

function Project() {
  return (
    <div>
      <div className=" border-b-4 pb-5 mb-10 border-yellow-300">
        <div
          className="md:text-5xl text-4xl text-black"
          style={{ fontWeight: "800" }}
        >
          Project
        </div>
      </div>
      {Projects.map((item, index) => {
        return <Content {...item} key={index} />;
      })}
    </div>
  );
}
export default Project;
