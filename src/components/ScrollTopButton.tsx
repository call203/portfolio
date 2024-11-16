import UpButton from "../assets/Up.png";

interface handScrollToTop {
  handScrollToTop: () => void;
}

export const ScorllTopButton = ({ handScrollToTop }: handScrollToTop) => {
  return (
    <div
      className="fixed bottom-20 right-12 p-3 shadow-xl rounded-full border "
      onClick={handScrollToTop}
    >
      <img src={UpButton} alt="up_button" className="h-8 w-8 b" />
    </div>
  );
};
