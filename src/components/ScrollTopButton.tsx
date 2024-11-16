import UpButton from "../assets/Up.png";

interface handScrollToTop {
  handScrollToTop: () => void;
}

export const ScorllTopButton = ({ handScrollToTop }: handScrollToTop) => {
  return (
    <div
      className="fixed bottom-20 right-12 p-3 shadow-xl rounded-full"
      style={{ background: "#f6f0eacc" }}
      onClick={handScrollToTop}
    >
      {/* <span className="p-5 rounded-full bg-green-400 ">up</span> */}
      <img src={UpButton} alt="up_button" className="h-8 w-8" />
    </div>
  );
};
