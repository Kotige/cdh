import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import StoryPage from "./pages/StoryPage";
import About from "./pages/AboutMe";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contos/:slug" element={<StoryPage />}/>
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
