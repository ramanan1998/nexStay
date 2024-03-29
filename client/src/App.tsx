import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import { useAppContext } from "./contexts/AppContext"
import AddHotel from "./pages/AddHotel"
import HoneyCombLoader from "./components/loader/HoneyCombLoader"

function App() {

  const { isTokenValidationLoading, isTokenValidationError, authData } = useAppContext();

  if(isTokenValidationLoading){
    return <HoneyCombLoader/>
  }

  if(isTokenValidationError){
    return (
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<h1>Home</h1>}/>
          </Route>
          <Route path="/register" element={<Register/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    )
  }

  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<h1>Home</h1>}/>
          {authData.isLoggedIn && authData.role === "user" && (
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
