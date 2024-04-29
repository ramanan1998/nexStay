import { useAppContext } from "@/contexts/AppContext"
import { Link } from "react-router-dom"
import SignoutButton from "./SignoutButton";
import { Button } from "../ui/button";

function Navbar() {

  const { authData } = useAppContext();

  return (
    <nav className="bg-primary-blue py-5 px-2">
        <div className="container mx-auto flex items-center justify-between">
            <span className="text-3xl font-bold tracking-tight text-white">
                <Link to="/">nexStay</Link>
            </span>

            {authData.isLoggedIn ? (
              <div className="space-x-10">
                <Link to="/my-hotels">
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
                <Link to="/register">
                  <Button variant="secondary">
                    Register
                  </Button>
                </Link>
                <Link to="/sign-in">
                  <Button variant="secondary">
                    Sign In
                  </Button>
                </Link>
                
              </div>
            )}

        </div>  
    </nav>
  )
}

export default Navbar