import { Link } from "react-router-dom"
import { Button } from "../ui/button"

function Navbar() {
  return (
    <nav className="bg-blue-800 pb-12 pt-5">
        <div className="container mx-auto flex items-center justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">
                <Link to="/">nexStay</Link>
            </span>
            <Button>
                Sign In
            </Button>
        </div>  
    </nav>
  )
}

export default Navbar