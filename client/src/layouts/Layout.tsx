// import Hero from "@/components/navbar/Hero"
import Navbar from "../components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        {/* <Hero/> */}
        <div className="container min-h-screen">
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout