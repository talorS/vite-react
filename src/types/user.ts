export type UserApiResponse = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: GeolocationCoordinates['latitude'],
            lng: GeolocationCoordinates['longitude']
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export type UserPostsApiResponse = {
    userId: number,
    id: number,
    title: string,
    body: string
}