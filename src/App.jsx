import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import Home from "./components/Home/Home"

export default function App(){
  return(
    <div>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />}/>
            <Route path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
};