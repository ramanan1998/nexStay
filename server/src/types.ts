export type UserType = {
    _id: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
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