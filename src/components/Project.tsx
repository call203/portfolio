import { Experiences, Projects } from "../data";
import { Image } from "@chakra-ui/react";

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
      {Experiences.map((item) => {
        return <Content {...item} />;
      })}
    </div>
  );
}
export default Project;
