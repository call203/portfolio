import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Stack from "./components/Stack";
import Company from "./components/Company";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { About } from "./components/About";

function App() {
  const handleScroll = (item: React.ReactNode) => {
    if (item) {
      const container = document.getElementById(item.toString());
      if (container) {
        container.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Header handleScroll={handleScroll} />
        <Home />
        <div className="md:px-32 px-10">
          <div className="py-36" id="About">
            <About />
          </div>
          <div className="pb-11  pt-40 px-3" id="Stack">
            <Stack />
          </div>
          <div className="md:pb-24 pb-36  lg:px-40 px-5" id="Company">
            <Company />
          </div>
          <div className="md:pb-24 pb-20  lg:px-40 px-5" id="Project">
            <Project />
          </div>
          <div className="md:pb-24 pb-20  pt-60 lg:px-80 px-10" id="Contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
