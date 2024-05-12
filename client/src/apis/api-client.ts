import { HotelType, RegisterFormType, SignInFormType } from "@/types"
import axios, { AxiosResponse } from "axios";


export const API_BASE_URL = import.meta.env.VITE_NODE_ENV === "dev" ? "http://localhost:5000" : import.meta.env.VITE_API_BASE_URL as ImportMeta;

export const registerUser = async (formdata: RegisterFormType) => {

    return await axios({
        url: `${API_BASE_URL}/api/users/register`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
        data: JSON.stringify(formdata)
    })

}

export const signInUser = async (formdata: SignInFormType) => {
    
    return await axios({
        url: `${API_BASE_URL}/api/auth/login`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
        data: JSON.stringify(formdata)
    })
}

export const signOutUser = async () => {
    return await axios({
        url: `${API_BASE_URL}/api/auth/logout`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
    })
}

export const validateToken = async () => {
    
    return await axios({
        url: `${API_BASE_URL}/api/auth/validate-token`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
    })
}

// add hotel

export const createNewHotel = async (formdata: FormData) => {
    
    return await axios({
        url: `${API_BASE_URL}/api/my-hotels`,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
        data: formdata
    })
}

// get all hotels

export const getAllHotels = async (): Promise<AxiosResponse<HotelType[]>> => {
   
    return await axios({
        url: `${API_BASE_URL}/api/my-hotels`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
    })
}
