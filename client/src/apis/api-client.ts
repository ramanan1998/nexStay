import { RegisterFormType, SignInFormType } from "@/types"

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as ImportMeta || "";

export const registerUser = async (formdata: RegisterFormType) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(formdata)
    });

    const json = await response.json();

    if(!response.ok){
        throw new Error(json.message);
    }

    return json;
}

export const signInUser = async (formdata: SignInFormType) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(formdata)
    });

    const json = await response.json();

    if(!response.ok){
        throw new Error(json.message);
    }

    return json;
}

export const signOutUser = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
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