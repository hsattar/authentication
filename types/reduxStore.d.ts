interface IReduxStore {
    user: {
        isLoggedIn: boolean
        currentUser: IUser | null
    }
}

interface IUser {
    _id: string
    firstName: string
    lastName: string
    email: string
    avatar: string
}