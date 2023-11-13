import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"

export default function App(){
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};