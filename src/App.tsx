import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Company from "./components/Company";
import Project from "./components/Project";
import { AboutMe } from "./components/AboutMe/AboutMe";
import NavigationBar from "./components/Nav/NavigationBar";
import { ScorllTopButton } from "./components/ScrollTopButton";
import { Education } from "./components/Educations";
import Certificate from "./components/Certificate";
import Award from "./components/Awards";
import { useViewStore } from "./store/viewStore";

function App() {
  const { section } = useViewStore();
  const handleScroll = (item: React.ReactNode) => {
    if (item) {
      const container = document.getElementById(item.toString());
      if (container) {
        container.style.scrollMarginTop = "500px";

        container.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <ChakraProvider>
      <div className="App font-sans">
        <div style={{ background: "#f6f0eacc" }}>
          <Home />
        </div>

        <div className="md:py-36 py-10 md:px-20 px-5" id="About">
          <AboutMe />
        </div>
        <div className="flex flex-row">
          <div className="lg:flex hidden sticky top-[5vh] flex-col h-[90vh] w-2/12">
            <NavigationBar handleScroll={handleScroll} />
          </div>

          <div className="px-3 py-0">
            <div className="py-10 md:px-20 px-3" id="Experience">
              <Company />
            </div>
            <div className="py-10 md:px-20 px-3" id="Project">
              <Project />
            </div>
            <div className="py-10 md:px-20 px-3" id="Education">
              <Education />
            </div>
            <div className="py-10 md:px-20 px-3" id="Certificate">
              <Certificate />
            </div>
            <div className="py-10 md:px-20 px-3" id="Award">
              <Award />
            </div>
          </div>
        </div>

        <ScorllTopButton handScrollToTop={handScrollToTop} />

        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
