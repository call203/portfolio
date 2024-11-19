import UpButton from "../assets/Up.png";

interface handScrollToTop {
  handScrollToTop: () => void;
}

export const ScorllTopButton = ({ handScrollToTop }: handScrollToTop) => {
  return (
    <div
      className="fixed bottom-12 right-5 p-3 shadow-xl rounded-full border bg-white animate-bounce"
      onClick={handScrollToTop}
    >
      <img src={UpButton} alt="up_button" className="md:h-8 md:w-8  w-5 h-5" />
    </div>
  );
};
