import { Route, Navigate, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import { useAppContext } from "./contexts/AppContext"
import AddHotel from "./pages/AddHotel"

function App() {

  const { isLoggedIn, role } = useAppContext();

  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<h1>Hello</h1>}/>
          {isLoggedIn && role === "user" && (
              <Route path="add-hotel" element={<AddHotel/>}/>
          )}
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
