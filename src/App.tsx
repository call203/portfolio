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

        <div
          className="md:py-36 py-10 px-3"
          id="About"
          style={{ background: "#f6f0eacc" }}
        >
          <About />
        </div>
        <div className="px-3">
          <div className="py-32 md:px-32 px-10" id="Stack">
            <Stack />
          </div>
          <div className="py-32 md:px-32 px-10" id="Company">
            <Company />
          </div>
          <div className="py-32 md:px-32 px-10" id="Project">
            <Project />
          </div>
          <div className="py-32 md:px-32 px-10" id="Contact">
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
