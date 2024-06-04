import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import { useAppContext } from "./contexts/AppContext"
import AddHotel from "./pages/AddHotel"
import HoneyCombLoader from "./components/loader/HoneyCombLoader"
import MyHotels from "./pages/MyHotels"
import EditHotel from "./pages/EditHotel"

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
            <>
              <Route path="add-hotel" element={<AddHotel/>}/>
              <Route path="edit-hotel/:hotelId" element={<EditHotel/>}/>
              <Route path="my-hotels" element={<MyHotels/>}/>
            </>
          )}
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
