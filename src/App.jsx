import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Teste from "./pages/publications/teste";
import StoryPage from "./pages/StoryPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/storypage" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
