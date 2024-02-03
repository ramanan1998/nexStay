import { Icons } from "@/assets/icons"
import useToggle from "@/hooks/useToggle";
import { Button, Checkbox, Input } from "@nextui-org/react"
import { Link, useNavigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form";
import { RegisterFormType } from "@/types";
import { DevTool } from "@hookform/devtools";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/apis/api-client";
import { useAppContext } from "@/contexts/AppContext";

function Register() {

  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const { register, control, handleSubmit, watch, formState: { errors }, } = useForm<RegisterFormType>({ defaultValues: { rememberMe: false } });
  const [ isPasswordVisible, togglePasswordVisibility ] = useToggle();
  const [ isConfirmPasswordVisible, toggleConfirmPasswordVisibility ] = useToggle();

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (response) => {
        navigate("/");
        showToast({
            type: "SUCCESS",
            title: "Yayy!! Registration Success",
            message: response.message
        })
    },
    onError: (error) => {
        showToast({
            type: "ERROR",
            title: "Uh oh!! Registration Failed",
            message: error.message
        })
    }
  })

  const createUser = handleSubmit((data) => {
    mutate(data)
  })

  return (
    <div className="flex flex-col gap-3 items-center min-h-screen">
        <h1 className="text-2xl font-bold mb-5 mt-5">Sign in or create an account</h1>
        <form className="w-full md:w-1/3 mx-auto px-2" onSubmit={createUser}>
            <div className="mb-5 flex flex-col md:flex-row gap-2">
                <div className="w-full">
                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                    <Input 
                        size="sm"
                        type="text" 
                        id="firstname" 
                        placeholder="Bruce" 
                        required
                        {...register("firstname", {
                            required: {
                                value: true,
                                message: "first name is required"
                            }
                        })} 
                    />
                    <p className="text-xs mt-1 font-medium text-red-500">{errors?.firstname?.message}</p>
                </div>
                <div className="w-full">
                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                    <Input 
                        size="sm"
                        type="text" 
                        id="lastname" 
                        placeholder="Wayne" 
                        required
                        {...register("lastname", {
                            required: {
                                value: true,
                                message: "last name is required"
                            }
                        })}  
                    />
                    <p className="text-xs mt-1 font-medium text-red-500">{errors?.lastname?.message}</p>
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <Input 
                    size="sm"
                    type="email" 
                    id="email" 
                    placeholder="name@xmail.com" 
                    required 
                    {...register("email", {
                        required: {
                            value: true,
                            message: "email is required"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "email format is not valid"
                        }
                    })} 
                />
                <p className="text-xs mt-1 font-medium text-red-500">{errors?.email?.message}</p>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <Input 
                    size="sm"
                    id="password" 
                    required
                    type={isPasswordVisible ? "text" : "password"} 
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={():void => togglePasswordVisibility()}>
                            {isPasswordVisible ? (
                                <Icons.EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <Icons.EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    {...register("password", {
                        required: {
                            value: true,
                            message: "password is required"
                        },
                        minLength: {
                            value: 6,
                            message: "password must be atleast 6 characters"
                        }
                    })} 
                    
                />
                <p className="text-xs mt-1 font-medium text-red-500">{errors?.password?.message}</p>
            </div>
            <div className="mb-5">
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <Input
                    size="sm" 
                    id="confirm-password" 
                    required 
                    type={isConfirmPasswordVisible ? "text" : "password"} 
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={():void => toggleConfirmPasswordVisibility()}>
                            {isConfirmPasswordVisible ? (
                                <Icons.EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <Icons.EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    {...register("confirmPassword", {
                        validate: (value) => {
                            if(!value){
                                return "confirm password is required"
                            }else if(watch("password") !== value){
                                return "passwords do not match"
                            }
                        }
                    })} 
                    
                />
                <p className="text-xs mt-1 font-medium text-red-500">{errors?.confirmPassword?.message}</p>
            </div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                    <Controller
                        control={control}
                        name="rememberMe"
                        render={({ field }) => (
                            <Checkbox 
                                size="md" 
                                id="remember-me"
                                checked={field.value}
                                onChange={() => field.onChange(!field.value)}
                            />
                        )}
                    />
                    <label
                        htmlFor="remember-me"
                        className="block text-sm font-medium text-gray-900 dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>
                <div>
                    <Link to="/login" className="text-sm font-bold text-blue-800">Already have an account? Sign In</Link>
                </div>
            </div>
            <Button 
                type="submit" 
                size="sm" 
                className="bg-blue-800 text-white hover:bg-blue-900 w-full"
                isLoading={isPending}
            >
                Submit
            </Button>
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
        <DevTool control={control} />
    </div>
  )
}

export default Register