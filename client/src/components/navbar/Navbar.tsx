import { useAppContext } from "@/contexts/AppContext"
import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import SignoutButton from "./SignoutButton";

function Navbar() {

  const { isLoggedIn } = useAppContext();

  return (
    <nav className="bg-blue-800 pb-12 pt-5 px-2">
        <div className="container mx-auto flex items-center justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">
                <Link to="/">nexStay</Link>
            </span>

            {isLoggedIn ? (
              <div className="space-x-10">
                <Link to="/">
                  <span className="text-1xl text-white font-medium tracking-tight">
                    My Hotels
                  </span>
                </Link>
                <Link to="/">
                  <span className="text-1xl text-white font-medium tracking-tight">
                    My Bookings
                  </span>
                </Link>
                <SignoutButton/>
              </div>
            ) : (
              <div className="space-x-2">
                <Button variant="faded">
                  <Link to="/register">
                      Register
                  </Link>
                </Button>
                <Button variant="faded">
                  <Link to="/sign-in">
                      Sign In
                  </Link>
                </Button>
                
              </div>
            )}

        </div>  
    </nav>
  )
}

export default Navbar