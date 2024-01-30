import { Icons } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="flex flex-col gap-3 items-center min-h-screen">
        <h1 className="text-2xl font-bold mb-5 mt-5">Sign in or create an account</h1>
        <form className="w-full md:w-1/3 mx-auto px-2">
            <div className="mb-5 flex flex-col md:flex-row gap-2">
                <div className="w-full">
                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                    <Input type="text" id="firstname" placeholder="Bruce" required />
                </div>
                <div className="w-full">
                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                    <Input type="text" id="lastname" placeholder="Wayne" required />
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <Input type="email" id="email" placeholder="name@xmail.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <Input type="password" id="password" required />
            </div>
            <div className="mb-5">
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <Input type="password" id="confirm-password" required />
            </div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="block text-sm font-medium text-gray-900 dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>
                <div>
                    <Link to="/login" className="text-sm font-bold text-blue-800">Already have an account? Sign In</Link>
                </div>
            </div>
            <Button className="bg-blue-800 text-white hover:bg-blue-900 w-full">Submit</Button>
            <div className="flex flex-row items-center mt-4 gap-2">
                <div className="w-full h-[1px] bg-slate-300"></div>
                <span className="text-sm w-full text-nowrap">or use one of these options</span>
                <div className="w-full h-[1px] bg-slate-300"></div>
            </div>
            <div className="flex flex-row gap-3 mt-3">
                <button title="Facebook" className="w-full flex flex-row items-center justify-center gap-1 text-sm font-medium py-3 border border-slate-200 rounded-lg hover:border-blue-500 transition-all duration-200">
                    <Icons.facebook className="h-5 w-5"/>
                </button>
                <button title="Google" className="w-full flex flex-row items-center justify-center gap-1 text-sm font-medium py-3 border border-slate-200 rounded-lg hover:border-blue-500 transition-all duration-200">
                    <Icons.google className="h-5 w-5"/> 
                </button>
                <button title="Apple" className="w-full flex flex-row items-center justify-center gap-1 text-sm font-medium py-3 border border-slate-200 rounded-lg hover:border-blue-500 transition-all duration-200">
                    <Icons.apple className="h-5 w-5"/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Register