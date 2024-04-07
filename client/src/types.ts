export type ErrorResponse = {
    status: number,
    statusText: string,
    response: Response
}

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

export type HotelType = {
    _id: string,
    userId: string,
    name: string,
    city: string,
    description: string,
    type: string,
    adultCount: number,
    childrenCount: number,
    infantCount: number,
    facilities: string[],
    pricePerNight: number,
    rating: number,
    imageUrl: string[],
    lastUpdated: Date
}