import { createContext, useEffect, useReducer } from "react";


const userReducer = (state, action) => {
    switch (action.type) {
        case "SIGNUP":
            return { ...state, user: action.payload }
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state
    }
}


export const UserContext = createContext();
const initialState = {
    user: null,
}

export const UserContextProvider = ({ children }) => {
    const [userState, userDispatch] = useReducer(userReducer, initialState)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            userDispatch({ type: "LOGIN", payload: user })
        }
    }, [])
    console.log(userState)

    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            {children}
        </UserContext.Provider>
    )
}

