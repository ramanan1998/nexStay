import { Route, Navigate, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/search" element={<Layout/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
