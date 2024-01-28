import Hero from "@/components/navbar/Hero"
import Navbar from "../components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <Hero/>
        <div className="h-screen"></div>
        <Footer/>
    </div>
  )
}

export default Layout