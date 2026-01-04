import Home from "./Pages/Home" 
import { Routes, Route } from "react-router-dom"
import SignIn from "./Pages/SignIn"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<SignIn />} />  
    </Routes>
  )
}

export default App
