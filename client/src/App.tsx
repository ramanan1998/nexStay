import { Route, Navigate, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/search" element={<Layout/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
