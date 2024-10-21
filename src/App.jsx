import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
// import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen text-yellow-50" id="app-conatiner">
        <Header />
        <Routes>
          <Route index path="/" element={<Navigate to="/Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        {/* <Footer/> */}
        
      </div>
    </>
  );
}

export default App;
