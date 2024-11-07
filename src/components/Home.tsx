import DownImage from "../assets/Down.png";

function Home() {
  return (
    <div className="container mx-auto font-sans flex flex-col justify-center item-center h-[100vh] relative  text-center">
      <div className="">
        <div className="md:text-8xl text-5xl font-extrabold md:mb-4 mb-2">
          Hello, I'm
        </div>
        <div className="relative inline-block md:text-5xl text-2xl font-bold md:mb-4 mb-2 ">
          <span className="relative z-10">직관적이고 편리함을 추구하는</span>
          <span className="absolute left-0 bottom-0 w-full md:h-5 h-3 bg-yellow-300 opacity-70 rounded-sm z-0"></span>
        </div>
        <div className="md:text-5xl text-2xl font-bold md:mb-4 mb-2">
          이소연 입니다
        </div>
        <div> Web & App Developer</div>
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center text-gray-400 font-bold animate-bounce">
        <p>Let's Scroll Down!</p>
        <img src={DownImage} alt="scroll down" className="w-7 h-7" />
      </div>
    </div>
  );
}

export default Home;
