import Avatar from "../assets/Avatar.png";
import { Image } from "@chakra-ui/image";

function Home() {
  return (
    <div className="container mx-auto font-sans">
      <div className="flex justify-center">
        <Image
          src={Avatar}
          alt="profile img"
          className="h-auto max-w-full w-4/12"
        />
      </div>
      <div className="flex justify-center lg:text-xl text-lg">
        <p>Hello, I'm</p>
      </div>
      <div className="flex justify-center font-oleo text-6xl mb-5">
        <p>Soyeon Lee</p>
      </div>
      <div className="justify-center  text-center font-bold mb-5 text-sm lg:text-lg">
        <p>Web & App Developer</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:w-1/3 w-2/4 lg:text-lg text-md font-normal text-center">
          I love making websites and apps that people find easy to use and
          enjoy. I'm always excited about finding the connections between human
          behavior and digital tools. Let's create something amazing together!
        </p>
      </div>
    </div>
  );
}

export default Home;
