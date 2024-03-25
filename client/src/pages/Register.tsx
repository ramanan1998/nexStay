import { Icons } from "@/assets/icons"
import useToggle from "@/hooks/useToggle";
import { Link, useNavigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form";
import { RegisterFormType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "@/apis/api-client";
import { useAppContext } from "@/contexts/AppContext";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

function Register() {

  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { register, control, handleSubmit, watch, formState: { errors }, } = useForm<RegisterFormType>({ defaultValues: { rememberMe: false } });
  const [ isPasswordVisible, togglePasswordVisibility ] = useToggle();
  const [ isConfirmPasswordVisible, toggleConfirmPasswordVisibility ] = useToggle();

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: async (response) => {

        await queryClient.invalidateQueries({
            queryKey: [ "validateToken" ]
        });

        showToast({
            type: "SUCCESS",
            title: "Yayy!! Registration Success",
            message: response.message
        })
        return navigate("/");
    },
    onError: (error) => {
        return showToast({
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
                <div className="flex flex-row items-center relative">
                    <Input 
                        id="password"
                        placeholder="*******" 
                        required
                        type={isPasswordVisible ? "text" : "password"} 
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
                    {isPasswordVisible ? 
                        <Eye onClick={() => togglePasswordVisibility()} className="text-slate-400 absolute cursor-pointer right-3" />
                    :
                        <EyeOff onClick={() => togglePasswordVisibility()} className="text-slate-400 absolute cursor-pointer right-3" />
                    }
                </div>
                <p className="text-xs mt-1 font-medium text-red-500">{errors?.password?.message}</p>
            </div>
            <div className="mb-5">
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <div className="flex flex-row items-center relative">
                    <Input
                        id="confirm-password" 
                        placeholder="*******" 
                        required 
                        type={isConfirmPasswordVisible ? "text" : "password"} 
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
                    {isConfirmPasswordVisible ? 
                        <Eye onClick={() => toggleConfirmPasswordVisibility()} className="text-slate-400 absolute cursor-pointer right-3" />
                    :
                        <EyeOff onClick={() => toggleConfirmPasswordVisibility()} className="text-slate-400 absolute cursor-pointer right-3" />
                    }
                </div>
                <p className="text-xs mt-1 font-medium text-red-500">{errors?.confirmPassword?.message}</p>
            </div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                    <Controller
                        control={control}
                        name="rememberMe"
                        render={({ field }) => (
                            <Checkbox 
                                id="remember-me"
                                checked={field.value}
                                onCheckedChange={() => field.onChange(!field.value)}
                            />
                        )}
                    />
                    <label
                        htmlFor="remember-me"
                        className="block text-sm font-medium text-gray-900 dark:text-white leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>
                <div>
                    <Link to="/sign-in" className="text-sm font-bold text-primary-blue hover:underline">Already have an account? Sign In</Link>
                </div>
            </div>
            <Button 
                type="submit" 
                size="sm" 
                className="bg-primary-blue text-white hover:bg-dark-blue w-full"
                disabled={isPending}
            >
                {isPending ? <Icons.spinner className="h-5 w-5 animate-spin" /> : "Submit"}
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
    </div>
  )
}

export default Register