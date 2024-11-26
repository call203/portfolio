import { Skills } from "../utils/data";

function Skill() {
  return (
    <div>
      <div className=" border-b-4 pb-5 mb-10 border-yellow-300">
        <div
          className="md:text-5xl text-4xl text-black"
          style={{ fontWeight: "800" }}
        >
          Skill
        </div>
      </div>
      {Skills.map((item, index) => {
        return (
          <div id={item.title} className="mb-5" key={index}>
            <div className="font-bold md:text-2xl text-xl mb-1">
              {item.title}
            </div>
            <div className="flex flex-row flex-wrap">
              {item.skills.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="py-1 px-2 rounded-md text-orange-600 bg-orange-100 md:text-sm  text-xs mr-2 font-semibold mt-1"
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Skill;
