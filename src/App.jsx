import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import LandingCanvas from "./components/Landing/Landing"
import Title from "./components/Title/Title"
import CircleText from "./components/CircleText/CircleText"
import AboutMe from "./components/AboutMe/AboutMe"
import Service from "./components/Service/Service"

const App = () => {
  return (
    <div style={{height: '100vh'}}>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<> <Navbar />
            <LandingCanvas />
            <Title />
            <CircleText /> </>} />

            <Route path="/about" element={<><Navbar /> <LandingCanvas/> <AboutMe/></>} />
            <Route path="/service" element={<><Navbar /> <LandingCanvas/> <Service/></>} />
            <Route path="/connect" element={<><Navbar /><AboutMe/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
