import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-800 pb-12 pt-5 px-2">
        <div className="container mx-auto flex items-center justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">
                <Link to="/">nexStay</Link>
            </span>

            <div className="space-x-2">
              <Button variant="faded">
                Register
              </Button>
              <Button variant="faded">
                  Sign In
              </Button>
            </div>
        </div>  
    </nav>
  )
}

export default Navbar