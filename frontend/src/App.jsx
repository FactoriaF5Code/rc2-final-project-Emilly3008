
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import DetailsProduct from "./components/detailsproduct/DetailsProduct"


function App() {


  return (


    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:productId" element={<DetailsProduct />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
