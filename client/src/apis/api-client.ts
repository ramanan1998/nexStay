import { RegisterFormType } from "@/types"

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const registerUser = async (formdata: RegisterFormType) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
    });

    const json = await response.json();

    if(!response.ok){
        throw new Error(json.message);
    }

    return json;
}

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const json = await response.json();

    if(!response.ok){
        throw new Error("Invalid Token");
    }

    return json;
}