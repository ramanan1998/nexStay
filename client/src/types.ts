

export type RegisterFormType = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type ToastMessage = {
    message: string,
    type: "SUCCESS" | "ERROR" | "WARNING"
}