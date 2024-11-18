import { Awards } from "../utils/data";
import "react-multi-carousel/lib/styles.css";
import { Content } from "./ContentBox/Content";
import { NavData } from "../utils/NavData";

function Award() {
  const wardName = ["동상", "장려상"];

  return (
    <div>
      <div className=" border-b-4 pb-5 mb-10 border-yellow-300">
        <div
          className="md:text-5xl text-4xl text-black"
          style={{ fontWeight: "800" }}
        >
          Award
        </div>
      </div>
      {Awards.map((item, index) => {
        const regex = new RegExp(wardName.join("|"), "g");
        const navTitle = item.title.replace(regex, "");

        return (
          <Content
            {...item}
            key={index}
            index={index}
            navTitle={NavData[4].subMenu[index]}
          />
        );
      })}
    </div>
  );
}

export default Award;
