
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import DetailsProduct from "./pages/detailsProduct/DetailsProduct"

function App() {


  return (

    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:productId" element={<DetailsProduct />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
