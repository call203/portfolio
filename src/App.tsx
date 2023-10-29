import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Home />
        <div className="py-20 px-3">
          <AboutMe />
        </div>

        <Footer />
      </div>
    </ChakraProvider>
  )
}

export default App
