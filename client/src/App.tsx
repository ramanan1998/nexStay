import { Route, Navigate, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<h1>Hello</h1>}/>
          <Route path="/search" element={<h1>Search</h1>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
