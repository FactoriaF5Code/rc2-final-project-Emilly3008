import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  

  return (
    
    <BrowserRouter >
    <Routes>
      <Route  path="/" element={<home/>}/>
    </Routes>
    
      
    </BrowserRouter>
  )
}

export default App