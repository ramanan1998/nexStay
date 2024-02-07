export type RegisterFormType = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string,
    rememberMe: boolean
}

export type SignInFormType = {
    email: string,
    password: string
}

export type ToastMessage = {
    title: string,
    message: string,
    type: "SUCCESS" | "ERROR" | "WARNING"
}